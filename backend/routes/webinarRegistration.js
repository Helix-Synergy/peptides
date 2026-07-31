const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { WebinarRegistration } = require('../models/FormSchemas');
const { sendEmail } = require('../utils/emailSender');
const { confirmationTemplate, paymentReceiptTemplate } = require('../utils/emailTemplates');

router.post('/', async (req, res) => {
    try {
        const { formData, paymentDetails } = req.body;
        
        // Ensure Razorpay payment details are present
        if (!paymentDetails || !paymentDetails.razorpay_payment_id || !paymentDetails.razorpay_order_id || !paymentDetails.razorpay_signature) {
            return res.status(400).json({ success: false, message: 'Missing payment details' });
        }

        // Verify Razorpay Signature
        const body = paymentDetails.razorpay_order_id + "|" + paymentDetails.razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature !== paymentDetails.razorpay_signature) {
            return res.status(400).json({ success: false, message: 'Invalid payment signature' });
        }

        // Save to Database
        const webinarData = {
            ...formData,
            razorpay_order_id: paymentDetails.razorpay_order_id,
            razorpay_payment_id: paymentDetails.razorpay_payment_id,
            payment_status: 'Paid',
            source: 'SmartMaterials'
        };

        const registration = new WebinarRegistration(webinarData);
        await registration.save();
        console.log("✅ Webinar Registration saved to DB:", registration._id);

        try {
            // Send confirmation email
            const userSubject = `Confirmation: Webinar Registration`;
            const userHtml = confirmationTemplate(formData.firstName, 'Webinar Registration');
            await sendEmail(formData.email, userSubject, userHtml);

            // Removed HTML receipt generation to avoid duplicate. The PDF will be sent via /send-pdf-receipt
        } catch (emailError) {
            console.error("⚠️ Email failed but data saved:", emailError.message);
        }

        res.status(200).json({ success: true, message: 'Registration submitted successfully!' });
    } catch (error) {
        console.error('Error handling webinar registration:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});

// GET all webinar registrations
router.get('/', async (req, res) => {
    try {
        const { source } = req.query;
        let query = {};
        if (source) {
            query.source = source;
        }

        const registrations = await WebinarRegistration.find(query).sort({ createdAt: -1 });
        res.status(200).json(registrations);
    } catch (error) {
        console.error('Error fetching webinar registrations:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
});



router.post('/send-pdf-receipt', async (req, res) => {
    try {
        const { email, pdfBase64, paymentId } = req.body;
        
        if (!email || !pdfBase64) {
            return res.status(400).json({ success: false, message: 'Missing email or pdfBase64' });
        }

        const buffer = Buffer.from(pdfBase64, 'base64');
        const attachments = [
            {
                filename: `Pepcon-Receipt-${paymentId}.pdf`,
                content: buffer
            }
        ];

        const subject = `Payment Receipt: Smart Materials Webinar`;
        const html = `<p>Dear Participant,</p><p>Thank you for your registration. Please find attached your official payment receipt for the Smart Materials Webinar.</p><br><p>Best Regards,<br>Pepcon Team</p>`;
        
        await sendEmail(email, subject, html, attachments);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending PDF receipt:', error);
        res.status(500).json({ success: false });
    }
});

module.exports = router;
