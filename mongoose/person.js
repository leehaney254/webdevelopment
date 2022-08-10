// getting-started.js
const mongoose = require('mongoose');

main().then(() => {
  console.log('CONNECTED!!!');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shopApp');
}

const personSchema = new mongoose.Schema({
  first: String,
  last: String
})

personSchema.virtual('fullName').get(function () {
  return `${this.first} ${this.last}`
})

//middleware
personSchema.pre('save', async function () {
  console.log('About to save.');
})

personSchema.post('save', async function () {
  console.log('Just saved.');
})

const person = mongoose.model('person', personSchema);