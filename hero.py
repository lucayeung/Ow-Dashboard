import requests
from bs4 import BeautifulSoup

#todo
HERO_URL = 'https://ow.blizzard.cn/heroes/doomfist'

res = requests.get(HERO_URL)
status = res.status_code
if status == 200:
    result = dict()
    soup = BeautifulSoup(res.content, 'html.parser')
    hero_name = soup.find_all("h1", class_="hero-name")[0].text
    result['hero_name'] = hero_name
    # 技能
    hero_abilities = soup.find("ul", class_="ability-button-list").find_all('li')
    abilities = []
    for hero_ability in hero_abilities:
       ability = dict()
       hero_ability_name = hero_ability['data-ability-name'].strip()
       hero_ability_img = hero_ability.find_all('img')[0]['src']
       ability['img'] = hero_ability_img
       if not hero_ability_name:
           ability['title'] = '英雄模型'
       else:
           ability['title'] = hero_ability_name
       abilities.append(ability)

    # 视频链接
    ability_showcases = soup.find_all('div', class_="ability-showcase")[0].find_all('video')
    i = 0
    for showcase in ability_showcases:
        video_url = showcase.find_all('source')[0]['src']
        abilities[i]['video_url'] = video_url
        i = i + 1
    result['ability'] = abilities

    print(result)
    
    # overview
    role_type = soup.find_all('h4', class_="h2 hero-detail-role-name")[0].text
    print(role_type)
    difficulty = soup.find_all('div', class_="hero-detail-difficulty")[0].find_all('span')
    print(len(difficulty))
    hero_detail_description = soup.find_all('p', class_="hero-detail-description")[0].text
    print(hero_detail_description)
    hero_detail_abilities = soup.find_all('div', class_="hero-detail-wrapper m-same-pad")[0].find_all('div', class_='hero-ability')
    for hero_detail_ability in hero_detail_abilities:
        ability_descriptor = hero_detail_ability.find('div', class_='hero-ability-descriptor')
        ability_name = ability_descriptor.find_all('h4', class_='h5')[0].text
        ability_detail = ability_descriptor.find_all('p')[0].text
        print(ability_name)
        print(ability_detail)

    # story
    hero_bio = soup.find_all('ul', class_='hero-bio')[0].find_all('li')
    '''
    todo s
    name
    occupation
    base
    affiliation
    '''
    for item in hero_bio:
        bio = item.find('span', class_='hero-bio-copy').text
        print(bio)

    # 口头蝉
    detail_title = soup.find('p', class_='h4 hero-detail-title').text
    print(detail_title)

    # 背景故事
    bio_backstory = soup.find('div', class_='hero-bio-backstory pad-sm').find_all('p')
    backstory_res = ''
    for item in bio_backstory:
        backstory_res = backstory_res + item.text + '</br>'
    print(backstory_res)
    
       