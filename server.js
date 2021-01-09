// Backend Api (Node&MongoDB)
//npm run server - запустить сервер http://localhost:5000
//скачать Postman

// после установки пакетов express, body-parser, mongoose, shortid
const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const shortid = require ('shortid');

const app = express ();
app.use (bodyParser.json ());

mongoose.connect ('mongodb://localhost/react-shopping-cart-db', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model (
  'products',
  new mongoose.Schema ({
    _id: {type: String, default: shortid.generate},
    image: String,
    title: String,
    description: String,
    price: Number,
    availableSizes: [String],
    star: Number,
  })
);

app.get ('/api/products', async (req, res) => {
  const products = await Product.find ({});
  res.send (products);
});

app.post ('/api/products', async (req, res) => {
  const newProduct = new Product (req.body);
  const savedProduct = await newProduct.save ();
  res.send (savedProduct);
});

app.delete ('/api/products/:id', async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete (req.param.id);
  res.send (deletedProduct);
});

const port = process.env.PORT || 5000;
app.listen (port, () => console.log ('serve at http://localhost:5000'));