import requests
import winsound

base_url = 'http://adamantine.wikidot.com/weapon:list/p/'
link_base_url = '../general-store/weapons/weapons.html?weapon_id='

weapon_list = []

for i in range(1):
    response = requests.get(base_url + str(i + 1))

    responseText = response.text
    responseText = responseText.split('<p>')[1].split('</p>')[0]

    weapon_list = weapon_list + responseText.split('<br />\n')

base_url = 'http://adamantine.wikidot.com/weapon:'

data_list = []

weapon_index = 0
for weapon in weapon_list:
    print('Getting data for weapon: ' + weapon)

    response = requests.get('http://adamantine.wikidot.com/weapon:' + weapon)
    responseText = response.text

    responseText = responseText.split('<div id="main-content">')[1].split('<div id="page-info-break"></div>')[0]

    name = responseText.split('<div id="page-title">')[1].split('</div>')[0].strip()

    description = responseText.split('<p>')[1].split('</p>')[0].strip()

    table = responseText.split('<table class="wiki-content-table">')[1].split('</table>')[0]
    table = table.split('<tr>')[2].split('</tr>')[0].strip()

    damage = table.split('<td>')[1].split('</td>')[0].strip()
    damage_types = table.split('<td>')[2].split('</td>')[0].strip()

    range = int(table.split('<td>')[3].split('</td>')[0].strip().replace(' ft', '').replace(' feet', '').replace('&#160;ft', '').replace('&#160;feet', ''))
    long_range = int(table.split('<td>')[4].split('</td>')[0].strip().replace(' ft', '').replace(' feet', '').replace('&#160;ft', '').replace('&#160;feet', ''))
    ammunition = table.split('<td>')[5].split('</td>')[0].strip()

    cost = table.split('<td>')[6].split('</td>')[0].strip()

    if 'cp' in cost:
        cost = int(cost.replace(' cp', '')) * 0.01
    elif 'sp' in cost:
        cost = int(cost.replace(' sp', '')) * 0.1
    elif 'ep' in cost:
        cost = int(cost.replace(' ep', '')) * 0.5
    elif 'gp' in cost:
        cost = int(cost.replace(' gp', ''))
    elif 'pp' in cost:
        cost = int(cost.replace(' pp', '')) * 10

    weight = float(table.split('<td>')[7].split('</td>')[0].strip().replace(' lbs', '').replace(' lb', '').replace('&#160;lb', '').replace('&#160;lbs', ''))

    property_list = []
    properties = table.split('<td>')[8].split('</td>')[0].strip()
    properties = properties.split('<span class="hover">')
    properties = properties[1:]

    for weapon_property in properties:
        property_list.append({
            'name': weapon_property.split('<span><strong>')[1].split('</strong>')[0].strip(),
            'description': weapon_property.split('<br />\n')[1].split('</span>')[0].strip()
        })

    tags = responseText.split('<div class="page-tags">')[1].split('</div>')[0].strip()
    tags = tags.replace('<span>', '')
    tags = tags.split('</a>')
    tags = [tag.split('>')[1] for tag in tags]
    tags = tags[:-1]

    weapon_type = -1

    for tag in tags:
        if tag in ['simple', 'martial', 'exotic']:
            if tag == 'simple':
                weapon_type = 0
            elif tag == 'martial':
                weapon_type = 1
            elif tag == 'exotic':
                weapon_type = 2
        else:
            ranged = (tag == 'ranged')

    data = {
        'weapon-index': weapon_index,
        'name': name,
        'name-linked': f'<a href={link_base_url + str(weapon_index)}>{name}</a>',
        'description': description,
        'damage': damage,
        'damage-types': damage_types,
        'cost': cost,
        'weight': weight,
        'properties': property_list,
        'type': weapon_type,
        'range': range,
        'long-range': long_range,
        'range-together': f'({range}/{long_range})',
        'ammunition': ammunition
    }
    data_list.append(data)

    weapon_index += 1

file = open('../data/ranged_weapons.js', 'wb')

data_text = str(data_list)
data_text = f"const weapon_data = {data_text};"

file.write(data_text.encode('utf8'))

file.close()

print('Got the weapon data')
winsound.Beep(400, 1000)
winsound.Beep(400, 1000)
winsound.Beep(400, 1000)