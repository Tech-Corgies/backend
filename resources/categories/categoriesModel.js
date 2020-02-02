const db = require('../../data/dbConfig');

const findCategoryBy = param => {
  return db('categories')
    .select('id', 'category_name', 'impact_description', 'fact')
    .where(param)
    .first();
};

const getAllCategories = () => {
  return db('categories').select(
    'id',
    'category_name',
    'impact_description',
    'fact'
  );
};

const insertCategory = category => {
  return db('categories')
    .insert(category, 'id')
    .then(ids => {
      const [id] = ids;
      return findCategoryBy({ id });
    });
};

const modifyCategory = (data, id) => {
  return db('categories')
    .where({ id })
    .update(data);
};

const removeCategory = id => {
  return db('categories')
    .where({ id })
    .del();
};
module.exports = {
  insertCategory,
  findCategoryBy,
  modifyCategory,
  removeCategory,
  getAllCategories,
};
