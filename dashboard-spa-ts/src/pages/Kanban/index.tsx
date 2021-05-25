import React from "react";
import { Row, Col, Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import { EllipsisOutlined } from '@ant-design/icons';
import { StatisticCard } from '@ant-design/pro-card';
import {
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
} from './mock';
import PlayerStatisticCard from "../../components/PlayerStatisticCard";
import HeroAnalysisPanel from "../../components/HeroAnalysisPanel";

const { Statistic } = StatisticCard;

function Kanban() {
    return (
        <div>
            <Row gutter={[8, 8]}>

                <Col span={24}>
                    <PlayerStatisticCard
                        playerName={"冷酷男孩#5205"}
                        playerLevel={908}
                        bountyLevel={2}
                        totalWins={1712}
                    />
                </Col>

                <Col xs={24} md={6} sm={24}>
                    <Card style={{ height: 350, overflow: "hidden" }}>
                      <StatisticCard
                          title="整体流量评分"
                          extra={<EllipsisOutlined />}
                          statistic={{
                            value: 86.2,
                            suffix: '分',
                            description: <Statistic title="排名前" value="20%" />,
                          }}
                          chart={
                            <img
                              src="https://gw.alipayobjects.com/zos/alicdn/PmKfn4qvD/mubiaowancheng-lan.svg"
                              width="100%"
                              alt="进度条"
                            />
                          }
                          footer={
                            <>
                              <Statistic value={15.1} title="累计注册数" suffix="万" layout="horizontal" />
                              <Statistic value={15.1} title="本月注册数" suffix="万" layout="horizontal" />
                              <Statistic value={15.1} title="本月注册数" suffix="万" layout="horizontal" />
                            </>
                          }
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} sm={24}>
                    <Card>
                      <ReactECharts
                        style={{ overflow: 'hidden' }}
                        option={getPieOption()}
                      />
                    </Card>
                </Col>
                <Col xs={24} md={6} sm={24}>
                    <Card>
                      <ReactECharts
                        style={{ overflow: 'hidden' }}
                        option={getPieOption()}
                      />
                    </Card>
                </Col>

                <Col span={24}>
                    <Card>
                      <ReactECharts
                        style={{ overflow: 'hidden' }}
                        option={getRadarOption()}
                      />
                    </Card>
                </Col>

                <Col span={24}>
                    <HeroAnalysisPanel />
                </Col>

                <Col xs={24} md={12} sm={24}>
                    <Card>
                        <ReactECharts
                            style={{ overflow: 'hidden' }}
                            option={getLineOption()}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} sm={24}>
                    <Card>
                        <ReactECharts
                            style={{ overflow: 'hidden' }}
                            option={getBarOption()}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} sm={24}>
                    <Card>
                        <ReactECharts
                            style={{ overflow: 'hidden' }}
                            option={getPieOption()}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} sm={24}>
                    <Card>
                        <ReactECharts
                            style={{ overflow: 'hidden' }}
                            option={getLineOption()}
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
            </Row>
        </div>
    )
}

export default Kanban