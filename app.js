const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/Login", cors(), (req, res) => {

})

app.post("/Login", async(req, res) => {
  const {username, password} = req.body

  try {
    const check = await collection.findOne({username: username})

    if (check) {
      res.json("exist")
    }
    else {
      res.json("notexist")
    }
  } catch (e) {
    res.json("notexist")
  }
})

app.get("/SignUp", cors(), (req, res) => {

})

app.post("/SignUp", async(req, res) => {
  const {username, email, password} = req.body

  const data={
    username: username,
    email: email,
    password: password
  }

  try {
    const check = await collection.findOne({username: username})

    if (check) {
      res.json("exist")
    }
    else {
      res.json("notexist")
      await collection.insertMany([data])
    }
  } catch (e) {
    res.json("notexist")
  }
})

app.listen(3000, () => {
  console.log("port connected")
})