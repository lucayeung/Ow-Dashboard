import requests
from bs4 import BeautifulSoup
import re

HEROES_URL = 'https://ow.blizzard.cn/heroes'

def get_all_heroes():
    result = list()
    response = requests.get(HEROES_URL)
    status = response.status_code
    if status == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        heroes = soup.find('div', id='heroes-selector-container')
        for hero in heroes:
            try:
                result.append({
                    'role': re.findall(r"\[\"(.+?)\"\]", hero['data-groups'])[0],
                    'name': hero.find('span', class_='portrait-title').text,
                    'imgUrl': hero.find('img', class_='portrait')['src'],
                    'relPath': hero.find('a', class_='hero-portrait-detailed')['href']
                })
            except TypeError as e:
                # 跳过换符
                pass
    return result
    # raise RuntimeError('请求失败')


def get_hero_detail_by_name(hero_name: str):
    result = dict()
    hero_url = HEROES_URL + '/' + hero_name.strip()
    res = requests.get(hero_url)
    status = res.status_code
    if status == 200:
        soup = BeautifulSoup(res.content, 'html.parser')

        # 英雄简介
        role_type = soup.find_all('h4', class_="h2 hero-detail-role-name")[0].text
        difficulty = soup.find_all('div', class_="hero-detail-difficulty")[0].find_all('span')
        hero_detail_description = soup.find_all('p', class_="hero-detail-description")[0].text
        ability_details_model = list()
        hero_ability_details = soup.find_all('div', class_="hero-detail-wrapper m-same-pad")[0].find_all('div',                                                                                            class_='hero-ability')
        for hero_ability_detail in hero_ability_details:
            ability_details_model.append({
                'abilityName': hero_ability_detail.find_all('h4', class_='h5')[0].text,
                'abilityDetail': hero_ability_detail.find_all('p')[0].text
            })
        overview = {
            'roleType': role_type,
            'difficulty': len(difficulty),
            'description': hero_detail_description,
            'abilityDetails': ability_details_model
        }

        # 英雄技能
        hero_abilities = list()
        abilities = soup.find("ul", class_="ability-button-list").find_all('li')
        for ability in abilities:
            hero_ability_name = ability['data-ability-name'].strip()
            hero_abilities.append({
                'imgUrl': ability.find_all('img')[0]['src'],
                'title': hero_ability_name if not hero_ability_name else '英雄模型'
            })
        # 视频链接
        ability_showcases = soup.find_all('div', class_="ability-showcase")[0].find_all('video')
        i = 0
        for showcase in ability_showcases:
            hero_abilities[i]['video_url'] = showcase.find_all('source')[0]['src']
            i = i + 1

        # 背景故事
        bio_backstory = ''
        backstory = soup.find('div', class_='hero-bio-backstory pad-sm').find_all('p')
        for item in backstory:
            bio_backstory = bio_backstory + item.text + '</br>'

        # 英雄简历：全称 职业 行动基地 隶属
        hero_bio = dict()
        HERO_BIO_TITLE_LIST = ['affilaiation', 'base', 'occupation', 'name']
        hero_bio_list = soup.find_all('ul', class_='hero-bio')[0].find_all('li')
        for bio in hero_bio_list:
            bio_content = bio.find('span', class_='hero-bio-copy').text
            bio_title = HERO_BIO_TITLE_LIST.pop()
            hero_bio[bio_title] = bio_content

        result = {
            'heroName': soup.find_all("h1", class_="hero-name")[0].text,
            'ability': hero_abilities,
            'overview': overview,
            'bio': hero_bio,
            # 口头蝉
            'detail_title': soup.find('p', class_='h4 hero-detail-title').text,
            # 背景故事
            'bio_backstory': bio_backstory
        }
    return result
