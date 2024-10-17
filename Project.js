 Backend: Mongoose Product Model
// models/Product.js
 const mongoose = require('mongoose');
 const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  ecoFriendly: Boolean,
 });
 module.exports = mongoose.model('Product', productSchema);
