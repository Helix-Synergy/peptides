const mongoose = require('mongoose');

const SmartMaterialsVisitorSchema = new mongoose.Schema({
    count: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('SmartMaterialsVisitor', SmartMaterialsVisitorSchema);
