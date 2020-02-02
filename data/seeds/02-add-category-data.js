/* eslint-disable max-len */
exports.seed = function(knex) {
  return knex('categories')
    .del()
    .then(function() {
      return knex('categories').insert([
        {
          category_name: 'Plastic Bag',
          impact_description:
            'Plastic bags cannot be recycled but reusable. You can take some of these items to local retail stores where they collect plastic grocery bags for recycling. One ton of plastic bag can save 685 Gallons of Oil',
          fact:
            '1 Trillion number of plastic bags produced worldwide in the year. 1000 YEARS – taken for 1 plastic bag to fully degrade. 100,000 number of marine animals killed each year as a result of plastic bag pollution ',
        },
        {
          category_name: 'Cigarette',
          impact_description: 'Cigarettes kill, less cigarettes less killing',
          fact:
            ' 98 percent of cigarette filters are made of plastic fibers which are non-biodegradable',
        },
        {
          category_name: 'Plastic Bottle',
          impact_description:
            'A single recycled plastic bottle saves enough energy to run a 100-watt bulb for 4 hours.',
          fact:
            'In the United States, we throw away 2.5 million plastic bottles every hour – about 42,000 per minute, or about 695 per second',
        },
        {
          category_name: 'Plastic Lid',
          impact_description:
            'A single recycled plastic bottle saves enough energy to run a 100-watt bulb for 4 hours.',
          fact:
            'Across America, we used on an average of 50 Billion plastic bottles and lids, however, only 1 in 5 are recycled.',
        },
        {
          category_name: 'Paper Cup',
          impact_description:
            'Can reduce about 0.11 kilograms of CO2 by not using a single cup production',
          fact:
            '50 billion paper cups in the U.S. end up in landfills every year. A paper cup takes 20 Years to decompose. It is NOT recyclable or biodegradable since the plastic used in a paper cup is polystyrene or Styrofoam.',
        },
        {
          category_name: 'Straw',
          impact_description:
            'Unfortunately, plastic straws are difficult to break down due to the fact that its small size and weight. However, there are still ways we can do and be responsible towards the environment by switching to eco-friendly straws made out of glass or metal!',
          fact:
            'According to the Trash Free Seas Alliance, the average American uses 1.6 straws a day. In the US alone, that’s enough to circle the equator two and a half times',
        },
        {
          category_name: 'Paper',
          impact_description:
            '     Recycling a daily newspaper can save about 250,000,000 trees. Recycling one piece of A4 paper can save 10 liters of water',
          fact:
            ' Recycling one ton of paper saves the energy equivalent to the energy needed to power the average U.S. home for six months and saves about 7,000 gallons of water. Every year, Individual American uses an average of 700 pounds of paper and paper products each year.',
        },
        {
          category_name: 'Glass Bottle',
          impact_description:
            'A single recycled plastic bottle saves enough energy to run a 100-watt bulb for 4 hours. Recycling 5 glass bottles can power a laptop for 31.3 hours',
        },
        {
          category_name: 'Styrofoam',
          impact_description:
            'By recycling the Styrofoam, you can save soil and the marine environment that could have been around at least 500 years to break down',
          fact:
            '25 Billion Styrofoam coffee cups alone thrown away each year – that’s enough cups to circle the earth 436 times less than 1% of all plastic foam is currently recycled.',
        },
        {
          category_name: 'Foil',
          impact_description:
            'Recycled aluminum saves more than 90 percent of the energy needed to produce virgin aluminum, and its one of the most valuable recyclable materials',
          fact:
            '     According to U.S. Census data and Simmons National Consumer Survey(NHCS), 316 million Americans used aluminum foil in 2019',
        },
        {
          category_name: 'Carton',
          impact_description:
            'By recycling today, you are going to make a big step in reducing Sulphur dioxide by 50% than making new cardboard from raw materials! Keep it up and be the part of the community to save 17 trees and 7000 gallons of waters',
          fact:
            'An average household can throw away as much as 13,000 separate pieces of cardboard every year. Most of this is packaging on foods and retail item',
        },
        {
          category_name: 'Can',
          impact_description:
            'Recycling one aluminum can save enough electricity to power a TV for 3 hours',
          fact:
            'It takes the same amount of energy to make one new can as it does to make 20 recycled cans',
        },
      ]);
    });
};
