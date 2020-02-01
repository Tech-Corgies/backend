const bcrypt = require("bcrypt");
const cryptoRandomString = require("crypto-random-string");
const uuid = require("uuid/v4");

exports.seed = function(knex) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          id: uuid.v4(),
          email: "amy",
          password: bcrypt.hashSync("amy", 10),
          password_salt: cryptoRandomString({ length: 10 })
        },
        {
          id: uuid.v4(),
          email: "isabel@email.com",
          password: bcrypt.hashSync("isabel", 10),
          password_salt: cryptoRandomString({ length: 10 })
        },
        {
          id: uuid.v4(),
          email: "pooja@email.com",
          password: bcrypt.hashSync("pooja", 10),
          password_salt: cryptoRandomString({ length: 10 })
        },
        {
          id: uuid.v4(),
          email: "ritu@email.com",
          password: bcrypt.hashSync("ritu", 10),
          password_salt: cryptoRandomString({ length: 10 })
        },
        {
          id: uuid.v4(),
          email: "richany@email.com",
          password: bcrypt.hashSync("richany", 10),
          password_salt: cryptoRandomString({ length: 10 })
        }
      ]);
    });
};
