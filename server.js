// server.js
 //Backend: Express API Server
 const express = require('express');
 const mongoose = require('mongoose');
 const Product = require('./models/Product');
 const app = express();
 const PORT = process.env.PORT || 3001;
 mongoose.connect('mongodb://localhost:27017/greencart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 });
 app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
 });
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
