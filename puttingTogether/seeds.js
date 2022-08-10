// getting-started.js with mongoose
const mongoose = require('mongoose');

//require the models
const Product = require('./models/product');

main().then(() => {
  console.log('CONNECTED TO DATABASE');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/farmSands');
}

// const p = new Product({
//   name: 'Ruby Grapefruit',
//   price: 3.99,
//   category: 'fruit'
// })

// p.save().then(p => {
//   console.log(p);
// }).catch(e => {
//   console.log(e);
// })

const seedProducts = [
  {
    name: 'Fairy Eggplant',
    price: 1.00,
    category: 'vegetable'
  },
  {
    name: 'Organic Goddess Melon',
    price: 4.99,
    category: 'fruit'
  },
  {
    name: 'Organic Mini Seedless Watermelon',
    price: 3.99,
    category: 'fruit'
  },
  {
    name: 'Organic Celery',
    price: 1.50,
    category: 'vegetable'
  },
  {
    name: 'Chocolate Whole Milk',
    price: 2.69,
    category: 'dairy'
  }
]

Product.insertMany(seedProducts).then(p => {
  console.log(p);
}).catch(e => {
  console.log(e);
})