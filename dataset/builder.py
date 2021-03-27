import json
import os


class DatasetBuilder:
    """
    提供图表数据

    dataset的数据结构：
    {
        chartId: 'gameTime',
        title: '游戏时间',
        labels: [],
        series: [
            {
                name: '游戏时间',
                type: 'bar',
                data: []
            }
        ]
    }
    """

    def __init__(self):
        # 读取文件
        basedir = os.path.abspath(os.path.dirname(__file__))
        game_data_file_path = os.path.join(basedir, 'static/json/game_data.json')
        profile_file_path = os.path.join(basedir, 'static/json/profile.json')
        with open(game_data_file_path) as f_game_data:
            game_data = json.load(f_game_data)
        with open(profile_file_path) as f_profile:
            profile = json.load(f_profile)

        # 挂载数据源
        self.__heroes_map = game_data['heroesMap']
        self.__hero_comparison = game_data['heroComparison']
        data = profile['data']
        career_stats = data['careerStats']
        unranked = career_stats['unranked']
        self.__stats = unranked['stats']

        # 初始化核心对象
        self.__init_hero_list()
        self.__init_hero_profile()

        # 关闭资源
        f_game_data.close()
        f_profile.close()

    def __init_hero_profile(self):
        """初始化玩家的门面英雄基本信息"""
        for hero in self.__heroes_list:
            hero_id = hero['id']
            hero_comparison_list = hero['comparison_list']
            if hero_id not in self.__stats:
                continue
            hero_comparison_data_map = self.__stats[hero_id]
            for per_hero_comparison in hero_comparison_list:
                comparison_id = per_hero_comparison['id']
                if comparison_id not in hero_comparison_data_map:
                    # 对于玩家玩得少的英雄，官方没有统计这些英雄的数据
                    # 因为这些数据都是数值类型，这里先初始为0
                    per_hero_comparison['value'] = 0
                    continue
                per_hero_comparison['value'] = hero_comparison_data_map[comparison_id]

    def __init_hero_list(self):
        """初始化英雄列表"""
        self.__heroes_list = list()
        for hero_id, hero in self.__heroes_map.items():
            self.__heroes_list.append(hero)

        # 将游戏时间、胜率等信息存储到英雄中
        for hero in self.__heroes_list:
            for per_hero_comparison in self.__hero_comparison:
                comparison_id = per_hero_comparison['id']
                comparison_name = per_hero_comparison['name']
                if 'comparison_list' not in hero:
                    hero['comparison_list'] = list()
                hero['comparison_list'].append({
                    'id': comparison_id,
                    'name': comparison_name
                })

    def heroes_game_time(self):
        dataset = {
            'chartId': 'heroesGameTime',
            'title': '每个英雄游戏时间的比率',
            'labels': [],
            'series': []
        }
        # FIXME(luca): 抽取常量
        chart_type = 'bar'
        hero_game_time_id = '0x0860000000000021'

        hero_game_time_data = []
        for hero in self.__heroes_list:
            hero_name = hero['displayName']
            dataset['labels'].append(hero_name)

            hero_comparison_list = hero['comparison_list']
            for per_hero_comparison in hero_comparison_list:
                if hero_game_time_id == per_hero_comparison['id']:
                    if 'value' not in per_hero_comparison:
                        value = 0
                    else:
                        value = per_hero_comparison['value']
                    # 秒换算为小时
                    game_time_hours = round((value / 60) / 60)
                    hero_game_time_data.append(game_time_hours)
        series = {'name': '游戏时间（单位：小时）', 'data': hero_game_time_data, 'type': chart_type}
        dataset['series'].append(series)
        # TODO(luca): 内存间缓存
        return dataset
