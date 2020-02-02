const joi = require('@hapi/joi');

const addCategorySchema = joi.object({
  category_name: joi
    .string()
    .label('Category Name')
    .required(),
  impact_description: joi
    .string()
    .label('Impact Description')
    .required(),
  fact: joi.string().label('Facts'),
});

const editCategorySchema = joi.object({
  category_name: joi.string().label('Category Name'),

  impact_description: joi.string().label('Impact Description'),

  fact: joi.string().label('Facts'),
});

module.exports = { addCategorySchema, editCategorySchema };
