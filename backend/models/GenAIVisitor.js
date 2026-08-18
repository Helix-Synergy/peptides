const mongoose = require('mongoose');

const GenAIVisitorSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('GenAIVisitor', GenAIVisitorSchema);
