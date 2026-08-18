const mongoose = require('mongoose');

const BuzzVisitorSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('BuzzVisitor', BuzzVisitorSchema);
