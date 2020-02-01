const automl = require('@google-cloud/automl');
const {
  PROJECT_ID,
  COMPUTER_REGION,
  MODEL_ID,
} = require('../../../config/index');

const client = new automl.PredictionServiceClient();

const modelFullId = client.modelPath(PROJECT_ID, COMPUTER_REGION, MODEL_ID);

module.exports = { client, modelFullId };
