const {
  findCategoryBy,
  insertCategory,
  modifyCategory,
  removeCategory,
  getAllCategories,
} = require('./categoriesModel');

const createCategory = async (req, res) => {
  const { body } = req;

  try {
    const category = await insertCategory(body);
    res
      .status(201)
      .json({ message: 'Successfully created category', category });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failure to create category, error: ${error.message}` });
  }
};

const getCategories = async (req, res) => {
  try {
    const category = await getAllCategories();
    res
      .status(200)
      .json({ message: 'Successfully fetched all categories', category });
  } catch (error) {
    res.status(500).json({
      message: `Failure to fetch all categories, error: ${error.message}`,
    });
  }
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await findCategoryBy({ id });
    res.status(200).json({ message: 'Successfully fetch category', category });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failure to fetch category, error: ${error.message}` });
  }
};

const editCategory = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await modifyCategory(body, id);
    res.status(200).json({ message: 'Successfully edit category' });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failure to edit category, error: ${error.message}` });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await removeCategory(id);
    res.status(200).json({ message: 'Successfully delete category' });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failure to delete category, error: ${error.message}` });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  editCategory,
  deleteCategory,
};
