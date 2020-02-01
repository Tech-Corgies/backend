const bcrypt = require("bcrypt");
const cryptoRandomString = require("crypto-random-string");

exports.seed = function(knex) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          email: "amy",
          password: bcrypt.hashSync("amy", 10),
          password_salt: cryptoRandomString({ length: 10 })
        },
        {
          email: "isabel@email.com",
          password: bcrypt.hashSync("isabel", 10),
          password_salt: cryptoRandomString({ length: 10 })
        },
        {
          email: "pooja@email.com",
          password: bcrypt.hashSync("pooja", 10),
          password_salt: cryptoRandomString({ length: 10 })
        },
        {
          email: "ritu@email.com",
          password: bcrypt.hashSync("ritu", 10),
          password_salt: cryptoRandomString({ length: 10 })
        },
        {
          email: "richany@email.com",
          password: bcrypt.hashSync("richany", 10),
          password_salt: cryptoRandomString({ length: 10 })
        }
      ]);
    });
};
