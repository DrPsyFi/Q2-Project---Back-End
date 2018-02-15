
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', table => {
    table.increments()
    table.string('name').notNullable()
    table.text('instructions').notNullable()
    table.string('picture').defaultTo('Coming Soon!')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
};
