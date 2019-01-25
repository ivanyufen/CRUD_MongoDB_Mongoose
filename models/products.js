const mongoose = require('mongoose');

let Schema = mongoose.Schema;
// schema itu struktur dr data yg akan kita simpan di collection dlm database

let productsSchema = new Schema({
    name: String,
    price: Number,
    available: Boolean,
    exp: { type: Date, default: Date.now() },


})

let Product = mongoose.model('products', productsSchema);

module.exports = Product;