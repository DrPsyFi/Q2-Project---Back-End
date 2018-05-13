
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('fname').notNullable()
    table.string('lname').notNullable()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('avatar').defaultTo('Coming Soon!')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')

};
