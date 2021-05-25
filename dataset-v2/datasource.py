import json
import os

class Datasource:
    # 游戏时间
    GAME_TIME = '0x0860000000000021'
    # 比赛胜利
    GAME_VICTORY = '0x0860000000000039'
    # 武器命中率
    WEAPON_HIT_RATE = '0x086000000000002F'
    # 单次存活时消灭
    DESTROY_IN_A_SINGLE_SURVIVAL = '0x08600000000003D2'
    # 最佳瞬间消灭
    BEST_MOMENT_TO_DESTROY = '0x0860000000000346'
    # 平均目标攻防消灭
    AVERAGE_TARGET_OFFENSIVE_AND_DEFENSIVE_ELIMINATION = '0x086000000000039C'


    def __init__(self):
        # 读取文件
        basedir = os.path.abspath(os.path.dirname(__file__))
        game_data_file_path = os.path.join(basedir, 'data/game_data.json')
        profile_file_path = os.path.join(basedir, 'data/profile.json')
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
        result = list()
        player_info_table = [
            {'title': '玩家名称', 'key': 'displayName'},
            {'title': '玩家等级', 'key': 'level'},
            {'title': '“天命”英雄', 'key': 'masthead'},
            {'title': '快速游戏总胜场', 'key': 'gameWon'},
        ]
        for item in player_info_table:
            result.append({
                'title': item['title'],
                'value': self.player[item['key']],
            })
        return {
            'playerInfo': result
        }


    def get_heroes_game_time(self):
        """柱状图
        参考：https://echarts.apache.org/zh/option.html#series-bar
        """
        hero_game_time_data = []
        labels = []
        for hero in self.get_heroes_list():
            hero_name = hero['displayName']
            labels.append(hero_name)
            if not 'cps' in hero:
                continue
            cps = hero['cps']
            for per_cps in cps:
                if self.GAME_TIME == per_cps['id']:
                    if 'value' not in per_cps:
                        value = 0
                    else:
                        value = per_cps['value']
                    # 秒换算为小时
                    game_time_hours = round((value / 60) / 60)
                    hero_game_time_data.append(game_time_hours)

        return {
            'chartId': 'heroesGameTime',
            'title': '每个英雄游戏时间的比率',
            'tooltip': {},
            'legend': {},
            'xAxis': {
                'data': labels
            },
            'yAxis': {},
            'series': [
                {
                    'type': 'bar',
                    'name': '游戏时间（单位：小时）',
                    'data': hero_game_time_data
                }
            ]
        }


    def get_heroes_victory(self):
        """玩家比赛胜利前8的英雄的胜场"""
        series_data = []
        for hero in self.get_heroes_list():
            display_name = hero['displayName']

            hero_id = hero['id']
            if hero_id not in self.stats_value:
                print(f'系统暂未统计英雄：{hero["name"]}的数据...')
                continue
            hero_stats = self.stats_value[hero_id]
            res = {
                'name': display_name,
                'data': round(hero_stats[self.GAME_VICTORY]) if self.GAME_VICTORY in hero_stats else 0
            }
            series_data.append(res)
        sorted_series_data = sorted(series_data, key=lambda x: x['data'], reverse=True)
        top_8 = sorted_series_data[:8]
        top_8_legend = list(map(lambda x: x['name'], top_8))

        return {
            'chartId': 'victory',
            'title': 'Top8英雄比赛胜利场次',
            'legend': top_8_legend,
            'series': [
                {
                    'type': 'pie',
                    'name': '比赛胜利场次',
                    'data': top_8
                }
            ]
        }