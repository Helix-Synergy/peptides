const express = require('express');
const router = express.Router();
const SmartMaterialsVisitor = require('../models/SmartMaterialsVisitor');

// GET /api/smartmaterials-visitors - Increment and get visitor count
router.get('/', async (req, res) => {
    try {
        let visitor = await SmartMaterialsVisitor.findOne();
        
        // Start count from 0
        if (!visitor) {
            visitor = new SmartMaterialsVisitor({ count: 0 });
        } else {
            visitor.count += 1;
        }
        
        await visitor.save();
        res.status(200).json({ count: visitor.count });
    } catch (error) {
        console.error('Error fetching/incrementing SmartMaterials visitor count:', error);
        res.status(500).json({ message: 'Error tracking visitor' });
    }
});

module.exports = router;
