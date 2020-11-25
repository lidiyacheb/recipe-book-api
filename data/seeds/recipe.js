
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, task: 'Create API'},
        {id: 2, task: 'Watch Money Heist'},
        {id: 3, task: 'Do Dishex'}
      ]);
    });
};
