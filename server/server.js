const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

const { User } = require('./models/user')
// ==============================
//            USERS
// ==============================

app.post('/api/usres/register', (req, res) => {
  res.status(200)
})

app.post('/api/users/register', (req, res) => {
  res.status(200)
})

const port = process.env.PORT || 3002
app.listen(port, () => {
  console.log(`Server Running at ${port}`)
})
