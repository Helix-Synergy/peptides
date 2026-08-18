const express = require('express');
const router = express.Router();
const GenAIVisitor = require('../models/GenAIVisitor');

router.get('/', async (req, res) => {
    try {
        let visitor = await GenAIVisitor.findOne();
        
        if (!visitor) {
            visitor = new GenAIVisitor({ count: 1 });
            await visitor.save();
        } else if (req.query.increment === 'true') {
            visitor.count += 1;
            await visitor.save();
        }
        
        res.status(200).json({ count: visitor.count });
    } catch (error) {
        console.error('Error fetching/incrementing GenAI visitor count:', error);
        res.status(500).json({ message: 'Error tracking visitor' });
    }
});

module.exports = router;
