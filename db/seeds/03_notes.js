const TABLE_NAME = 'notes'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, notes: 'To be or not to be', user_id: 1, recipe_id: 1},
        {id: 2, notes: 'Long live the users!', user_id: 2, recipe_id: 2},
        {id: 3, notes: 'Scooby Dooby Doo!', user_id: 3, recipe_id: 3}
      ]);
    })
      .then(() => {
        // reset sequence
        return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
      })
  };
