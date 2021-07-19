const { json } = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))

const database = require("./model/database_scan_read");

app.get('/', function (req, res) {
   res.send('Welcome to Traverse Windsor');
})

app.get('/fetch_trending_places', (req, res) => {
   const data = 
   {
    "data": {
    "scanned_response": {
    "Items": [
    {
    "check_in": 60,
    "place_name": "Riverfront",
    "likes": 15,
    "place_id": "56sfyagsa78w"
    },
    {
    "check_in": 15,
    "place_name": "Peace Fountain",
    "likes": 30,
    "place_id": "56sfyausdsa78w"
    },
    {
    "check_in": 49,
    "place_name": "Caesor's",
    "likes": 45,
    "place_id": "56sfyagsa7s7"
    }
    ],
    "Count": 3,
    "ScannedCount": 3
    }
    }
   }
   return res
      .status(200)
      .send( data );
 
});

app.get('/update_trending_places', function(req, res){
   console.log(req);
   events_data = database.readItems(req.item, req.table_name);
   res.send(events_data);
   res.status(401).json({ error: 'Unauthorized' })

})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
