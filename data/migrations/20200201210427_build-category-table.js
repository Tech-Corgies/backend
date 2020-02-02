exports.up = function(knex) {
  return knex.schema.createTable('categories', table => {
    table.increments();
    table
      .string('category_name')
      .notNullable()
      .unique();
    table.string('impact_description').notNullable();
    table.string('fact');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('categories');
};
