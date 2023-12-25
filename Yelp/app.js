const express = require('express');
const path = require('path');
const methodOverride = require('method-override')           //create put, patch, delete 
const ejsMate = require('ejs-mate');
const { campgroundSchema } = require('./schemas')
const catchAsync = require('./utils/catchAsync')
const ExpressError = require('./utils/expressError')
const mongoose = require('mongoose');
const Campground = require('./models/campground');

//connecting to the database

main().then(() => {
  console.log('CONNECTED TO DATABASE');
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/yelp-camp');
}

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  } else {
    next();
  }
}

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/campgrounds', catchAsync(async (req, res) => {
  const Campgrounds = await Campground.find({});
  res.render('campgrounds/index', { Campgrounds: Campgrounds })
}))

app.get('/campgrounds/new', (req, res) => {
  res.render('campgrounds/new')
})

app.post('/campgrounds', validateCampground, catchAsync(async (req, res, next) => {
  //if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`)
}))

app.get('/campgrounds/:id', catchAsync(async (req, res) => {
  const campground = await Campground.findById(req.params.id)
  res.render('campgrounds/show', { campground })
}))

app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
  const campground = await Campground.findById(req.params.id)
  res.render('campgrounds/edit', { campground })
}))

app.put('/campgrounds/:id', validateCampground, catchAsync(async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
  res.redirect(`/campgrounds/${campground._id}`)
}))

app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
  const { id } = req.params;
  await campground.findByIdAndDelete(id);
  res.redirect('/campgrounds');
}))

app.all('*', (req, res, next) => {
  next(new ExpressError('PAGE NOT FOUND', 404))
})

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Something went wrong';
  res.status(statusCode).render('error', { err });
})

app.listen(3000, () => {
  console.log('Serving on port 3000');
})