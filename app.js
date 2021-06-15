var express = require('express')
var app = express()


app.get('/fetch_trending_places', function (req, res) {
  res.send('hello world')
})