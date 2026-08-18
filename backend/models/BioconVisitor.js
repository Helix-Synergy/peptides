const mongoose = require('mongoose');

const BioconVisitorSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('BioconVisitor', BioconVisitorSchema);
