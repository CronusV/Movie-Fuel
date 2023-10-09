const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
});

// Interface to DynamoDB
const docClient = new AWS.DynamoDB.DocumentClient();
// This is table name in dynamoDB
const TableName = 'MovieFuel-Reviews';

function addReview(PostID, Author, Title, Movie, Comment, DateTime) {}