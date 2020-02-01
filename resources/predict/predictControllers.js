const { modelFullId, client } = require('./utils/autoMLClient');
const { SCORE_THRESHOLD } = require('../../config');

const proccessPrediction = async (req, res) => {
  const params = {};

  const content = req.files.foo.data.toString('base64');

  if (SCORE_THRESHOLD) {
    params.score_threshold = SCORE_THRESHOLD;
  }

  // Set the payload by giving the content and type of the file.
  const payload = {};
  payload.image = { imageBytes: content };

  // params is additional domain-specific parameters.
  // currently there is no additional parameters supported.
  const [response] = await client.predict({
    name: modelFullId,
    payload,
    params,
  });
  console.log(`Prediction results:`);
  const responses = response.payload.map(result => {
    return {
      className: result.displayName,
      score: result.classification.score,
    };
  });
  res.status(200).json({ message: 'Succesful', responses });
};

module.exports = { proccessPrediction };
