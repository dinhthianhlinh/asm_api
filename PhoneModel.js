const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    namSX: {
        type: Number
    },
    hang: {
        type: String,
        required: true
    },
    gia: {
        type: Number
    }
});

const PhoneModel = new mongoose.model('phone', PhoneSchema);

module.exports = PhoneModel;