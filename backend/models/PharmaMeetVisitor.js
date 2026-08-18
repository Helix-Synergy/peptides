const mongoose = require('mongoose');

const PharmaMeetVisitorSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('PharmaMeetVisitor', PharmaMeetVisitorSchema);
