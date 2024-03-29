const trade_good_data = [
 {
   "name": "Bread, poor (loaf)",
   "cost": 0.01,
   "description": "A cheaply made loaf of bread, such as hardtack, that mostly consists of just flour and water"
 },
 {
   "name": "Eggs, chicken&apos;s (dozen)",
   "cost": 0.01,
   "description": "Eggs that come from chickens"
 },
 {
   "name": "Grain (pound)",
   "cost": 0.01,
   "description": "Plants primarily used for breadstuffs, such as barley, corn, rice, rye, or wheat"
 },
 {
   "name": "Shellfish (pound)",
   "cost": 0.01,
   "description": "Shelled aquatic animals such as clams, crayfish, lobsters, mussels, oysters, or snails"
 },
 {
   "name": "Butter (pound)",
   "cost": 0.02,
   "description": "A cheap cooking fat made from stirring milk"
 },
 {
   "name": "Chicken (pound)",
   "cost": 0.02,
   "description": "A cheap, lean meat"
 },
 {
   "name": "Flour (pound)",
   "cost": 0.02,
   "description": "A grain that has been ground into a fine powder"
 },
 {
   "name": "Lard (pound)",
   "cost": 0.02,
   "description": "A cooking fat rendered from pig fat"
 },
 {
   "name": "Milk, cow&apos;s (gallon)",
   "cost": 0.02,
   "description": "A thick, creamy white liquid that comes from cows"
 },
 {
   "name": "Oil, cooking (gallon)",
   "cost": 0.02,
   "description": "A cooking fat rendered from olives"
 },
 {
   "name": "Vegetable (pound)",
   "cost": 0.02,
   "description": "Plants primarily used in savory dishes, such as artichokes, asaparagus, beans, beetroot, cabbage, carrots, cucumbers, endives, fennel, garlic, leeks, lentils, lettuce, onions, parsnips, peas, peppers, shallots, squash, sweet potatoes, tomatoes, turnips, and watercress"
 },
 {
   "name": "Yeast (pound)",
   "cost": 0.02,
   "description": "A collection of micro-organisms used for leavening bread or brewing alcohol"
 },
 {
   "name": "Bread, standard (loaf)",
   "cost": 0.05,
   "description": "A fairly cheap loaf of bread that includes some seasonings or leaveners"
 },
 {
   "name": "Cheese, poor (wheel)",
   "cost": 0.05,
   "description": "A wheel of cheaply made cheese"
 },
 {
   "name": "Coal (pound)",
   "cost": 0.05,
   "description": "A black rock that can be used as fuel"
 },
 {
   "name": "Eggs, duck&apos;s (dozen)",
   "cost": 0.05,
   "description": "Larger, richer eggs that come from ducks"
 },
 {
   "name": "Fish, freshwater (pound)",
   "cost": 0.05,
   "description": "Freshwater aquatic animals, such as carp, eels, perch, pike salmon, tench, or trout"
 },
 {
   "name": "Fruit (pound)",
   "cost": 0.05,
   "description": "Plants primarily used in sweet dishes, such as apples, apricots, cherries, grapes, lemons, melons, oranges, peaches, pineapples, pomegranates, quinces, raspberries, red currants, or strawberries"
 },
 {
   "name": "Salt (pound)",
   "cost": 0.05,
   "description": "A white rock that can be used as seasoning"
 },
 {
   "name": "Vinegar (gallon)",
   "cost": 0.05,
   "description": "Fermented wine that has acquired a very sour taste"
 },
 {
   "name": "Canvas (pound)",
   "cost": 0.1,
   "description": "A rough fabric made from cloth fibers"
 },
 {
   "name": "Feathers (pound)",
   "cost": 0.1,
   "description": "Feathers that can be used for arrow fletching or quills"
 },
 {
   "name": "Fish, saltwater (pound)",
   "cost": 0.1,
   "description": "Saltwater aquatic animals, such as cod, eels, herring, plaice, or whiting"
 },
 {
   "name": "Herb (pound)",
   "cost": 0.1,
   "description": "Green, leafy plants primarily used for flavoring, such as basil, dill, mint, oregano, parsley, rosemary, sage, tarragon, or thyme"
 },
 {
   "name": "Iron (ingot)",
   "cost": 0.1,
   "description": "A silvery metal that can be worked into tools or further refined into metals such as steel or dragonsteel"
 },
 {
   "name": "Lead (ingot)",
   "cost": 0.1,
   "description": "A soft, dark-colored metal with a low melting point"
 },
 {
   "name": "Milk, goat&apos;s (gallon)",
   "cost": 0.1,
   "description": "A stronger-tasting liquid that comes from goats"
 },
 {
   "name": "Pickles (pound)",
   "cost": 0.1,
   "description": "Brined and flavored vegetables"
 },
 {
   "name": "Rabbit (pound)",
   "cost": 0.1,
   "description": "Gamey, lean meat that comes from rabbits"
 },
 {
   "name": "Spices, common (pound)",
   "cost": 0.1,
   "description": "More readily available spices, such as cayanne, ginger, mustard, paprika, pepper, or sugar"
 },
 {
   "name": "Beeswax (pound)",
   "cost": 0.5,
   "description": "The raw material of beehives, which is useful for things such as candles and sculpting"
 },
 {
   "name": "Bread, good (loaf)",
   "cost": 0.5,
   "description": "A good loaf of bread, including leaveners and seasonings"
 },
 {
   "name": "Cheese, standard (wheel)",
   "cost": 0.5,
   "description": "A standard wheel of cheese"
 },
 {
   "name": "Copper (ingot)",
   "cost": 0.5,
   "description": "An orange-ish metal with a high conductance"
 },
 {
   "name": "Duck (pound)",
   "cost": 0.5,
   "description": "A meat that comes from ducks and tastes similar to chicken"
 },
 {
   "name": "Honey (pound)",
   "cost": 0.5,
   "description": "A thick, sweet product produced by bees"
 },
 {
   "name": "Nuts (pound)",
   "cost": 0.5,
   "description": "Hard-shelled legumes, such as almonds, cashews, peanuts, pecans, or walnuts"
 },
 {
   "name": "Tin (ingot)",
   "cost": 0.5,
   "description": "A soft, silvery metal useful in alloys"
 },
 {
   "name": "Zinc (ingot)",
   "cost": 0.5,
   "description": "A light, blue-ish white metal used in alloys"
 },
 {
   "name": "Chevon (pound)",
   "cost": 1,
   "description": "A slightly sweet meat that comes from goats"
 },
 {
   "name": "Cotton (pound)",
   "cost": 1,
   "description": "A fluffy white plant product used in making fabric"
 },
 {
   "name": "Pheasant (pound)",
   "cost": 1,
   "description": "Meat from a small, wild bird popular among hunters"
 },
 {
   "name": "Spices, uncommon (pound)",
   "cost": 1,
   "description": "Less readily available spices, such as cinnamon, coriander, mace, nutmeg, turmeric, or vanilla"
 },
 {
   "name": "Turkey (pound)",
   "cost": 1,
   "description": "Meat from a larger wild bird with distinctive plumage"
 },
 {
   "name": "Wool (pound)",
   "cost": 1,
   "description": "A fluffy white product derived from sheep&apos;s fur used in making fabric"
 },
 {
   "name": "Brass (ingot)",
   "cost": 2,
   "description": "An alloy derived from copper and zinc resistant to corrosion"
 },
 {
   "name": "Bread, fine (loaf)",
   "cost": 2,
   "description": "An excellent loaf of bread, often with special flavorings or ingredients"
 },
 {
   "name": "Bronze (ingot)",
   "cost": 2,
   "description": "An alloy derived from copper and tin used for weaponry and armor"
 },
 {
   "name": "Mutton (pound)",
   "cost": 2,
   "description": "A meat that comes from sheep and tastes similar to beef and pork"
 },
 {
   "name": "Cheese, good (wheel)",
   "cost": 3,
   "description": "A good wheel of cheese, often with special flavorings"
 },
 {
   "name": "Hides, raw (pound)",
   "cost": 3,
   "description": "Raw, untanned hides from animals such as sheep or cows"
 },
 {
   "name": "Pork (pound)",
   "cost": 3,
   "description": "A lean meat that comes from pigs"
 },
 {
   "name": "Venison (pound)",
   "cost": 3,
   "description": "A gamey meat that comes from wild ungulates, such as deer or elk"
 },
 {
   "name": "Cheese, excellent (wheel)",
   "cost": 5,
   "description": "An excellent wheel of cheese, expensive and hard to find"
 },
 {
   "name": "Hides, tanned (pound)",
   "cost": 5,
   "description": "Hides prepared for being made into leather"
 },
 {
   "name": "Linen (pound)",
   "cost": 5,
   "description": "A thin fabric made from flax"
 },
 {
   "name": "Spices, rare (pound)",
   "cost": 5,
   "description": "Rarer spices, such as allspice, anise, caraway, cardamom, cloves, or cocoa"
 },
 {
   "name": "Beef (pound)",
   "cost": 10,
   "description": "A red meat that comes from cows"
 },
 {
   "name": "Caviar (pound)",
   "cost": 10,
   "description": "Aged and prepared fish eggs popular among aristocrats"
 },
 {
   "name": "Silver, mundane (ingot)",
   "cost": 10,
   "description": "A shiny metal used in jewelery"
 },
 {
   "name": "Steel (ingot)",
   "cost": 10,
   "description": "A processed form of iron that is more sturdy and corrosion resistant"
 },
 {
   "name": "Saffron (pound)",
   "cost": 15,
   "description": "An incredibly rare spice obtained from a type of flower"
 },
 {
   "name": "Silk (pound)",
   "cost": 15,
   "description": "A luxurious fabric obtained from silkworms"
 },
 {
   "name": "Cold Iron (ingot)",
   "cost": 50,
   "description": "Also called sky iron, a rare and sturdy metal with an oddly low melting point when worked correctly"
 },
 {
   "name": "Gold (ingot)",
   "cost": 50,
   "description": "A yellow, shiny metal prized for use in jewelery"
 },
 {
   "name": "Ivory (pound)",
   "cost": 50,
   "description": "A shiny, white substance obtained from elephant tusks and prized for its beauty"
 },
 {
   "name": "Pride Silk (pound)",
   "cost": 50,
   "description": "A tougher form of silk, nearly with the properties of hardened leather while maintaining the flexibility of silk"
 },
 {
   "name": "Veal (pound)",
   "cost": 50,
   "description": "A variety of beef obtained from young cows"
 },
 {
   "name": "Dragonsteel (ingot)",
   "cost": 100,
   "description": "A form of steel produced through use of dragonfire"
 },
 {
   "name": "Electrum (ingot)",
   "cost": 100,
   "description": "An alloy of gold and silver with an extremely high conductance"
 },
 {
   "name": "Platinum (ingot)",
   "cost": 100,
   "description": "A rare, silvery metal used in jewelery"
 },
 {
   "name": "Silver, alchemical (ingot)",
   "cost": 100,
   "description": "Silver that has been prepared by an alchemist to be used against monsters of the night"
 },
 {
   "name": "Tungsten (ingot)",
   "cost": 100,
   "description": "An incredibly tough metal favored for armor production"
 },
 {
   "name": "Mithral (ingot)",
   "cost": 500,
   "description": "A very tough but light metal found in meteorites"
 },
 {
   "name": "Mithral (ingot)",
   "cost": 1000,
   "description": "An absurdly light, blueish metal favored by elves for armor production"
 }
];