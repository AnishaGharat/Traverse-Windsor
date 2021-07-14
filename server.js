const { json } = require('express');
var express = require('express');
var app = express();

app.use(express.json());

const database = require("./model/database_scan_read");

app.get('/', function (req, res) {
   res.send('Welcome to Traverse Windsor');
})

app.get('/fetch_trending_places', (req, res) => {
   data = database.scanItems(req.body.table_name);
   // data = { "event_id":"abcdg "}
   // res.sendStatus(200);
   // res.send(data);
   return res
   .status(200)
   .json({ data });
});

app.get('/update_trending_places', function(req, res){
   console.log(req);
   events_data = database.readItems(req.item, req.table_name);
   res.send(events_data);
   res.status(401).json({ error: 'Unauthorized' })

})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
