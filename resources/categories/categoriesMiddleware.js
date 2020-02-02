const { findCategoryBy } = require('./categoriesModel');

const categoryExists = async (req, res, next) => {
  const { id } = req.params;
  try {
    const category = await findCategoryBy({ id });
    if (category) {
      next();
    } else {
      res.status(404).json({
        message: `Category does not exists`,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `Category may not exists ${error.message}`,
    });
  }
};

module.exports = { categoryExists };
