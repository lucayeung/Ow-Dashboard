import * as echarts from 'echarts'
import $ from "jquery"

/**
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
*/
export default class BarChartCard {
    constructor(dataset) {
        this.chartId = dataset.chartId
        this.title = dataset.title
        this.labels = dataset.labels
        this.series = dataset.series
    }

    render() {
        const card = chartTpl =>  `
            <div class="card" style="margin-bottom: 36px;">
                <div class="card-content">
                    <div class="content">
                        ${chartTpl}
                    </div>
                </div>
            </div>
        `
        // TODO(luca): 获取当前文件名称作为图表的ID
        const chartId = 'gameTime'
        const chartTpl = `<div id="${chartId}" style="width: 100%; min-height: 400px"></div>`
        $('#main').append(card(chartTpl))

        const chart = echarts.init(document.getElementById(chartId))
        chart.setOption({
            title: {
                text: this.title
            },
            tooltip: {},
            xAxis: {
                data: this.labels
            },
            yAxis: {},
            series: [{
                name: this.series[0].name,
                type: this.series[0].type,
                data: this.series[0].data
            }]
        })

        // 监听浏览器窗口缩放
        $(window).on('resize', function() {
            chart && chart.resize();
        })
    }
}