
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', table => {
    table.increments()
    table.string('recName').notNullable()
    table.text('ingredients').notNullable()
    table.text('instructions').notNullable()
    table.string('picture').defaultTo('Coming Soon!')
    table.integer("user_id").references('user.id')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe')
};
