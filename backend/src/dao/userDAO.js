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

module.exports = {
    retrieveByUsername
}