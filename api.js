const express = require('express');
const mongoose = require('mongoose');
const PhoneModel = require('./PhoneModel');
const COMMON = require('./COMMON');

const router = express.Router();

router.get('/', (req, res) => res.send('vao '));

router.get('/list', async (req, res) => {
    await mongoose.connect(COMMON.uri);
    res.send(await PhoneModel.find());
});

module.exports = router;
