const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override')   //for overridding an action ie post to put
app.use(express.urlencoded({ extended: true }))     //gets the data in a form
app.use(express.json())                             //parse json data
app.set('views', path.join(__dirname, 'views'))
app.use(methodOverride('_method'))

const { v4: uuid } = require('uuid');

app.set('view engine', 'ejs')                         //used to set restful apis

let comments = [
  {
    id: uuid(),
    useername: 'Tod',
    comment: 'Lololo thats funny'
  },
  {
    id: uuid(),
    useername: 'Skyler',
    comment: 'I like to go bird watching with my dog'
  },
  {
    id: uuid(),
    useername: 'Boi',
    comment: 'Please delete my account'
  },
  {
    id: uuid(),
    useername: 'only says woof',
    comment: 'Woof wooof woof'
  }
]

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

app.post('/comments', (req, res) => {
  const { useername, comment } = req.body;
  comments.push({ useername, comment, id: uuid() });
  res.redirect('/comments');
})

app.get('/comments/new', (req, res) => {
  res.render('comments/new')
})

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find(c => c.id === id);
  foundComment.comments = newCommentText;
  res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id);
  res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
  res.send("GET/ tacos response");
})

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body;
  res.send(`Okay here are your ${qty} ${meat} tacos`);
})

app.listen(3000, () => {
  console.log("ON PORT 3000!")
})