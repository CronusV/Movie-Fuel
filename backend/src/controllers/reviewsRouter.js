const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const logger = require('../utils/logger');
const reviewService = require('../service/reviewService');
const reviewDAO = require('../dao/reviewDAO');

// This adds post to reviews resource
// TODO MiddleWare to validate user
router.post('/', async (req, res) => {
  const body = req.body;
  // Test review
  const validateReview = reviewService.validateReview(req);
  if (!validateReview.valid) {
    logger.error(`Can't post because ${validateReview.invalidMessage}`);
    res.status(400).send(`Can't post because ${validateReview.invalidMessage}`);
    return;
  }
  const postID = uuid.v4();
  const Date = new Date();
});
