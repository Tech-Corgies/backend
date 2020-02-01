exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table
      .uuid("id")
      .notNullable()
      .primary();
    table
      .string("email")
      .notNullable()
      .unique();
    table.string("password").notNullable();
    table.string("password_salt").notNullable();
    table.timestamp("time_create").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
