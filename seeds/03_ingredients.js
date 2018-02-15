
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, item: 'finely chopped onion'},
        {id: 2, item: 'minced garlic'},
        {id: 3, item: 'carrots'},
        {id: 4, item: 'vegtable oil'},
        {id: 5, item: 'heavy cream'},
        {id: 6, item: 'paprika'},
        {id: 7, item: 'nutmeg'},
        {id: 8, item: 'red chili powder'},
        {id: 9, item: 'salt'},
        {id: 10, item: 'pepper'},
        {id: 11, item: 'beef'},
        {id: 12, item: 'chicken breast'},
        {id: 13, item: 'tomato'},
        {id: 14, item: 'zuccini'},
        {id: 15, item: 'vegtable stock'},
        {id: 16, item: 'chicken stock'},
        {id: 17, item: 'black beans'},
        {id: 18, item: 'kidney beans'},
        {id: 19, item: 'celery'},
        {id: 20, item: 'potato'}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('ingredients_id_seq', (SELECT MAX(id)FROM ingredients));`
      );
    })
  };
