const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method.toUpperCase(), req.path);
  return next();
})

app.use('/dogs', (req, res, next) => {
  console.log("I love dog");
  return next();
})

app.get('/', (req, res) => {
  res.send("Home page")
})

app.get('/dogs', (req, res) => {
  res.send("WOOF WOOF")
})

app.use((req, res) => {
  res.status(404).send("Page not found")
})

app.listen(3000, () => {
  console.log('connected to port 3000!')
})