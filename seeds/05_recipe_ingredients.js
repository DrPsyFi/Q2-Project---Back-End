
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {id: 1, qty: 1 , units: 'whole', ingredients_id: 1, recipe_id: 1},
        {id: 2, qty: 1 , units: 'whole', ingredients_id: 1, recipe_id: 2},
        {id: 3, qty: 1 , units: 'whole', ingredients_id: 1, recipe_id: 3},
        {id: 4, qty: 1 , units: 'cloves', ingredients_id: 2, recipe_id: 1},
        {id: 5, qty: 2 , units: 'cloves', ingredients_id: 2, recipe_id: 2},
        {id: 6, qty: 3 , units: 'cloves', ingredients_id: 2, recipe_id: 3},
        {id: 7, qty: 1 , units: 'pounds', ingredients_id: 12, recipe_id: 1},
        {id: 8, qty: 1 , units: 'pounds', ingredients_id: 12, recipe_id: 2},
        {id: 9, qty: 1 , units: 'pounds', ingredients_id: 12, recipe_id: 3},
        {id: 10, qty: 1 , units: 'whole', ingredients_id: 13, recipe_id: 1},
        {id: 11, qty: 1 , units: 'whole', ingredients_id: 13, recipe_id: 3}
      ]);
    }).then(() => {
      return knex.raw(
        "SELECT setval('recipe_ingredients_id_seq', (SELECT MAX(id) FROM recipe_ingredients));"
      );
    })
  };
