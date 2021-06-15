var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

// Load the data
var place = require('../data/trending_places.json');
var tableName = "trending_places"

readItems(place.place_id, tableName)
    .then(() => {
        return readItems(place.place_id, tableName);
    })
    .catch((err) => {
        console.error('Read failed', err);
    });

function readItems(item, tableName)
{
    return new Promise((resolve, reject) => {

            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Key:{
                    "place_id": item
                }
            };

            console.log("Reading Item");

            dynamodb_client.get(params, function(err, data) {
                if (err) {
                    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Item fetched", JSON.stringify(data, null, 2));

                }
            });
    });
}
