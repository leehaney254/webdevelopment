const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => {
  console.log('CONNECTED!!!');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/relationshipDB');
}


const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ['Spring', 'Summer', 'Fall', 'Winter']
  }
})

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('farm', farmSchema)

// Product.insertMany([
//   { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//   { name: 'Sugar Baby Melon', price: 4.99, season: 'Summer' },
//   { name: 'Asparagus', price: 3.99, season: 'Spring' }
// ])
const makeFarm = async () => {
  const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
  const melon = await Product.findOne({ name: 'Goddess Melon' })
  farm.products.push(melon)
  await farm.save();
  console.log(farm)
}

const addProduct = async () => {
  const farm = await Farm.findOne({ name: 'Full Belly Farms' });
  const watermelon = await Product.findOne({ name: 'Sugar Baby Melon' })
  farm.products.push(watermelon);
  await farm.save();
  console.log(farm);
}

//makeFarm();
//addProduct();
Farm.findOne({ name: 'Full Belly Farms' })
  .populate('products')
  .then(farm => console.log(farm))
