# -*- coding: utf-8 -*-

class ChartType:
    # 柱状图
    BAR = 'bar'
    # 饼图
    PIE = 'pie'

    def __init__(self):
        pass


class BarChart:
    """柱状图

    数据模型：
    option = {
        tooltip: {},
        legend: {},
        xAxis: {
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {},
        series: [{
            name: "Sale",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20, 4]
        }]
    }

    参考：https://echarts.apache.org/zh/option.html#series-bar
    """

    def __init__(self, chart_id, title='未命名的饼图'):
        self.chart_id = chart_id
        self.title = title

    
    def set_x_axis(self, x_axis, series):
        self.x_axis = dict()
        self.x_axis['data'] = x_axis

        self.series = list()
        if series:
            self.append_series(series)


    def append_series(self, series):
        if not isinstance(self.series, list):
            raise Exception('请先初始化X轴')
        for per_series in series:
            self.series.append({
                'type': ChartType.BAR,
                'name': per_series['name'],
                'data': per_series['data']
            })


    def render(self):
        return {
            'chartId': self.chart_id,
            'title': self.title,
            'tooltip': {},
            'legend': {},
            'xAxis': self.x_axis,
            'yAxis': {},
            'series': self.series
        }


class PieChart:
    """饼图

    数据模型：
    option = {
        legend: {
            orient: "vertical",
            left: "left",
            data: ["Apple", "Pineapples","Bananas"]
        },
        series: [{
            type: "pie",
            data: [{
                value: 335,
                name: "Apple"
            },{
                value: 234,
                name: "Pineapples"
            },{
                value: 1548,
                name: "Bananas"
            }]
        }]
    }

    参考：https://echarts.apache.org/zh/option.html#series-pie
    """
    
    def __init__(self, chart_id, title='未命名的饼图'):
        self.chart_id = chart_id
        self.title = title


    def set_legend(self, legend, series):
        self.legend = legend
        
        self.series = list()
        if series:
            self.append_series(series)


    def append_series(self, series):
        if not isinstance(self.series, list):
            raise Exception('请先设置legend')
        
        for per_series in series:
            self.series.append({
                'type': ChartType.PIE,
                'name': per_series['name'],
                'data': per_series['data']
            })

    
    def render(self):
        return {
            'chartId': self.chart_id,
            'title': self.title,
            'legend': self.legend,
            'series': self.series
        }

