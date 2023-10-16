const AWS = require('aws-sdk');
AWS.config.update({
  region: 'us-east-1',
});

// Interface to DynamoDB
const docClient = new AWS.DynamoDB.DocumentClient();
// This is table name in dynamoDB
const TableName = 'MovieFuel-Reviews';
// GSI for getting specific movie review
const PostID_Index = 'PostID-index';
// GSI for sorting by DateTime
// const dateTimeGSI = 'DateTime-index';
/**
 *
 * @param {String} PostID - string param
 * @param {String} Author - string param
 * @param {String} Title - string param
 * @param {String} Movie - string param
 * @param {String} Comment - string param
 * @param {String} DateTime - string param
 * @returns {Object} empty object if post succeeded
 */
function addReview(PostID, Author, Title, Movie, Comment, DateTime) {
  const params = {
    TableName,
    Item: {
      PostID,
      Author,
      Title,
      Movie,
      Comment,
      DateTime,
    },
  };
  docClient.put(params).promise();
}

/**
 *
 * @param {String} PostID - string param
 */
function getReview(PostID) {
  const params = {
    TableName,
    IndexName: PostID_Index,
    KeyConditionExpression: '#PostID = :PostID',
    ExpressionAttributeName: {
      '#PostID': 'PostID',
    },
    ExpressionAttributeValues: {
      ':PostID': PostID,
    },
  };
  return docClient.query(params).promise();
}
module.exports = { addReview, getReview };
