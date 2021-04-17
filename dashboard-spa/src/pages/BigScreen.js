import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Layout, Menu, Spin } from 'antd';
import ReactECharts from 'echarts-for-react';

import { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import Dashboard from '../components/Dashboard';

import axios from 'axios'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DataTable from '../components/DataTable';

const { Header, Footer, Content } = Layout;

const imgStyle = {
  display: 'block',
  width: 42,
  height: 42,
};


function BigScreen() {
  const [responsive, setResponsive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playerInfo, setPlayerInfo] = useState([]);

  useEffect(() => {
    axios.get('/api/indicatorCard')
      .then(res => res.data)
      .then(data => {
        setPlayerInfo(data.playerInfo)
      })
  }, [])

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

  return (
    <Router>
    <Layout>
      <Header style={{ display: 'flex' }}>
        <Menu 
          theme="dark" 
          mode="horizontal" 
          defaultSelectedKeys={['dashboard']}
        >
          <Menu.Item key="dashboard">
            <Link to="/">数据大屏</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">关于我</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Switch>
        <Route path="/about">
          <div>About Me Page</div>
          <Row gutter={[25, 25]}>
            <Col span={24}>
              <DataTable />
            </Col>
          </Row>
        </Route>
        {/* root path 必须放在最后，否则无法工作！ */}
        <Route path="/">

      <Content style={{ margin: 25 }}>      
        <Row gutter={[25, 25]}>
          <Col span={24}>
            <RcResizeObserver
              key="resize-observer"
              onResize={(offset) => {
                setResponsive(offset.width < 640);
              }}
            >
              <StatisticCard.Group direction={responsive ? 'column' : undefined}>
                {playerInfo.map(info => (
                  <StatisticCard
                    statistic={{
                      title: info.title,
                      value: info.value,
                      icon: (
                        <img
                          style={imgStyle}
                          src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                          alt="icon"
                        />
                      ),
                    }}
                  />
                ))}
              </StatisticCard.Group>
            </RcResizeObserver>
          </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card>
              <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getLineOption()}
              />
            </Card>
          </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card>
              <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getBarOption()} 
              />
            </Card>
          </Col>
          <Col lg={6} md={8} sm={12} xs={24}>
            <Card>
              <Spin spinning={isLoading}>
                <ReactECharts
                  style={{ overflow: 'hidden' }}
                  option={getPieOption()} 
                />
              </Spin>
            </Card>
          </Col>
          <Col lg={6} md={24} sm={12} xs={24}>
            <Card>
              <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getMultipLineOption()} 
              />
            </Card>
          </Col>

          <Col span={24}>
            <Card>
              <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getShadowLineOption()} 
              />
            </Card>
          </Col>

          <Col span={24}>
            <Card>
              {/* <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getGlobalOption()}
              /> */}
              地球
            </Card>
          </Col>

          <Col sm={12} xs={24}>
            <Card>
              <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getCombineV2Option()} 
              />
            </Card>
          </Col>
          <Col sm={12} xs={24}>
            <Card>
              <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getCombineOption()} 
              />
            </Card>
          </Col>

          <Col span={24}>
            <Card>
              <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getDoubleLineOption()} 
              />
            </Card>
          </Col>

          <Col span={24}>
            <Dashboard />
          </Col>
        </Row>
      </Content>
      
        </Route>
      </Switch>

      <Footer>Big Screen 2021 Created by Luca Yeung</Footer>
    </Layout>
    </Router>
  )
}

export default BigScreen