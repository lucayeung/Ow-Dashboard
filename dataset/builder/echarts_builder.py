from datasource import Datasource, DataKey
from model import PieChart, BarChart

class BarBuilder:
    """柱状图构建器
    
    参考：
    https://echarts.apache.org/zh/option.html#series-bar
    """

    def __init__(self):
        self.ds = Datasource()
        self.key = DataKey()


    def get_heroes_game_time(self):
        result = BarChart('heroesGameTime', '每个英雄游戏时间的比率')

        hero_game_time_data = []
        labels = []
        for hero in self.ds.get_heroes_list():
            hero_name = hero['displayName']
            labels.append(hero_name)

            if not 'cps' in hero:
                continue
            cps = hero['cps']
            for per_cps in cps:
                if self.key.GAME_TIME == per_cps['id']:
                    if 'value' not in per_cps:
                        value = 0
                    else:
                        value = per_cps['value']
                    # 秒换算为小时
                    game_time_hours = round((value / 60) / 60)
                    hero_game_time_data.append(game_time_hours)
        series = [{'name': '游戏时间（单位：小时）', 'data': hero_game_time_data}]
        
        result.set_x_axis(labels, series)
        # TODO(luca): 内存间缓存
        return result.render()


class Piebuilder:
    """饼图构建器

    参考：https://echarts.apache.org/zh/option.html#series-pie
    """

    def __init__(self):
        self.ds = Datasource()
        self.key = DataKey()
 
 
    def get_heroes_victory(self):
        """玩家比赛胜利前8的英雄的胜场"""
        series_data = []
        for hero in self.ds.get_heroes_list():
            display_name = hero['displayName']
 
            hero_id = hero['id']
            if hero_id not in self.ds.stats_value:
                print(f'系统暂未统计英雄：{hero["name"]}的数据...')
                continue
            hero_stats = self.ds.stats_value[hero_id]
            res = {
                'name': display_name,
                'data': round(hero_stats[self.key.GAME_VICTORY]) if self.key.GAME_VICTORY in hero_stats else 0
            }
            series_data.append(res)
        sorted_series_data = sorted(series_data, key=lambda x: x['data'], reverse=True)
        top_8 = sorted_series_data[:8]
        top_8_legend = list(map(lambda x: x['name'], top_8))
        top_8_series = [{'name': '比赛胜利场次', 'data': top_8}]
        result = PieChart('victory', 'Top8英雄比赛胜利场次')
        result.set_legend(top_8_legend, top_8_series)
        return result.render()