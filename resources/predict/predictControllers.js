const { modelFullId, client } = require('./utils/autoMLClient');
const { SCORE_THRESHOLD } = require('../../config');
const { findCategoryBy } = require('../categories/categoriesModel');

const proccessPrediction = async (req, res) => {
  try {
    const params = {};

    const content = req.files.content.data.toString('base64');

    if (SCORE_THRESHOLD) {
      params.score_threshold = SCORE_THRESHOLD;
    }

    const payload = {};
    payload.image = { imageBytes: content };

    const [response] = await client.predict({
      name: modelFullId,
      payload,
      params,
    });

    const responses = response.payload.map(async result => {
      try {
        const category = await findCategoryBy({
          category_name: result.displayName,
        });
        return {
          className: result.displayName,
          score: result.classification.score,
          category,
        };
      } catch (error) {
        return res.status(500).json({
          message: `Unable to complete prediction transaction ${error.message}`,
        });
      }
    });
    res.status(200).json({
      message: 'Succesful model prediction transaction',
      response: responses[0],
    });
  } catch (error) {
    res.status(500).json({
      message: `Unable to complete prediction transaction ${error}`,
    });
  }
};

module.exports = { proccessPrediction };
