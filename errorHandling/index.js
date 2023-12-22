//when working with errors we try and catch
const express = require('express');
const app = express();
const AppError = require('./AppError')
const morgan = require('morgan');


app.use(morgan('tiny'));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
})

app.use('/dogs', (req, res, next) => {
  console.log("I LOVE DOGS!!")
  next();
})


const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === 'chickennugget') {
    next();
  }
  // res.send("YOU NEED A PASSWORD!")
  res.status(401);
  throw new AppError('Password Required', 401)
}


// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!!!")
//     return next();
//     console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()")
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE!!!")
//     return next();
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY THIRD MIDDLEWARE!!!")
//     return next();
// })


app.get('/', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('HOME PAGE!')
})

app.get('/error', (req, res) => {
  chicken.fly()
})

app.get('/dogs', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
  res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

app.get('/admin', (req, res) => {
  throw new AppError('You are not an admin!!!')
})

app.use((req, res) => {
  res.status(404).send('NOT FOUND!')
})

// app.use((err, req, res, next) => {
//   console.log(err)
//   // res.status(500).send("OH BOY, WE GOT AN ERROR")
//   next(err)
// })
// app.use((err, req, res, next) => {
//   const { status = 500 } = err;
//   res.status(status).send('ERRORRRR!!')
// })


app.listen(3000, () => {
  console.log('App is running on localhost:3000')
})