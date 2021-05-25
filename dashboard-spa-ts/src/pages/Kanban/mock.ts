import data from './life-expectancy-table.json'

function getPieOption() {
    return {
        legend: {
            orient: "vertical",
            left: "left",
            data: ["Apple", "Grapes", "Pineapples", "Oranges", "Bananas"]
        },
        series: [{
            type: "pie",
            data: [{
                value: 335,
                name: "Apple"
            }, {
                value: 310,
                name: "Grapes"
            }, {
                value: 234,
                name: "Pineapples"
            }, {
                value: 135,
                name: "Oranges"
            }, {
                value: 148,
                name: "Bananas"
            }]
        }]
    }
}

function getBarOption() {
    return {
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
}

function getLineOption() {
    return {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {},
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line"
      }]
    }
  }

function getMultipLineOption() {
return {
  legend: {},
  tooltip: {},
  dataset: {
      source: [
          ['product', '2015', '2016', '2017'],
          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1]
      ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
      {type: 'bar'},
      {type: 'bar'},
      {type: 'bar'}
  ]
}
}

function getShadowLineOption() {
return {
    title: {
      text: '堆叠区域图'
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          label: {
              backgroundColor: '#6a7985'
          }
      }
  },
  legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  toolbox: {
      feature: {
          saveAsImage: {}
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: [
      {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
              focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
              focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
              focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          emphasis: {
              focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
              show: true,
              position: 'top'
          },
          areaStyle: {},
          emphasis: {
              focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
  ]
}
}

function getDoubleLineOption() {
return {
  legend: {},
  tooltip: {},
  dataset: {
      source: [
          ['product', '2012', '2013', '2014', '2015'],
          ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
          ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
          ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
      ]
  },
  xAxis: [
      {type: 'category', gridIndex: 0},
      {type: 'category', gridIndex: 1}
  ],
  yAxis: [
      {gridIndex: 0},
      {gridIndex: 1}
  ],
  grid: [
      {bottom: '55%'},
      {top: '55%'}
  ],
  series: [
      // These series are in the first grid.
      {type: 'bar', seriesLayoutBy: 'row'},
      {type: 'bar', seriesLayoutBy: 'row'},
      {type: 'bar', seriesLayoutBy: 'row'},
      // These series are in the second grid.
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1},
      {type: 'bar', xAxisIndex: 1, yAxisIndex: 1}
  ]
}
}

function getGlobalOption() {
const ROOT_PATH = 'https://echarts.apache.org/examples'
return {
  backgroundColor: '#000',
  globe: {
    baseTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
    heightTexture: ROOT_PATH + "/data-gl/asset/world.topo.bathy.200401.jpg",
    displacementScale: 0.04,
    shading: 'realistic',
    environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
    realisticMaterial: {
      roughness: 0.9
    },
    postEffect: {
      enable: true
    },
    light: {
      main: {
        intensity: 5,
        shadow: true
      },
      ambientCubemap: {
        texture: ROOT_PATH + '/data-gl/asset/pisa.hdr',
        diffuseIntensity: 0.2
      }
    }
  }
}
}

function getCombineOption() {
return {
  series: [{
      type: 'gauge',
      progress: {
          show: true,
          width: 18
      },
      axisLine: {
          lineStyle: {
              width: 18
          }
      },
      axisTick: {
          show: false
      },
      splitLine: {
          length: 15,
          lineStyle: {
              width: 2,
              color: '#999'
          }
      },
      axisLabel: {
          distance: 25,
          color: '#999',
          fontSize: 20
      },
      anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
              borderWidth: 10
          }
      },
      title: {
          show: false
      },
      detail: {
          valueAnimation: true,
          fontSize: 80,
          offsetCenter: [0, '70%']
      },
      data: [{
          value: 70
      }]
  }]
}
}

function getCombineV2Option() {
return {
  title: {
      text: '漏斗图',
      subtext: '纯属虚构'
  },
  tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
      feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
      }
  },
  legend: {
      data: ['展现','点击','访问','咨询','订单']
  },

  series: [
      {
          name:'漏斗图',
          type:'funnel',
          left: '10%',
          top: 60,
          //x2: 80,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
              show: true,
              position: 'inside'
          },
          labelLine: {
              length: 10,
              lineStyle: {
                  width: 1,
                  type: 'solid'
              }
          },
          itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
          },
          emphasis: {
              label: {
                  fontSize: 20
              }
          },
          data: [
              {value: 60, name: '访问'},
              {value: 40, name: '咨询'},
              {value: 20, name: '订单'},
              {value: 80, name: '点击'},
              {value: 100, name: '展现'}
          ]
      }
  ]
}
}

// cannot use
function scatter3dDataset() {
    const symbolSize = 2.5
    return {
        grid3D: {},
        xAxis3D: {
            type: 'category'
        },
        yAxis3D: {},
        zAxis3D: {},
        dataset: {
            dimensions: [
                'Income',
                'Life Expectancy',
                'Population',
                'Country',
                {name: 'Year', type: 'ordinal'}
            ],
            source: data
        },
        series: [
            {
                type: 'scatter3D',
                symbolSize: symbolSize,
                encode: {
                    x: 'Country',
                    y: 'Life Expectancy',
                    z: 'Income',
                    tooltip: [0, 1, 2, 3, 4]
                }
            }
        ]
    }
}

function chinaMap() {
    var data = [
     {name: '海门', value: 9},
     {name: '鄂尔多斯', value: 12},
     {name: '招远', value: 12},
     {name: '舟山', value: 12},
     {name: '齐齐哈尔', value: 14},
     {name: '盐城', value: 15},
     {name: '赤峰', value: 16},
     {name: '青岛', value: 18},
     {name: '乳山', value: 18},
     {name: '金昌', value: 19},
     {name: '泉州', value: 21},
     {name: '莱西', value: 21},
     {name: '日照', value: 21},
     {name: '胶南', value: 22},
     {name: '南通', value: 23},
     {name: '拉萨', value: 24},
     {name: '云浮', value: 24},
     {name: '梅州', value: 25},
     {name: '文登', value: 25},
     {name: '上海', value: 25},
     {name: '攀枝花', value: 25},
     {name: '威海', value: 25},
     {name: '承德', value: 25},
     {name: '厦门', value: 26},
     {name: '汕尾', value: 26},
     {name: '潮州', value: 26},
     {name: '丹东', value: 27},
     {name: '太仓', value: 27},
     {name: '曲靖', value: 27},
     {name: '烟台', value: 28},
     {name: '福州', value: 29},
     {name: '瓦房店', value: 30},
     {name: '即墨', value: 30},
     {name: '抚顺', value: 31},
     {name: '玉溪', value: 31},
     {name: '张家口', value: 31},
     {name: '阳泉', value: 31},
     {name: '莱州', value: 32},
     {name: '湖州', value: 32},
     {name: '汕头', value: 32},
     {name: '昆山', value: 33},
     {name: '宁波', value: 33},
     {name: '湛江', value: 33},
     {name: '揭阳', value: 34},
     {name: '荣成', value: 34},
     {name: '连云港', value: 35},
     {name: '葫芦岛', value: 35},
     {name: '常熟', value: 36},
     {name: '东莞', value: 36},
     {name: '河源', value: 36},
     {name: '淮安', value: 36},
     {name: '泰州', value: 36},
     {name: '南宁', value: 37},
     {name: '营口', value: 37},
     {name: '惠州', value: 37},
     {name: '江阴', value: 37},
     {name: '蓬莱', value: 37},
     {name: '韶关', value: 38},
     {name: '嘉峪关', value: 38},
     {name: '广州', value: 38},
     {name: '延安', value: 38},
     {name: '太原', value: 39},
     {name: '清远', value: 39},
     {name: '中山', value: 39},
     {name: '昆明', value: 39},
     {name: '寿光', value: 40},
     {name: '盘锦', value: 40},
     {name: '长治', value: 41},
     {name: '深圳', value: 41},
     {name: '珠海', value: 42},
     {name: '宿迁', value: 43},
     {name: '咸阳', value: 43},
     {name: '铜川', value: 44},
     {name: '平度', value: 44},
     {name: '佛山', value: 44},
     {name: '海口', value: 44},
     {name: '江门', value: 45},
     {name: '章丘', value: 45},
     {name: '肇庆', value: 46},
     {name: '大连', value: 47},
     {name: '临汾', value: 47},
     {name: '吴江', value: 47},
     {name: '石嘴山', value: 49},
     {name: '沈阳', value: 50},
     {name: '苏州', value: 50},
     {name: '茂名', value: 50},
     {name: '嘉兴', value: 51},
     {name: '长春', value: 51},
     {name: '胶州', value: 52},
     {name: '银川', value: 52},
     {name: '张家港', value: 52},
     {name: '三门峡', value: 53},
     {name: '锦州', value: 54},
     {name: '南昌', value: 54},
     {name: '柳州', value: 54},
     {name: '三亚', value: 54},
     {name: '自贡', value: 56},
     {name: '吉林', value: 56},
     {name: '阳江', value: 57},
     {name: '泸州', value: 57},
     {name: '西宁', value: 57},
     {name: '宜宾', value: 58},
     {name: '呼和浩特', value: 58},
     {name: '成都', value: 58},
     {name: '大同', value: 58},
     {name: '镇江', value: 59},
     {name: '桂林', value: 59},
     {name: '张家界', value: 59},
     {name: '宜兴', value: 59},
     {name: '北海', value: 60},
     {name: '西安', value: 61},
     {name: '金坛', value: 62},
     {name: '东营', value: 62},
     {name: '牡丹江', value: 63},
     {name: '遵义', value: 63},
     {name: '绍兴', value: 63},
     {name: '扬州', value: 64},
     {name: '常州', value: 64},
     {name: '潍坊', value: 65},
     {name: '重庆', value: 66},
     {name: '台州', value: 67},
     {name: '南京', value: 67},
     {name: '滨州', value: 70},
     {name: '贵阳', value: 71},
     {name: '无锡', value: 71},
     {name: '本溪', value: 71},
     {name: '克拉玛依', value: 72},
     {name: '渭南', value: 72},
     {name: '马鞍山', value: 72},
     {name: '宝鸡', value: 72},
     {name: '焦作', value: 75},
     {name: '句容', value: 75},
     {name: '北京', value: 79},
     {name: '徐州', value: 79},
     {name: '衡水', value: 80},
     {name: '包头', value: 80},
     {name: '绵阳', value: 80},
     {name: '乌鲁木齐', value: 84},
     {name: '枣庄', value: 84},
     {name: '杭州', value: 84},
     {name: '淄博', value: 85},
     {name: '鞍山', value: 86},
     {name: '溧阳', value: 86},
     {name: '库尔勒', value: 86},
     {name: '安阳', value: 90},
     {name: '开封', value: 90},
     {name: '济南', value: 92},
     {name: '德阳', value: 93},
     {name: '温州', value: 95},
     {name: '九江', value: 96},
     {name: '邯郸', value: 98},
     {name: '临安', value: 99},
     {name: '兰州', value: 99},
     {name: '沧州', value: 100},
     {name: '临沂', value: 103},
     {name: '南充', value: 104},
     {name: '天津', value: 105},
     {name: '富阳', value: 106},
     {name: '泰安', value: 112},
     {name: '诸暨', value: 112},
     {name: '郑州', value: 113},
     {name: '哈尔滨', value: 114},
     {name: '聊城', value: 116},
     {name: '芜湖', value: 117},
     {name: '唐山', value: 119},
     {name: '平顶山', value: 119},
     {name: '邢台', value: 119},
     {name: '德州', value: 120},
     {name: '济宁', value: 120},
     {name: '荆州', value: 127},
     {name: '宜昌', value: 130},
     {name: '义乌', value: 132},
     {name: '丽水', value: 133},
     {name: '洛阳', value: 134},
     {name: '秦皇岛', value: 136},
     {name: '株洲', value: 143},
     {name: '石家庄', value: 147},
     {name: '莱芜', value: 148},
     {name: '常德', value: 152},
     {name: '保定', value: 153},
     {name: '湘潭', value: 154},
     {name: '金华', value: 157},
     {name: '岳阳', value: 169},
     {name: '长沙', value: 175},
     {name: '衢州', value: 177},
     {name: '廊坊', value: 193},
     {name: '菏泽', value: 194},
     {name: '合肥', value: 229},
     {name: '武汉', value: 273},
     {name: '大庆', value: 279}
];
    var geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '招远':[120.38,37.35],
    '舟山':[122.207216,29.985295],
    '齐齐哈尔':[123.97,47.33],
    '盐城':[120.13,33.38],
    '赤峰':[118.87,42.28],
    '青岛':[120.33,36.07],
    '乳山':[121.52,36.89],
    '金昌':[102.188043,38.520089],
    '泉州':[118.58,24.93],
    '莱西':[120.53,36.86],
    '日照':[119.46,35.42],
    '胶南':[119.97,35.88],
    '南通':[121.05,32.08],
    '拉萨':[91.11,29.97],
    '云浮':[112.02,22.93],
    '梅州':[116.1,24.55],
    '文登':[122.05,37.2],
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '威海':[122.1,37.5],
    '承德':[117.93,40.97],
    '厦门':[118.1,24.46],
    '汕尾':[115.375279,22.786211],
    '潮州':[116.63,23.68],
    '丹东':[124.37,40.13],
    '太仓':[121.1,31.45],
    '曲靖':[103.79,25.51],
    '烟台':[121.39,37.52],
    '福州':[119.3,26.08],
    '瓦房店':[121.979603,39.627114],
    '即墨':[120.45,36.38],
    '抚顺':[123.97,41.97],
    '玉溪':[102.52,24.35],
    '张家口':[114.87,40.82],
    '阳泉':[113.57,37.85],
    '莱州':[119.942327,37.177017],
    '湖州':[120.1,30.86],
    '汕头':[116.69,23.39],
    '昆山':[120.95,31.39],
    '宁波':[121.56,29.86],
    '湛江':[110.359377,21.270708],
    '揭阳':[116.35,23.55],
    '荣成':[122.41,37.16],
    '连云港':[119.16,34.59],
    '葫芦岛':[120.836932,40.711052],
    '常熟':[120.74,31.64],
    '东莞':[113.75,23.04],
    '河源':[114.68,23.73],
    '淮安':[119.15,33.5],
    '泰州':[119.9,32.49],
    '南宁':[108.33,22.84],
    '营口':[122.18,40.65],
    '惠州':[114.4,23.09],
    '江阴':[120.26,31.91],
    '蓬莱':[120.75,37.8],
    '韶关':[113.62,24.84],
    '嘉峪关':[98.289152,39.77313],
    '广州':[113.23,23.16],
    '延安':[109.47,36.6],
    '太原':[112.53,37.87],
    '清远':[113.01,23.7],
    '中山':[113.38,22.52],
    '昆明':[102.73,25.04],
    '寿光':[118.73,36.86],
    '盘锦':[122.070714,41.119997],
    '长治':[113.08,36.18],
    '深圳':[114.07,22.62],
    '珠海':[113.52,22.3],
    '宿迁':[118.3,33.96],
    '咸阳':[108.72,34.36],
    '铜川':[109.11,35.09],
    '平度':[119.97,36.77],
    '佛山':[113.11,23.05],
    '海口':[110.35,20.02],
    '江门':[113.06,22.61],
    '章丘':[117.53,36.72],
    '肇庆':[112.44,23.05],
    '大连':[121.62,38.92],
    '临汾':[111.5,36.08],
    '吴江':[120.63,31.16],
    '石嘴山':[106.39,39.04],
    '沈阳':[123.38,41.8],
    '苏州':[120.62,31.32],
    '茂名':[110.88,21.68],
    '嘉兴':[120.76,30.77],
    '长春':[125.35,43.88],
    '胶州':[120.03336,36.264622],
    '银川':[106.27,38.47],
    '张家港':[120.555821,31.875428],
    '三门峡':[111.19,34.76],
    '锦州':[121.15,41.13],
    '南昌':[115.89,28.68],
    '柳州':[109.4,24.33],
    '三亚':[109.511909,18.252847],
    '自贡':[104.778442,29.33903],
    '吉林':[126.57,43.87],
    '阳江':[111.95,21.85],
    '泸州':[105.39,28.91],
    '西宁':[101.74,36.56],
    '宜宾':[104.56,29.77],
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],
    '大同':[113.3,40.12],
    '镇江':[119.44,32.2],
    '桂林':[110.28,25.29],
    '张家界':[110.479191,29.117096],
    '宜兴':[119.82,31.36],
    '北海':[109.12,21.49],
    '西安':[108.95,34.27],
    '金坛':[119.56,31.74],
    '东营':[118.49,37.46],
    '牡丹江':[129.58,44.6],
    '遵义':[106.9,27.7],
    '绍兴':[120.58,30.01],
    '扬州':[119.42,32.39],
    '常州':[119.95,31.79],
    '潍坊':[119.1,36.62],
    '重庆':[106.54,29.59],
    '台州':[121.420757,28.656386],
    '南京':[118.78,32.04],
    '滨州':[118.03,37.36],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '本溪':[123.73,41.3],
    '克拉玛依':[84.77,45.59],
    '渭南':[109.5,34.52],
    '马鞍山':[118.48,31.56],
    '宝鸡':[107.15,34.38],
    '焦作':[113.21,35.24],
    '句容':[119.16,31.95],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '衡水':[115.72,37.72],
    '包头':[110,40.58],
    '绵阳':[104.73,31.48],
    '乌鲁木齐':[87.68,43.77],
    '枣庄':[117.57,34.86],
    '杭州':[120.19,30.26],
    '淄博':[118.05,36.78],
    '鞍山':[122.85,41.12],
    '溧阳':[119.48,31.43],
    '库尔勒':[86.06,41.68],
    '安阳':[114.35,36.1],
    '开封':[114.35,34.79],
    '济南':[117,36.65],
    '德阳':[104.37,31.13],
    '温州':[120.65,28.01],
    '九江':[115.97,29.71],
    '邯郸':[114.47,36.6],
    '临安':[119.72,30.23],
    '兰州':[103.73,36.03],
    '沧州':[116.83,38.33],
    '临沂':[118.35,35.05],
    '南充':[106.110698,30.837793],
    '天津':[117.2,39.13],
    '富阳':[119.95,30.07],
    '泰安':[117.13,36.18],
    '诸暨':[120.23,29.71],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '聊城':[115.97,36.45],
    '芜湖':[118.38,31.33],
    '唐山':[118.02,39.63],
    '平顶山':[113.29,33.75],
    '邢台':[114.48,37.05],
    '德州':[116.29,37.45],
    '济宁':[116.59,35.38],
    '荆州':[112.239741,30.335165],
    '宜昌':[111.3,30.7],
    '义乌':[120.06,29.32],
    '丽水':[119.92,28.45],
    '洛阳':[112.44,34.7],
    '秦皇岛':[119.57,39.95],
    '株洲':[113.16,27.83],
    '石家庄':[114.48,38.03],
    '莱芜':[117.67,36.19],
    '常德':[111.69,29.05],
    '保定':[115.48,38.85],
    '湘潭':[112.91,27.87],
    '金华':[119.64,29.12],
    '岳阳':[113.09,29.37],
    '长沙':[113,28.21],
    '衢州':[118.88,28.97],
    '廊坊':[116.7,39.53],
    '菏泽':[115.480656,35.23375],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52],
    '大庆':[125.03,46.58]
};

    var convertData = function (data: any) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            // @ts-ignore
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    return {
        title: {
            text: '全国主要城市空气质量 - 百度地图',
            subtext: 'data from PM25.in',
            sublink: 'http://www.pm25.in',
            left: 'center'
        },
        tooltip : {
            trigger: 'item'
        },
        bmap: {
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: true,
            mapStyle: {
                styleJson: [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#f3f3f3'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fdfdfd'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#fefefe'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#d1d1d1'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#999999'
                    }
                }]
            }
        },
        series : [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: convertData(data),
                symbolSize: function (val: any) {
                    return val[2] / 10;
                },
                encode: {
                    value: 2
                },
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'bmap',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val: any) {
                    return val[2] / 10;
                },
                encode: {
                    value: 2
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                },
                zlevel: 1
            }
        ]
    };
}

function getRadarOption() {
    return {
        title: {
            // text: '基础雷达图'
        },
        legend: {
            data: ['消灭', '命中 🎯'],
            orient: "vertical",
            left: 'auto'
        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '销售', max: 6500},
                { name: '管理', max: 16000},
                { name: '信息技术', max: 30000},
                { name: '客服', max: 38000},
                { name: '研发', max: 52000},
                { name: '市场', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            data: [
                {
                    value: [4200, 3000, 20000, 35000, 50000, 18000],
                    name: '消灭'
                },
                {
                    value: [5000, 14000, 28000, 26000, 42000, 21000],
                    name: '命中 🎯'
                }
            ]
        }]
    }
}

export {
    getPieOption,
    getBarOption,
    getLineOption,
    getMultipLineOption,
    getShadowLineOption,
    getDoubleLineOption,
    getGlobalOption,
    getCombineOption,
    getCombineV2Option,
    scatter3dDataset,
    chinaMap,
    getRadarOption
}