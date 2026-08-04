const express = require('express');
const router = express.Router();
const { WorkshopRegistration } = require('../models/FormSchemas');
const exceljs = require('exceljs');

// POST: Save a new workshop registration
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, organization, workshopName, source } = req.body;

        const newRegistration = new WorkshopRegistration({
            firstName,
            lastName,
            email,
            phone,
            organization,
            workshopName: workshopName || 'Glow Craft',
            source: source || 'Peptides'
        });

        await newRegistration.save();
        res.status(201).json({ message: 'Registration successful', data: newRegistration });
    } catch (error) {
        console.error('Error saving workshop registration:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET: Fetch all registrations (for admin dashboard)
router.get('/', async (req, res) => {
    try {
        const { source } = req.query;
        let query = {};
        if (source) {
            query.source = source;
        }

        const registrations = await WorkshopRegistration.find(query).sort({ createdAt: -1 });
        res.status(200).json(registrations);
    } catch (error) {
        console.error('Error fetching workshop registrations:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET: Export registrations to Excel
router.get('/export', async (req, res) => {
    try {
        const { source } = req.query;
        let query = {};
        if (source) {
            query.source = source;
        }

        const registrations = await WorkshopRegistration.find(query).sort({ createdAt: -1 });

        const workbook = new exceljs.Workbook();
        const worksheet = workbook.addWorksheet('Workshop Registrations');

        worksheet.columns = [
            { header: 'First Name', key: 'firstName', width: 20 },
            { header: 'Last Name', key: 'lastName', width: 20 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Phone', key: 'phone', width: 15 },
            { header: 'Organization', key: 'organization', width: 30 },
            { header: 'Workshop Name', key: 'workshopName', width: 20 },
            { header: 'Source', key: 'source', width: 15 },
            { header: 'Registration Date', key: 'createdAt', width: 25 },
        ];

        registrations.forEach((reg) => {
            worksheet.addRow({
                firstName: reg.firstName,
                lastName: reg.lastName,
                email: reg.email,
                phone: reg.phone,
                organization: reg.organization,
                workshopName: reg.workshopName,
                source: reg.source,
                createdAt: reg.createdAt.toLocaleString(),
            });
        });

        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.setHeader(
            'Content-Disposition',
            'attachment; filename=' + 'workshop_registrations.xlsx'
        );

        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error('Error exporting workshop registrations:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
