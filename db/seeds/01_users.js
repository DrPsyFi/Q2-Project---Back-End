
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Yoda', userName: 'GreenMachine', password: 'thedudeabides'},
        {id: 2, name: 'Tron', userName: 'notAUser', password: 'IloveBlue'},
        {id: 3, name: 'Neo', userName: 'MrSmith', password: 'WhatIsTheMatrix'}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id)FROM users));`
      );
    })
};
