const mongoose = require('mongoose');
const cities = require('./cities')
const Campground = require('../models/campground')
const { places, descriptors } = require('./seedHelpers');

//connecting to the database

main().then(() => {
  console.log('CONNECTED TO DATABASE');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/yelp-camp');
}

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: 'https://source.unsplash.com/collection/1127811',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur recusandae qui ipsa quasi laudantium molestias praesentium. Impedit similique veritatis culpa dolores error, ad, porro repellendus ratione architecto nesciunt, reiciendis quis!',
      price
    })
    await camp.save();
  }
}

seedDB().then(() => {
  mongoose.connection.close()
})