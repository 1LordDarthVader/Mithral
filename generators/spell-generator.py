import requests
import winsound

base_url = 'http://adamantine.wikidot.com/spell:list/p/'
link_base_url = 'https://jpmchatton98.github.io/adamantine/character-creation-resources/spells/spell.html?spell_id='

spell_list = []

for i in range(4):
    response = requests.get(base_url + str(i + 1))

    responseText = response.text
    responseText = responseText.split('<p>')[1].split('</p>')[0]

    spell_list = spell_list + responseText.split('<br />\n')

base_url = 'http://adamantine.wikidot.com/spell:'

data_list = []

spell_index = 0
for spell in spell_list:
    try:
        print('Getting data for spell: ' + spell)

        response = requests.get('http://adamantine.wikidot.com/spell:' + spell)
        responseText = response.text

        responseText = responseText.split('<div id="main-content">')[1].split('<div id="page-info-break"></div>')[0]

        name = responseText.split('<div id="page-title">')[1].split('</div>')[0].strip()
        casting_time = responseText.split('Casting Time:</strong>')[1].split('<br />\n<strong>Range:')[0].strip()
        range = responseText.split('Range:</strong>')[1].split('<br />\n<strong>Components:')[0].strip()
        components = responseText.split('Components:</strong>')[1].split('<br />\n<strong>Duration:')[0].strip()
        duration = responseText.split('Duration:</strong>')[1].split('</p>\n<p>')[0].strip()

        if 'At Higher Levels.</em></strong>' in responseText:
            higher_levels = responseText.split('At Higher Levels.</em></strong>')[1].split('<div class="content-separator')[0].strip()
        elif 'At Higher Levels:</em></strong>' in responseText:
            higher_levels = responseText.split('At Higher Levels:</em></strong>')[1].split('<div class="content-separator')[0].strip()
        elif 'At Higher Levels.</strong></em>' in responseText:
            higher_levels = responseText.split('At Higher Levels.</strong></em>')[1].split('<div class="content-separator')[0].strip()
        elif 'At Higher Levels:</strong></em>' in responseText:
            higher_levels = responseText.split('At Higher Levels:</strong></em>')[1].split('<div class="content-separator')[0].strip()
        else:
            higher_levels = ''

        higher_levels = higher_levels.replace('’', '&#8217;')

        if higher_levels and '<strong><em>At Higher Levels' in responseText:
            description = responseText.split(duration + '</p>\n')[1].split('\n<p><strong><em>At Higher Levels')[0].strip()
        elif higher_levels and '<em><strong>At Higher Levels' in responseText:
            description = responseText.split(duration + '</p>\n')[1].split('\n<p><em><strong>At Higher Levels')[0].strip()
        else:
            description = responseText.split(duration + '</p>\n')[1].split('<div class="content-separator')[0].strip()
        description = description.replace('’', '&#8217;')
        description = description.replace(' class=\"wiki-content-table\"', '')

        # print('Description: ' + description)
        # print('Higher Levels: ' + higher_levels)

        tags = responseText.split('<div class="page-tags">')[1].split('</div>')[0].strip()
        tags = tags.replace('<span>', '')
        tags = tags.split('</a>')
        tags = [tag.split('>')[1] for tag in tags]
        tags = tags[:-1]

        level = -1
        school = ''
        lists = []
        ritual = 0

        for tag in tags:
            if tag in ['cantrip', '1level', '2level', '3level', '4level', '5level', '6level', '7level', '8level', '9level']:
                if tag == 'cantrip':
                    level = 0
                else:
                    level = int(tag.replace('level', ''))
            elif tag in ['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy',
                         'restoration', 'transmutation', 'transposition']:
                school = tag.capitalize()
            elif tag == 'ritual':
                ritual = 1
            else:
                if tag == "Palemaster":
                    tag = "Pale Master"
                lists.append(tag.capitalize())

        table = None
        if '<table class="wiki-content-table">' in responseText:
            table = '<table>' + responseText.split('<table class="wiki-content-table">')[1].split('</table>')[0] + '</table>'
        # print(table)

        data = {
            'spell-index': spell_index,
            'name': name,
            'name-linked': f'<a href={link_base_url + str(spell_index)}>{name}</a>',
            'school': school if school else '',
            'level': level,
            'casting-time': casting_time,
            'casting-time-list': casting_time.split(',')[0] + ('<sup>R</sup>' if ritual else ''),
            'range': range,
            'components': components,
            'components-list': components.split('(')[0],
            'duration': duration,
            'description': description,
            'higher-levels': higher_levels,
            'lists': lists,
            'ritual': ritual,
            'table': table if table and table not in description else ''
        }
        data_list.append(data)

        spell_index += 1
    except:
        print('Spell ' + spell + ' is having issues.')
        winsound.Beep(800, 500)

file = open('../data/spells.js', 'wb')

data_text = str(data_list)
data_text = f"const spell_data = {data_text};"

file.write(data_text.encode('utf8'))

file.close()

print('Got the spell data')
winsound.Beep(400, 1000)
winsound.Beep(400, 1000)
winsound.Beep(400, 1000)