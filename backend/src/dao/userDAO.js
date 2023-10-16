const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-2'
});

const docClient = new AWS.DynamoDB.DocumentClient();

function retrieveByUsername(username) {

    const params = {
        TableName: 'MovieFuel-Users',
        Key: {
            'UserName': username
        }
    };

    return docClient.get(params).promise();
}
function addToFavorites(username, id) {

    const params = {
        TableName: 'MovieFuel-Users',
        Key: {
            'UserName': username
        }
    };

    return docClient.get(params).promise()
        .then((data) => {

            data.Item.Favorites.push(id);
            const updateParams = {
                TableName: 'MovieFuel-Users',
                Key: {
                    'UserName': username,
                },
                UpdateExpression: 'SET Favorites = :newFavorites',
                ExpressionAttributeValues: {
                    ':newFavorites': data.Item.Favorites,
                },
            };

            docClient.update(updateParams).promise();
        })
        .catch(err => {
            console.error(err);
        });
}

module.exports = {
    retrieveByUsername,
    addToFavorites
}