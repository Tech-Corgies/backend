const db = require('../../data/dbConfig');

const findUserBy = param => {
  return db('users')
    .select('id', 'email', 'time_create')
    .where(param)
    .first();
};

const filter = param => {
  return db('users')
    .select('id', 'email', 'time_create', 'password')
    .where(param)
    .first();
};

const insertUser = user => {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findUserBy({ id });
    });
};

const modifyUser = (data, id) => {
  return db('users')
    .where({ id })
    .update(data);
};

const removeUser = id => {
  return db('users')
    .where({ id })
    .del();
};
module.exports = { insertUser, findUserBy, modifyUser, removeUser, filter };
