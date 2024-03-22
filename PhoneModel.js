const { Schema, model } = require('mongoose');

const PhoneSchema = new Schema({
    ten: { type: String, required: true },
    namSX: Number,
    hang: { type: String, required: true },
    gia: Number
});

module.exports = model('phone', PhoneSchema);
