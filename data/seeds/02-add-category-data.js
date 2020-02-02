exports.seed = function(knex) {
  return knex('categories')
    .del()
    .then(function() {
      return knex('categories').insert([
        {
          category_name: 'Plastic Cup',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Plastic Bag',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Cigarette',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Plastic Bottle',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Lid',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Paper Cup',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Straw',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Paper',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Glass Bottle',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Styrofoam',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Foil',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Plastic Utensils',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Carton',
          impact_description: '',
          fact: '',
        },
        {
          category_name: 'Can',
          impact_description: '',
          fact: '',
        },
      ]);
    });
};
