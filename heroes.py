import requests
from bs4 import BeautifulSoup

import re

HEROES_URL = 'https://ow.blizzard.cn/heroes'

res = requests.get(HEROES_URL)
status = res.status_code
if status == 200:
    soup = BeautifulSoup(res.content, 'html.parser')
    heroes = soup.find('div', id='heroes-selector-container')
    heroes_res = list()
    for hero in heroes:
        hero_res = dict()
        try:
            role_raw = hero['data-groups']
            role = re.findall(r"\[\"(.+?)\"\]", role_raw)[0]
            hero_res['role'] = role

            name = hero.find('span', class_='portrait-title').text
            hero_res['name'] = name

            img_url = hero.find('img', class_='portrait')['src']
            hero_res['img_url'] = img_url

            detail = hero.find('a', class_='hero-portrait-detailed')['href']
            hero_res['detail'] = detail
            heroes_res.append(hero_res)
        except TypeError as e:
            # 不处理换行
            pass
    print(heroes_res)
