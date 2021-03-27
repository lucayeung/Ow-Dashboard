import requests
from bs4 import BeautifulSoup


class HeroInterpreter:
    """
    守望先锋英雄建造者
    """

    def __init__(self, hero_name):
        HERO_URL_PREFIX = 'https://ow.blizzard.cn/heroes/'
        hero_url = HERO_URL_PREFIX + hero_name.strip()
        res = requests.get(hero_url)
        status = res.status_code
        if status == 200:
            self.soup = BeautifulSoup(res.content, 'html.parser')
        else:
            raise RuntimeError('英雄建造者出创建失败')
        self.hero_model = dict()


    def get_name(self):
        """
        英雄的名称
        """
        return self.soup.find_all("h1", class_="hero-name")[0].text
 
 
    def get_abilities(self):
        """
        英雄的技能
        """
        result = []
        hero_abilities = self.soup.find("ul", class_="ability-button-list").find_all('li')
        for hero_ability in hero_abilities:
            ability = dict()
            hero_ability_name = hero_ability['data-ability-name'].strip()
            hero_ability_img = hero_ability.find_all('img')[0]['src']
            ability['img'] = hero_ability_img
            if not hero_ability_name:
                ability['title'] = '英雄模型'
            else:
                ability['title'] = hero_ability_name
            result.append(ability)
    
        # 视频链接
        ability_showcases = self.soup.find_all('div', class_="ability-showcase")[0].find_all('video')
        i = 0
        for showcase in ability_showcases:
            video_url = showcase.find_all('source')[0]['src']
            result[i]['video_url'] = video_url
            i = i + 1
        return result
 
 
    def get_overview(self):
        """
        英雄简介
        """
        overview = dict()
        role_type = self.soup.find_all('h4', class_="h2 hero-detail-role-name")[0].text
        overview['role_type'] = role_type
    
        difficulty = self.soup.find_all('div', class_="hero-detail-difficulty")[0].find_all('span')
        overview['difficulty'] = len(difficulty)
    
        hero_detail_description = self.soup.find_all('p', class_="hero-detail-description")[0].text
        overview['detail_description'] = hero_detail_description
    
        ability_details_model = list()
        hero_ability_details = self.soup.find_all('div', class_="hero-detail-wrapper m-same-pad")[0].find_all('div', class_='hero-ability')
        for hero_ability_detail in hero_ability_details:
            ability_detail_model = dict()
            ability_name = hero_ability_detail.find_all('h4', class_='h5')[0].text
            ability_detail = hero_ability_detail.find_all('p')[0].text
            ability_detail_model['ability_name'] = ability_name
            ability_detail_model['ability_detail'] = ability_detail
            ability_details_model.append(ability_detail_model)
        overview['ability_details'] = ability_details_model
        return overview
 
 
    def get_bio(self):
        """
        英雄的简历
        全称 职业 行动基地 隶属
        """
        result = list()
        bio_titles = ['affilaiation', 'base', 'occupation', 'name']
        hero_bio = self.soup.find_all('ul', class_='hero-bio')[0].find_all('li')
        for item in hero_bio:
            bio_model = dict()
            bio = item.find('span', class_='hero-bio-copy').text
            bio_title = bio_titles.pop()
            # TODO(luca): 正则分割：后字符串
            bio_model[bio_title] = bio
            result.append(bio_model)
        return result
    
 
 
    def get_detail_title(self):
        """
        英雄的口头禅
        """
        return self.soup.find('p', class_='h4 hero-detail-title').text
 
 
    def get_bio_backstory(self):
        """
        英雄的背景故事
        """
        bio_backstory = self.soup.find('div', class_='hero-bio-backstory pad-sm').find_all('p')
        backstory_res = ''
        for item in bio_backstory:
            backstory_res = backstory_res + item.text + '</br>'
        return backstory_res
 
 
    """
    Hero Builder
    """
    def get_hero(self):
        self.hero_model['hero_name'] = self.get_name()
        self.hero_model['ability'] = self.get_abilities()
        self.hero_model['overview'] = self.get_overview()
        self.hero_model['bio'] = self.get_bio()
        self.hero_model['detail_title'] = self.get_detail_title()
        self.hero_model['bio_backstory'] = self.get_bio_backstory()
        return self.hero_model
 
 
if __name__ == '__main__':
    hero_name = 'doomfist'
    hero = HeroInterpreter(hero_name)
    print(hero.get_abilities())