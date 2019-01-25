const mongoose = require('mongoose');
let Product = require('./models/products');

var url = 'mongodb://ivan:terserahh@localhost:27017/db_mongoose';

mongoose.connect(url, { useNewUrlParser: true }, () => {
    console.log("MongoDB connected!");
});

// masukin data ke collection products di database
// new Product({
//     name: 'Casio',
//     price: 20000,
//     available: true,
//     exp: Date.now()
// }).save().then((x) => {
//     console.log(x)
// })


// ambil semua data
Product.find((err, data) => {
    console.log(data);
});

// ambil data spesifik
Product.find({ name: 'Seiko' }, (err, data) => {
    console.log(data);
});

// ambil data spesifik by id
var id = '5c4a83febb17e309c416144e';
Product.findById(id, (err, data) => {
    console.log(data);
});

// ambil data spesifik by id dan yg diambil cuma property nama dan harga
var id = '5c4a83febb17e309c416144e';
Product.findById(id, 'name price', (err, data) => {
    console.log(data);
});

// ambil data dengan where condition
Product.find({
    price: { $gt: 5000, $lte: 20000 }
}, (err, data) => {
    console.log("Find price greater than 5000 and lower than 20000")
    console.log(data);
});

// delete satu data, kalo sama hanya yg pertama
Product.deleteOne({ name: 'Seiko' }, (err) => {
    console.log("Data deleted!");
});

// delete semua/multiple data
Product.deleteMany({ name: 'Seiko' }, (err) => {
    console.log("Multiple Data deleted!");
});

// Update, parameter 1 data yg mau di update, parameter 2 apa yg mau diganti, parameter 3 callback
Product.updateOne({ name: 'Rolex' }, { price: 678999 }, (x) => {
    console.log(x);
    console.log("Data Terupdate!");
})