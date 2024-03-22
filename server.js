const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const PhoneModel = require('./PhoneModel');
const COMMON = require('./COMMON');

const app = express();
app.use(cookieParser());
app.use(express.json());

const uri = COMMON.uri;

app.route('/phones')
    .get(async (req, res) => {
        await mongoose.connect(uri);
        res.json(await PhoneModel.find());
    })
    .post(async (req, res) => {
        await mongoose.connect(uri);
        res.json(await new PhoneModel(req.body).save());
    });

app.route('/phones/:id')
    .get(async (req, res) => {
        await mongoose.connect(uri);
        res.json(await PhoneModel.findById(req.params.id));
    })
    .put(async (req, res) => {
        await mongoose.connect(uri);
        let phone = await PhoneModel.findById(req.params.id);
        phone.set(req.body);
        res.json(await phone.save());
    })
    .delete(async (req, res) => {
        await mongoose.connect(uri);
        res.json(await PhoneModel.deleteOne({_id: req.params.id}));
    });

app.listen(3000, () => console.log(`Example app listening on port 3000`));
