const { json, request } = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))

const database_fetch = require("./model/database_scan_read");
const database_update = require("./model/database_update");

app.get('/', function (req, res) {
   res.send('Welcome to Traverse Windsor');
})

// Fetch trending places to view on the "Trending Places Page"
app.get('/fetch_trending_places', (req, res) => {
   database_fetch.scanItems(req.body.table_name).then( data => {

      console.log(data);
      return res
      .status(200)
      .send( data );
 
});

// Update check-ins in the "Trending Places Page"
app.get('/update_check_ins_trending_places', (req, res) => {
   database_update.update_check_in(req.body.key, req.body.table_name, 1).then( data => {
      
      console.log(data);
      return res
      .status(200)
      .json({ data });
   });
});

// Update likes in the "Trending Places Page"
app.get('/update_likes_trending_places', (req, res) => {
   database_update.update_like(req.body.key, req.body.table_name, 1).then( data => {
      
      console.log(data);
      return res
      .status(200)
      .json({ data });
   });
});


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
