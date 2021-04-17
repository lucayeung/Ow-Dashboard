# -*- coding: utf-8 -*-
import json
import os

class Datasource:
    """数据源"""

    def __init__(self):
        # 读取文件
        basedir = os.path.abspath(os.path.dirname(__file__))
        game_data_file_path = os.path.join(basedir, 'json/game_data.json')
        profile_file_path = os.path.join(basedir, 'json/profile.json')
        with open(game_data_file_path, encoding='UTF-8') as f_game_data:
            game_data = json.load(f_game_data)
        with open(profile_file_path, encoding='UTF-8') as f_profile:
            profile = json.load(f_profile)
 
        # 挂载数据源
        self.hero_comparison = game_data['heroComparison']
        self.heroes_map = game_data['heroesMap']
        self.player = profile['data']['player']
        self.stats_value = profile['data']['careerStats']['unranked']['stats']
        self.last_update = profile['data']['lastUpdate']
 
        # 关闭资源
        f_game_data.close()
        f_profile.close()
 
 
    def get_heroes_list(self):
        """玩家英雄的门面资料"""
        heroes_list = list(self.heroes_map.values())
        for hero in heroes_list:
            hero_id = hero['id']
            if hero_id not in self.stats_value:
                print(f'系统暂未统计英雄：{hero["displayName"]}的数据...')
                continue
            hero_stats = self.stats_value[hero_id]
 
            # 排面数据：游戏时间、比赛胜利等
            hero_cps = []
            for cp in self.hero_comparison:
                cp_id = cp['id']
                hero_cp = {
                    'id': cp_id,
                    'name': cp['name'],
                    'value': hero_stats[cp_id] if cp_id in hero_stats else 0
                }
                hero_cps.append(hero_cp)
            hero['cps'] = hero_cps
        return heroes_list


    def get_player_info(self):
        """玩家基本信息"""
        # player_info = {
        #     'name': self.player['displayName'],
        #     'level': self.player['level'],
        #     'gameWon': self.player['gameWon'],
        #     'masthead': self.player['masthead']
        # }
        player_info = list()
        player_info.append({ 'title': '玩家名称', 'value': self.player['displayName'] })
        player_info.append({ 'title': '玩家等级', 'value': self.player['level'] })
        player_info.append({ 'title': '“天命”英雄', 'value': self.player['masthead'].title() })
        player_info.append({ 'title': '快速游戏总胜场', 'value': self.player['gameWon'] })
        return {
            'playerInfo': player_info
        }


if __name__ == '__main__':
    ds = Datasource()
    print(ds.get_heroes_list())
    print(ds.get_player_info())
    print(ds.last_update)