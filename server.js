const express = require('express');
const app = express();

const port =  3000 ;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
const COMMON = require('./COMMON')

const uri = COMMON.uri ;
const mongoose = require('mongoose');
const  PhoneModel = require('./PhoneModel')

const apiMobile = require('./api');
app.use('/api',apiMobile);
app.get('/',async(rep,res)=>{
   await mongoose.connect(uri);

   let phones =  await PhoneModel.find();
    console.log(phones);
    res.send(phones);


});
app.post('/add_xe', async (req, res) => {
    await mongoose.connect(uri);

    // let car = {
    //     ten: 'xe 3',
    //     namSX: 2024,
    //     hang: 'Mitsubishi',
    //     gia: 7500
    // }

    let phone = req.body;

    console.log(phone)

    let kq = await PhoneModel.create(phone);
    console.log(kq);

    let phones = await PhoneModel.find();

    res.send(phones);

})

app.get('/xoa/:id', async (req, res) => {
    await mongoose.connect(uri);

    let id = req.params.id;
    console.log(id);

    // xu ly loi khi id khong dung
    await PhoneModel.deleteOne({_id: id});

    res.redirect('../')
}) 
app.get('/update/:ten', async (req, res) => {
    await mongoose.connect(uri);

    console.log('Ket noi DB thanh cong');

    let tenP = req.params.ten;
    console.log(tenP);

    let tenPMoi = tenP + ' Phien ban moi 2024';

    await carModel.updateOne({ten: tenP}, {ten: tenPMoi});

    let phones = await PhoneModel.find({});

    res.send(phones);
})