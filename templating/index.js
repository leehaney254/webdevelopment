const express = require('express');
const path = require('path');
//execute express
const app = express();
const redditData = require('./data.json');

//loading static files
app.set('views', path.join(__dirname, 'public'))

//framework to use in templeting
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
  res.render("home");
})

app.get('/cats', (req, res) => {
  const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
  res.render('cats', { cats })
})

app.get('/random', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num: num });
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });   //allows access of individual properties
  }
  else {
    res.render('notfound', { subreddit })
  }

})

app.get('*', (req, res) => {
  res.send("404 ERROR!!")
})

app.listen(3000, () => {
  console.log("Listening at 3000");
})