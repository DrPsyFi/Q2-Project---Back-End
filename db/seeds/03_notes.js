const TABLE_NAME = 'notes'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, notes: 'To be or not to be', users_id: 1, recipes_id: 1},
        {id: 2, notes: 'Long live the users!', users_id: 2, recipes_id: 2},
        {id: 3, notes: 'Scooby Dooby Doo!', users_id: 3, recipes_id: 3}
      ]);
    })
      .then(() => {
        // reset sequence
        return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
      })
  };
