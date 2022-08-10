const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOveride = require('method-override');
app.use(methodOveride('_method'));

//require the models
const Product = require('./models/product');

main().then(() => {
  console.log('CONNECTED TO DATABASE');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/farmSands');
}

//setting up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); //to get data from a form

app.get('/products', async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render('products/index.ejs', { products, category });
  } else {
    const products = await Product.find({});
    res.render('products/index.ejs', { products, category: 'All' });
  }
})

app.get('/products/new', (req, res) => {
  res.render('products/new');
})

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/show', { product })
})
app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product });
})

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
})

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
  res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.redirect('/products')
})

app.listen(3000, () => {
  console.log("App is listening on por 3000");
})