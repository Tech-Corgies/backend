const automl = require('@google-cloud/automl');
const {
  PROJECT_ID,
  COMPUTER_REGION,
  MODEL_ID,
} = require('../../../config/index');

// const json = require('../../../package.json')

credentials = automl.Credentials.from_service_account_file(
  '../../../config/ttb2020-bf091511521c.json'
);

const client = new automl.PredictionServiceClient((credentials = credentials));

const modelFullId = client.modelPath(PROJECT_ID, COMPUTER_REGION, MODEL_ID);

module.exports = { client, modelFullId };
