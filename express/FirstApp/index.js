const express = require("express");

//execute express
const app = express();

//callback for when we have a request
// app.use((req, res) => {
//   console.log("We got a new request");
//   //res.send("Hello we got your request, this is the response!!");
//   res.send({ color: 'red' })
// })

//express routing
app.get('/', (req, res) => {
  res.send("This is the home page");
})
app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit`);
})
app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit } = req.params;
  const { postId } = req.params;
  res.send(`<h1>Browsing the ${subreddit} subreddit with id ${postId}`);
})
app.get('/cats', (req, res) => {
  res.send("CAT REQUEST!!!");
})
app.post('/cats', (req, res) => {
  res.send("This is different form get!!");
})
app.get('/dogs', (req, res) => {
  res.send("WOOF!!");
})
//query string
app.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send('Nothing found if nothing searched')
  }
  res.send(`<h1>search results for: ${q}<h1>`)
})
//routing for everything not included
app.get('*', (req, res) => {
  res.send(`I do not know that path!!`);
})


//we have our server when the app is listening
app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!")
})