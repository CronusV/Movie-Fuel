// Logger
const logger = require('./utils/logger');
// Express
const express = require('express');
const myRouter = require("./utils/movieRouter")
const PORT = 3000;

const server = express();

server.use('/MovieFuel', myRouter);

server.listen(PORT, () => {
  logger.info(`Server is listening on Port: ${PORT}`);
});
