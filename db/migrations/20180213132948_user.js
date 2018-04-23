
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments()
    table.string('fname').notNullable()
    table.string('lname').notNullable()
    table.string('userName').notNullable()
    table.string('userAuth').notNullable()
    table.string('avitar').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')

};
