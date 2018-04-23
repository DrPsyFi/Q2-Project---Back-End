
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments()
    table.text('notes').notNullable
    table.integer(rating).notNullable
    table.foreign('users_id').references('users.id')
    table.foreign('recipe_id').references('recipes.id')
    table.timestamps(true, true)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};
