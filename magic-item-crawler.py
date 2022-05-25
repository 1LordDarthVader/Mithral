import requests
import json

file = open('./magic-item-base.json')
base_data = json.loads(file.read())

magic_item_data = []

rarity_index = {
    'common': 0,
    'uncommon': 1,
    'rare': 2,
    'very rare': 3,
    'legendary': 4,
    'artifact': 5
}

# counter = 0
for item in base_data:
    cancel_adding = False
    magic_item = {}

    magic_item['name'] = item['name']
    print(item['name'])

    if item['rarity'] in rarity_index.keys():
        magic_item['rarity'] = rarity_index[item['rarity']]
    else:
        cancel_adding = True


    magic_item['type'] = item['type'].split(',')[0]

    if magic_item['type'] == 'generic variant':
        if 'shield' in magic_item['name'].lower():
            magic_item['type'] = 'shield'
        elif 'armor' in magic_item['name'].lower():
            magic_item['type'] = 'armor'

    if item['attunement']:
        magic_item['attunement'] = True
        if item['attunement'].lower() != 'requires attunement':
            magic_item['attunement_desc'] = item['attunement'].split('attunement ')[1]
        else:
            magic_item['attunement_desc'] = ""
    else:
        magic_item['attunement'] = False
        magic_item['attunement_desc'] = ""

    magic_item['desc'] = item['text']

    if not cancel_adding:
        magic_item_data.append(magic_item)


output_file = open('./data/general-store/magic-items/magic-items.js', 'w')

output_file.write('const magic_item_data = ' + json.dumps(magic_item_data) + ';')

file.close()
output_file.close()