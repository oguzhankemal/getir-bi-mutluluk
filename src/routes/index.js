var express = require('express')
var app = express()
const router = express.Router()

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })

app.use('/',router)