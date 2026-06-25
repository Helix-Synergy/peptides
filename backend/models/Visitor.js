const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Visitor', VisitorSchema);
