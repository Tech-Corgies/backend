const express = require('express');

const {
  createCategory,
  deleteCategory,
  editCategory,
  getCategories,
  getCategory,
} = require('./categoriesControllers');

const { addCategorySchema, editCategorySchema } = require('./categoriesSchema');

const validate = require('../../utils/validate');

const { categoryExists } = require('./categoriesMiddleware');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validate(addCategorySchema), createCategory);
categoriesRouter.get('/', getCategories);
categoriesRouter.get('/:id', getCategory);
categoriesRouter.put(
  '/:id',
  validate(editCategorySchema),
  categoryExists,
  editCategory
);
categoriesRouter.delete('/:id', categoryExists, deleteCategory);

module.exports = categoriesRouter;
