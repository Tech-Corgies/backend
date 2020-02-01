const express = require('express');

const { proccessPrediction } = require('./predictControllers');

const predictRouter = express.Router();

predictRouter.post('/', proccessPrediction);

module.exports = predictRouter;
