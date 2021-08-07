var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

// Load the data
// var place = require('../data/trending_places.json');
// var tableName = "trending_places";
// var increment = 7;

// updateItems(place, tableName, increment)
//     .then(() => {
//         return updateItems(place, tableName, increment);
//     })
//     .catch((err) => {
//         console.error('Update failed', err);
//     });

function update_check_in(key, tableName, increment)
{
    return new Promise((resolve, reject) => {

            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Key:{
                    "place_id": key
                },
                UpdateExpression: "set check_in = check_in + :val",
                ExpressionAttributeValues:{
                         ":val": increment
                 },
                ReturnValues:"UPDATED_NEW"
            };

            console.log("Updating Item");

            data = dynamodb_client.update(params, function(err, data) {
                if (err) {
                    console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Item Updated", JSON.stringify(data, null, 2));

                }
                resolve ({
                    "updated_item": data
                })
            
            });
    });
}

function update_like(key, tableName, increment)
{
    return new Promise((resolve, reject) => {

            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName,
                Key:{
                    "place_id": key
                },
                UpdateExpression: "set likes = likes + :val",
                ExpressionAttributeValues:{
                         ":val": increment
                 },
                ReturnValues:"UPDATED_NEW"
            };

            console.log("Updating Item");

            data = dynamodb_client.update(params, function(err, data) {
                if (err) {
                    console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Item Updated", JSON.stringify(data, null, 2));

                }
                resolve ({
                    "updated_item": data
                })
            
            });
    });
}


module.exports = { update_like};




