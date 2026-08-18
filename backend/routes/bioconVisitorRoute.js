const express = require('express');
const router = express.Router();
const BioconVisitor = require('../models/BioconVisitor');

// GET /api/biocon-visitors - Increment and get visitor count
router.get('/', async (req, res) => {
    try {
        let visitor = await BioconVisitor.findOne();
        
        // Start count from 0
        if (!visitor) {
            visitor = new BioconVisitor({ count: 1 });
            await visitor.save();
        } else if (req.query.increment === 'true') {
            visitor.count += 1;
            await visitor.save();
        }
        
        res.status(200).json({ count: visitor.count });
    } catch (error) {
        console.error('Error fetching/incrementing Biocon visitor count:', error);
        res.status(500).json({ message: 'Error tracking visitor' });
    }
});

module.exports = router;
