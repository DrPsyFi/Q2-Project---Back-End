
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Soylent Green', instructions: '1. Preheat oven to 150C (300F).\n2. Add the salt and spinach paste to the flour, and in a mixing bowl or food processor, cut the butter in until the mixture looks like fine breadcrumbs.\n3. Slowly mix in enough milk to form soft, but not sticky, dough.\n4. Divide the dough into two or three portions and roll out one at a time, until paper thin. You can do this on a lightly floured workbench, or you can do it straight onto a large, ungreased cookie sheet, as I do. This recipe makes enough for my two 10″ x 15″ trays, so divide your dough accordingly.\n5. Using a sharp knife or pizza roller, cut the dough into crackers. Prick each one two or three times with a fork and transfer carefully to the cookie sheet if you rolled it out on your bench.\n6. Bake for 15-20 minutes, until lightly browned and crisp. Allow to cool on the tray and then store in an air tight container for up to a week.', picture: src=`https://www.geek.com/wp-content/uploads/2017/11/soylent-green.jpg` },

        {id: 2, name: 'Rokeg Blood Pie', instructions: "Remove the foil and the weights, and immediately add the blood mixture. Make sure you stir it, so any bits that have fallen to the bottom are remixed. I find it easiest to use a soup ladle and ladle it in to the pie shell.\nBake for about 30-40 minutes, or until the mixture is firm to the touch and a dark bown colour. If desired, add any scraps of pastry to the top in a lattice or other design. Return to the oven and bake for a further 5 minutes to brown the pastry.\nIf you want to make the version as it appeared on TNG, boil your beetroots for about 20 minutes, so they are starting to soften but not completely soft. Make the filling as described above, then pour into a glass bowl. Insert the beetroots in the top, and bake for 30-40 minutes until the mixture is firm to the touch. Serve to your Klingon High Council and be assured that honour is satisfied", picture: src=`http://78.media.tumblr.com/d8b0524c21f618f726c006cfb95c1973/tumblr_inline_mp6tslw0051qz4rgp.jpg` },

        {id: 3, name: 'Plomeek Soup', instructions: "Sometimes coding really sucks.\nYou try something that should work and it does not.\nIt is really a bummer.", picture: src=`http://78.media.tumblr.com/tumblr_ma8fhmTeQT1rs0sag.jpg` }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('recipes_id_seq', (SELECT MAX(id)FROM recipes));`
      );
    })
};
