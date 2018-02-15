
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', table => {
    table.increments()
    table.string('item').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients')

};
