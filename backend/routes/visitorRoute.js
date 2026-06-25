const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');

// GET /api/visitors - Increment and get visitor count
router.get('/', async (req, res) => {
    try {
        // Find the single visitor document
        let visitor = await Visitor.findOne();
        
        // If it doesn't exist, create it with a starting count (e.g. starting at 1000 for realistic baseline)
        if (!visitor) {
            visitor = new Visitor({ count: 1245 });
        } else {
            // Increment the count
            visitor.count += 1;
        }
        
        await visitor.save();
        res.status(200).json({ count: visitor.count });
    } catch (error) {
        console.error('Error fetching/incrementing visitor count:', error);
        res.status(500).json({ message: 'Error tracking visitor' });
    }
});

module.exports = router;
