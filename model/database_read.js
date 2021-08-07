var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

//Load the data
var event = require('../data/events.json');
var tableName = "trending_places"

readItems(event.event_id, tableName)
    .then(() => {
        return readItems(event.event_id, tableName);
    })
    .catch((err) => {
        console.error('Read failed', err);
    });

function readItems(key, tableName)
{
    return new Promise((resolve, reject) => {

            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Key:{
                    "place_id": key
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

module.exports = { readItems };