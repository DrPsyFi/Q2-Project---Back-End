const TABLE_NAME = 'user'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, fname: 'Yoda',lname: 'X', userName: 'GreenMachine', userAuth: 'thedudeabides'},
        {id: 2, fname: 'Tron',lname: 'X', userName: 'notAUser', userAuth: 'IloveBlue'},
        {id: 3, fname: 'Neo',lname: 'X', userName: 'MrSmith', userAuth: 'WhatIsTheMatrix'}
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
