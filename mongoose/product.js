// getting-started.js
const mongoose = require('mongoose');

main().then(() => {
  console.log('CONNECTED!!!');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shopApp');
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  price: {
    type: Number,
    min: [0, 'Must be positive']
  },
  onsale: {
    type: Boolean,
    default: false
  },
  categories: {
    type: [String],
    default: ['cycling']
  },
  qty: {
    online: {
      type: Number,
      default: 0
    },
    instore: {
      type: Number,
      default: 0
    }
  },
  size: {
    type: String,
    enam: ['S', 'M', 'L']
  }
})

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({ name: 'Mountain bike', price: 599 })
//const bike = new Product({ name: 'Jersey', price: 9, categories: ['Cycling'], categories: 'S' })

//instance
productSchema.methods.greet = function () {
  console.log("Hello World.")
  console.log(`- from ${this.name}`)
}


//function to be used as an instance
const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: 'Bike helmet' })
  foundProduct.greet();
}

findProduct();


// bike.save()
//   .then(data => {
//     console.log("IT WORKED");
//     console.log(data);
//   }).catch(err => console.log(err))

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 10.99 }, { new: true, runValidators: true })
//   .then(data => {
//     console.log("IT WORKED");
//     console.log(data);
//   }).catch(err => console.log(err))