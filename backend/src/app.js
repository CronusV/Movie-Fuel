// Logger
const logger = require('./utils/logger');
// Express
const express = require('express');
const myRouter = require("./utils/movieRouter")
const PORT = 3000;
const server = express();
// Routers
const reviewRouter = require('./controllers/reviewsRouter');

// middleware to parse JSON from req
const bodyParser = require('body-parser');
server.use(bodyParser.json());

// Using router
server.use('/reviews', reviewRouter);
server.use('/MovieFuel', myRouter);

server.listen(PORT, () => {
  logger.info(`Server is listening on Port: ${PORT}`);
});
