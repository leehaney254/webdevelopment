const express = require('express')
const cors = require('cors')    //when using front end framework
const User = require('./config')
const app = express()
app.use(express.json())
app.use(cors())


//getting data from firebase
app.get("/", async (req, res) => {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => doc.data())
  res.send(list);
})
//sending data to firebase
app.post("/create", async (req, res) => {
  const data = req.body
  await User.add(data)
  res.send({ msg: "user Added" })
})

//listening on port
app.listen(4000, () => {
  console.log("Running on port 4000")
})