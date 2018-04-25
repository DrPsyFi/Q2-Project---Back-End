
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments()
    table.text('notes').notNullable()
    table.integer('rating').defaultTo(0)
    table.integer('user_id').references('user.id')
    table.integer('recipe_id').references('recipe.id')
    table.timestamps(true, true)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes')
};
