
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, notes: 'To be or not to be', users_id: 1, recipe_id: 1},
        {id: 2, notes: 'Long live the users!', users_id: 2, recipe_id: 2},
        {id: 3, notes: 'Scooby Dooby Doo!', users_id: 3, recipe_id: 3}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('notes_id_seq', (SELECT MAX(id)FROM notes));`
      );
    })
  };
