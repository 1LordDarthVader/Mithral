const ranged_weapon_data = [
{
    'weapon-index': 0,
    'name': 'Atltal',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=0>Atltal</a>',
    'description': 'A simple catapult used for throwing javelins further and with more force.',
    'damage': '1d8',
    'damage-types': 'Piercing',
    'cost': 1,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 0,
    'range': 60,
    'long-range': 180,
    'range-together': '(60/180)',
    'ammunition': 'Javelins'
},
{
    'weapon-index': 1,
    'name': 'Blowgun',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=1>Blowgun</a>',
    'description': 'A short pipe made of reed or bamboo that can quietly launch darts.',
    'damage': '1d4',
    'damage-types': 'Piercing',
    'cost': 1,
    'weight': 1.0,
    'properties': [
    {
        'name': 'Brutal',
        'description': 'Add an additional damage die when determining the damage dealt by a critical hit.'
    },
    {
        'name': 'Covert',
        'description': 'You have advantage on ability checks made to hide this weapon on your person, and other creatures have disadvantage on checks made to find it.'
    },
    {
        'name': 'Loading',
        'description': 'When you use an action, bonus action, or reaction to attack with this weapon, you can only make one attack, regardless of how many you would normally be able to make.'
    },
    {
        'name': 'Special',
        'description': 'Blowgun needles can be coated in poison. One vial of poison can coat ten needles. In addition, if you are hidden and miss an attack with a blowgun, you do not reveal yourself to the target.'
    }],
    'type': 0,
    'range': 25,
    'long-range': 100,
    'range-together': '(25/100)',
    'ammunition': 'Blowgun Needles'
},
{
    'weapon-index': 2,
    'name': 'Crossbow, great',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=2>Crossbow, great</a>',
    'description': 'A massive, four-armed crossbow that fires heavier bolts.',
    'damage': '2d8',
    'damage-types': 'Piercing',
    'cost': 75,
    'weight': 25.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Loading',
        'description': 'When you use an action, bonus action, or reaction to attack with this weapon, you can only make one attack, regardless of how many you would normally be able to make.'
    },
    {
        'name': 'Massive (20)',
        'description': 'Your Strength score must be a certain value in order to use this weapon. A number in parentheses appears with the property - the number that your Strength score must be equal to.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2,
    'range': 300,
    'long-range': 1200,
    'range-together': '(300/1200)',
    'ammunition': 'Heavy Bolts'
},
{
    'weapon-index': 3,
    'name': 'Crossbow, hand',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=3>Crossbow, hand</a>',
    'description': 'A light and small crossbow used in one hand.',
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 50,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    },
    {
        'name': 'Loading',
        'description': 'When you use an action, bonus action, or reaction to attack with this weapon, you can only make one attack, regardless of how many you would normally be able to make.'
    }],
    'type': 2,
    'range': 30,
    'long-range': 120,
    'range-together': '(30/120)',
    'ammunition': 'Bolts'
},
{
    'weapon-index': 4,
    'name': 'Crossbow, hand (repeating)',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=4>Crossbow, hand (repeating)</a>',
    'description': "A hand crossbow that doesn't need to be reloaded through a miracle of artifice.",
    'damage': '1d6',
    'damage-types': 'Piercing',
    'cost': 50,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Light',
        'description': 'You can engage in two-weapon fighting with this weapon.'
    }],
    'type': 2,
    'range': 30,
    'long-range': 120,
    'range-together': '(30/120)',
    'ammunition': 'Bolts'
},
{
    'weapon-index': 5,
    'name': 'Crossbow, heavy',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=5>Crossbow, heavy</a>',
    'description': 'A large and heavy crossbow.',
    'damage': '1d10',
    'damage-types': 'Piercing',
    'cost': 50,
    'weight': 18.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Loading',
        'description': 'When you use an action, bonus action, or reaction to attack with this weapon, you can only make one attack, regardless of how many you would normally be able to make.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1,
    'range': 100,
    'long-range': 400,
    'range-together': '(100/400)',
    'ammunition': 'Bolts'
},
{
    'weapon-index': 6,
    'name': 'Crossbow, heavy (repeating)',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=6>Crossbow, heavy (repeating)</a>',
    'description': 'A heavy crossbow equipped with a crank that automatically reloads it.',
    'damage': '1d10',
    'damage-types': 'Piercing',
    'cost': 50,
    'weight': 18.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2,
    'range': 100,
    'long-range': 400,
    'range-together': '(100/400)',
    'ammunition': 'Bolts'
},
{
    'weapon-index': 7,
    'name': 'Crossbow, light',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=7>Crossbow, light</a>',
    'description': 'A smaller crossbow used by those to whom a heavier crossbow is too expensive or too heavy.',
    'damage': '1d8',
    'damage-types': 'Piercing',
    'cost': 25,
    'weight': 5.0,
    'properties': [
    {
        'name': 'Loading',
        'description': 'When you use an action, bonus action, or reaction to attack with this weapon, you can only make one attack, regardless of how many you would normally be able to make.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1,
    'range': 80,
    'long-range': 320,
    'range-together': '(80/320)',
    'ammunition': 'Bolts'
},
{
    'weapon-index': 8,
    'name': 'Crossbow, light (repeating)',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=8>Crossbow, light (repeating)</a>',
    'description': 'A light crossbow equipped with a crank that automatically reloads it.',
    'damage': '1d8',
    'damage-types': 'Piercing',
    'cost': 25,
    'weight': 5.0,
    'properties': [
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2,
    'range': 80,
    'long-range': 320,
    'range-together': '(80/320)',
    'ammunition': 'Bolts'
},
{
    'weapon-index': 9,
    'name': 'Longbow',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=9>Longbow</a>',
    'description': 'A large, long-ranged bow.',
    'damage': '1d8',
    'damage-types': 'Bludgeoning, Piercing, or Slashing',
    'cost': 50,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 1,
    'range': 150,
    'long-range': 600,
    'range-together': '(150/600)',
    'ammunition': 'Arrows'
},
{
    'weapon-index': 10,
    'name': 'Longbow, composite',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=10>Longbow, composite</a>',
    'description': "A longbow that is modified to make use of its user's strength.",
    'damage': '1d8',
    'damage-types': 'Bludgeoning, Piercing, or Slashing',
    'cost': 50,
    'weight': 4.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Kensei',
        'description': "This weapon is a valid choice as a Kensei weapon, even if it normally wouldn't be."
    },
    {
        'name': 'Special',
        'description': 'You may add your Strength modifier to the damage of a composite bow.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2,
    'range': 150,
    'long-range': 600,
    'range-together': '(150/600)',
    'ammunition': 'Arrows'
},
{
    'weapon-index': 11,
    'name': 'Shortbow',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=11>Shortbow</a>',
    'description': 'A small bow used by those whom to longbows are too heavy or too difficult to use.',
    'damage': '1d6',
    'damage-types': 'Bludgeoning, Piercing, or Slashing',
    'cost': 25,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 0,
    'range': 80,
    'long-range': 320,
    'range-together': '(80/320)',
    'ammunition': 'Arrows'
},
{
    'weapon-index': 12,
    'name': 'Shortbow, composite',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=12>Shortbow, composite</a>',
    'description': "A shortbow that is modified to make use of its user's strength.",
    'damage': '1d6',
    'damage-types': 'Bludgeoning, Piercing, or Slashing',
    'cost': 25,
    'weight': 2.0,
    'properties': [
    {
        'name': 'Special',
        'description': 'You may add your Strength modifier to the damage of a composite bow.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2,
    'range': 80,
    'long-range': 320,
    'range-together': '(80/320)',
    'ammunition': 'Arrows'
},
{
    'weapon-index': 13,
    'name': 'Sling',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=13>Sling</a>',
    'description': 'A simple leather strap that can launch stones. Ball bearings can also be used as sling ammunition.',
    'damage': '1d4',
    'damage-types': 'Bludgeoning',
    'cost': 0.1,
    'weight': 0.25,
    'properties': [],
    'type': 0,
    'range': 30,
    'long-range': 120,
    'range-together': '(30/120)',
    'ammunition': 'Stones'
},
{
    'weapon-index': 14,
    'name': 'Warbow',
    'name-linked': '<a href=../weapons/ranged-weapon.html?weapon_id=14>Warbow</a>',
    'description': 'A massive elven bow used by only those with the strength to master it.',
    'damage': '2d6',
    'damage-types': 'Bludgeoning, Piercing, or Slashing',
    'cost': 75,
    'weight': 3.0,
    'properties': [
    {
        'name': 'Heavy',
        'description': 'Small creatures suffer disadvantage on attack rolls with the weapon. Tiny creatures cannot use them.'
    },
    {
        'name': 'Massive (20)',
        'description': 'Your Strength score must be a certain value in order to use this weapon. A number in parentheses appears with the property - the number that your Strength score must be equal to.'
    },
    {
        'name': 'Two-handed',
        'description': 'This weapon requires two hands when you attack with it. This property is relevant only when you attack with the weapon, not when you simply hold it.'
    }],
    'type': 2,
    'range': 400,
    'long-range': 1600,
    'range-together': '(400/1600)',
    'ammunition': 'Heavy Arrows'
}];