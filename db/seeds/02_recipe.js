const TABLE_NAME = 'recipe'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, recName: 'Soylent Green', ingredients: " Bourbon \n  Scotch \n Beer" , instructions:  "Preheat oven to 300 F. \n  Add the salt and spinach paste to the flour, and in a mixing bowl or food processor, cut the butter in until the mixture looks like fine breadcrumbs. \n  Slowly mix in enough milk to form soft, but not sticky, dough. \n  Divide the dough into two or three portions and roll out one at a time, until paper thin. You can do this on a lightly floured workbench, or you can do it straight onto a large, ungreased cookie sheet, as I do. This recipe makes enough for my two trays, so divide your dough accordingly. \n Using a sharp knife or pizza roller, cut the dough into crackers. Prick each one two or three times with a fork and transfer carefully to the cookie sheet if you rolled it out on your bench. \n Bake for  minutes, until lightly browned and crisp. Allow to cool on the tray and then store in an air tight container for up to a week", picture:
        src=  "images/soylent-green-625x351.jpg" },

        {id: 2, recName: 'Rokeg Blood Pie', ingredients:"Bourbon \n  Scotch \n Beer", instructions: "Remove the foil and the weights, and immediately add the blood mixture. Make sure you stir it, so any bits that have fallen to the bottom are remixed. I find it easiest to use a soup ladle and ladle it in to the pie shell.\nBake for about 30-40 minutes, or until the mixture is firm to the touch and a dark bown colour. If desired, add any scraps of pastry to the top in a lattice or other design. Return to the oven and bake for a further 5 minutes to brown the pastry.\nIf you want to make the version as it appeared on TNG, boil your beetroots for about 20 minutes, so they are starting to soften but not completely soft. Make the filling as described above, then pour into a glass bowl. Insert the beetroots in the top, and bake for 30-40 minutes until the mixture is firm to the touch. Serve to your Klingon High Council and be assured that honour is satisfied" , picture: src= `images/rokeg_blood_pie.jpg` },

        {id: 3, recName:'Plomeek Soup', ingredients:"Bourbon \n Scotch \n Beer", instructions: "Sometimes coding really sucks.\nYou try something that should work and it does not.\nIt is really a bummer.", picture: src= "images/Plomeek_soup.jpg" },

      ])
    }).then(() => {
        // reset sequence
        return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
      })
};
