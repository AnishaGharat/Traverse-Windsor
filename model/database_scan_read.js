var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

tableName = "trending_places";

// scanItems(tableName)
//     .then(() => {
//         return scanItems(tableName);
//     })
//     .catch((err) => {
//         console.error('Read failed', err);
//     });

function scanItems(tableName)
{
    return new Promise((resolve, reject) => {

            var dynamodb_client = new AWS.DynamoDB.DocumentClient();

            var params = {
                TableName:tableName
            };

            console.log("Reading Item");

            dynamodb_client.scan(params, function(err, data) {
                if (err) {
                    console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
                    reject(err);
                } else {
                    console.log("Item fetched", JSON.stringify(data, null, 2));
                    return {
                        "scanned_response":data
                    }

                }
            });
    });
}

module.exports = { scanItems };