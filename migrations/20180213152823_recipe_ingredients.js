
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', table => {
    table.increments()
    table.integer('qty').notNullable()
    table.string('units').notNullable()
    table.integer('ingredients_id').notNullable()
    table.foreign("ingredients_id").references('ingredients.id')
    table.integer('recipe_id').notNullable()
    table.foreign('recipe_id').references('recipes.id')
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients')
};
