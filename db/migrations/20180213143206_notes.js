
exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', table => {
    table.increments()
    table.text('notes').notNullable()
    table.integer('rating').defaultTo(0)
    table.integer('users_id').references('users.id')
    table.integer('recipes_id').references('recipes.id')
    table.timestamps(true, true)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('notes')
};
