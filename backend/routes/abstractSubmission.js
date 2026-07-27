const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { AbstractSubmission } = require('../models/FormSchemas');
const fs = require('fs');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '..', 'uploads');
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'abstract-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// GET all abstracts (optionally filter by source)
router.get('/', async (req, res) => {
    try {
        const { source } = req.query;
        let query = {};
        if (source) query.source = source;

        const abstracts = await AbstractSubmission.find(query).sort({ createdAt: -1 });
        res.status(200).json(abstracts);
    } catch (error) {
        console.error('Error fetching abstracts:', error);
        res.status(500).json({ message: 'Error fetching abstracts' });
    }
});

// POST new abstract
router.post('/', upload.single('pdfFile'), async (req, res) => {
    try {
        const formData = req.body;
        
        if (req.file) {
            formData.pdfFile = 'uploads/' + req.file.filename;
        }

        const abstract = new AbstractSubmission(formData);
        await abstract.save();
        
        res.status(201).json({ success: true, message: 'Abstract submitted successfully', data: abstract });
    } catch (error) {
        console.error('Error handling abstract submission:', error);
        res.status(500).json({ success: false, message: 'Failed to submit abstract' });
    }
});

module.exports = router;
