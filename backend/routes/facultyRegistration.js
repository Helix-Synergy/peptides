const express = require('express');
const router = express.Router();
const multer = require('multer');
const { sendEmail } = require('../utils/emailSender');
const { ownerTemplate, confirmationTemplate } = require('../utils/emailTemplates');
const fs = require('fs');
const path = require('path');
const { Faculty } = require('../models/FormSchemas');

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
        const faculty = await Faculty.find(query).sort({ createdAt: -1 });
        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faculty' });
    }
});

router.post('/', upload.single('paymentScreenshot'), async (req, res) => {
    const uploadedFile = req.file;
    const formData = req.body;
    const userEmail = formData.email;
    const formName = 'Faculty Registration';

    try {
        // Fix: Map 'mobile' from frontend to 'phone' in schema
        if (formData.mobile && !formData.phone) {
            formData.phone = formData.mobile;
        }

        // 1. Save to Database (PRIMARY)
        let faculty = await Faculty.findOne({ email: userEmail });
        
        if (faculty) {
            if (faculty.payment_status === 'Paid') {
                return res.status(409).json({ success: false, message: 'You have already registered and paid successfully.' });
            } else {
                // Upsert: Update existing pending record
                Object.assign(faculty, formData);
                if (uploadedFile) faculty.paymentScreenshot = uploadedFile.path;
                faculty.payment_status = 'Pending';
                await faculty.save();
                console.log("✅ Faculty Registration updated in DB:", faculty._id);
            }
        } else {
            // Create new record
            const facultyData = { 
                ...formData, 
                paymentScreenshot: uploadedFile ? uploadedFile.path : null,
                payment_status: 'Pending'
            };
            faculty = new Faculty(facultyData);
            await faculty.save();
            console.log("✅ Faculty Registration saved to DB:", faculty._id);
        }

        try {
            // 2. Send emails (SECONDARY)
            const attachments = uploadedFile ? [{
                filename: uploadedFile.originalname,
                path: uploadedFile.path
            }] : [];

            // Send email to owner
            const ownerSubject = `New ${formName}`;
            const ownerHtml = ownerTemplate(formData, formName);
            await sendEmail(process.env.OWNER_EMAIL, ownerSubject, ownerHtml, attachments);

            // Send confirmation email to user
            const userSubject = `Confirmation: ${formName} Submission`;
            const userHtml = confirmationTemplate(formData.firstName, formName);
            await sendEmail(userEmail, userSubject, userHtml, attachments);
        } catch (emailError) {
            console.error("⚠️ Email failed but data saved:", emailError.message);
        }

        res.status(200).json({ success: true, message: 'Registration submitted successfully!', recordId: faculty._id });
    } catch (error) {
        console.error('Error handling faculty registration:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    } finally {
        // Do NOT delete the file - we need it for the dashboard!
        // if (uploadedFile && fs.existsSync(uploadedFile.path)) {
        //     fs.unlinkSync(uploadedFile.path);
        // }
    }
});

module.exports = router;