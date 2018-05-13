const TABLE_NAME = 'users'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, fname: 'Yoda',lname: 'X', username: 'GreenMachine', password: '$2a$10$2vTsj8B4xfeZyIazutSGDO1rT.HQ7CfFEo6PtXs3rL0DhA4F6FrcG'},
        {id: 2, fname: 'Tron',lname: 'X', username: 'notAUser', password: '$2a$10$2vTsj8B4xfeZyIazutSGDO1rT.HQ7CfFEo6PtXs3rL0DhA4F6FrcG'},
        {id: 3, fname: 'Neo',lname: 'X', username: 'MrSmith', password: '$2a$10$2vTsj8B4xfeZyIazutSGDO1rT.HQ7CfFEo6PtXs3rL0DhA4F6FrcG'}
      ])
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};
