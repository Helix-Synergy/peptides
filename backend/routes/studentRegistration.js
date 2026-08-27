const express = require('express');
const router = express.Router();
const multer = require('multer');
const { sendEmail } = require('../utils/emailSender');
const { ownerTemplate, confirmationTemplate } = require('../utils/emailTemplates');
const fs = require('fs');
const path = require('path');
const { Student } = require('../models/FormSchemas');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.get('/', async (req, res) => {
    try {
        const query = req.query.source === 'Peptides'
            ? { $or: [{ source: 'Peptides' }, { source: { $exists: false } }] }
            : (req.query.source ? { source: req.query.source } : {});
        const students = await Student.find(query).sort({ createdAt: -1 });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
    }
});

router.post('/', upload.single('paymentScreenshot'), async (req, res) => {
    const uploadedFile = req.file;
    const formData = req.body;
    const userEmail = formData.email;
    const formName = 'Student Registration';

    try {
        // Fix: Map 'mobile' from frontend to 'phone' in schema
        if (formData.mobile && !formData.phone) {
            formData.phone = formData.mobile;
        }

        // 1. Save to Database (PRIMARY)
        let student = await Student.findOne({ email: userEmail });
        
        if (student) {
            if (student.payment_status === 'Paid') {
                return res.status(409).json({ success: false, message: 'You have already registered and paid successfully.' });
            } else {
                // Upsert: Update existing pending record
                Object.assign(student, formData);
                if (uploadedFile) student.paymentScreenshot = uploadedFile.path;
                student.payment_status = 'Pending'; // Ensure it stays Pending if they retry
                await student.save();
                console.log("✅ Student Registration updated in DB:", student._id);
            }
        } else {
            // Create new record
            const studentData = { 
                ...formData, 
                paymentScreenshot: uploadedFile ? uploadedFile.path : null,
                payment_status: 'Pending'
            };
            student = new Student(studentData);
            await student.save();
            console.log("✅ Student Registration saved to DB:", student._id);
        }

        try {
            // 2. Send emails (SECONDARY)
            // Prepare attachment for both emails
            const attachments = uploadedFile ? [{
                filename: uploadedFile.originalname,
                path: uploadedFile.path
            }] : [];

            // Send email to the owner
            const ownerSubject = `New ${formName}`;
            const ownerHtml = ownerTemplate(formData, formName);
            await sendEmail(process.env.OWNER_EMAIL, ownerSubject, ownerHtml, attachments);

            // Send confirmation email to the student
            const userSubject = `Confirmation: ${formName} Submission`;
            const userHtml = confirmationTemplate(formData.firstName, formName);
            await sendEmail(userEmail, userSubject, userHtml, attachments);
        } catch (emailError) {
            console.error("⚠️ Email failed but data saved:", emailError.message);
        }

        res.status(200).json({ success: true, message: 'Registration submitted successfully!', recordId: student._id });
    } catch (error) {
        console.error('Error handling student registration:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    } finally {
        // Do NOT delete the file - we need it for the dashboard!
        // if (uploadedFile && fs.existsSync(uploadedFile.path)) {
        //     fs.unlinkSync(uploadedFile.path);
        // }
    }
});

module.exports = router;