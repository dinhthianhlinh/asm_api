const express = require('express');
const COMMON = require('./COMMON');
const router = express.Router();
module.exports = router;

router.get('/',(req, res)=>{
   res.send('vao ')
});

const mongoose = require('mongoose');
const  PhoneModel = require('./PhoneModel');



router.get('/list', async(req,res) =>{
    await mongoose.connect(COMMON.uri);

    let phones =  await PhoneModel.find();
     console.log(phones);
     res.send(phones);
 
 

})  

