const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
});

const docClient = new AWS.DynamoDB.DocumentClient();

const TableName = 'MovieFuel-Users';

function addUser(user) {
  const params = {
    TableName,
    Item: user,
    ConditionExpression: 'attribute_not_exists(username)',
  };

  return docClient.put(params).promise();
}

function getUser(username) {
  const params = {
    TableName,
    Key: { username },
  };

  return docClient.get(params).promise();
}

module.exports = {
  addUser,
  getUser,
};
