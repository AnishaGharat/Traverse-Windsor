var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

// Load the data
var place = require('../data/trending_places.json');
var tableName = "trending_places";


deleteItems(place, tableName)
    .then(() => {
        return deleteItems(place, tableName);
    })
    .catch((err) => {
        console.error('Delete failed', err);
    });

function deleteItems(item, tableName)
{
    return new Promise((resolve, reject) => {

            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Key:{
                    "place_id": item.place_id
                }
        
            };

            console.log("Deleting Item");

            dynamodb_client.delete(params, function(err, data) {
                if (err) {
                    console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Item Deleted", JSON.stringify(data, null, 2));

                }
            });
    });
}



