import React, {useEffect, useState} from "react";
import {Row, Col, Card, Spin} from 'antd';
import ReactECharts from 'echarts-for-react';
import {EllipsisOutlined} from '@ant-design/icons';
import {StatisticCard} from '@ant-design/pro-card';
import {
    getPieOption,
    getBarOption,
    getLineOption,
    getDoubleLineOption,
    getRadarOption,
    getHeroWinsBar
} from './mock';
import PlayerStatisticCard from "../../components/PlayerStatisticCard";
import HeroAnalysisPanel from "../../components/HeroAnalysisPanel";
import axios from "axios";

const {Statistic} = StatisticCard;

function Kanban() {
    const [playerInfo, setPlayerInfo] = useState<any | undefined>(undefined);
    const [top5HeroGameTime, setTop5HeroGameTime] = useState<any | undefined>(undefined);

    useEffect(() => {
        axios.get('/player-info')
            .then(data => {
                const { playerInfo } = data.data.data;
                setPlayerInfo(playerInfo);
            })
        axios.get('/get_top5_heroes_game_time')
            .then(data => {
                let chartData = data.data.data;
                chartData.formatter = function (data: any) {
                    return `${data.marker} ${data.name} ${data.value}小时`
                }
                setTop5HeroGameTime(chartData);
                console.log(!top5HeroGameTime)
            })
    }, []);

    return (
        <div>
            <Row gutter={[8, 8]}>

                {/*1 玩家基本信息*/}
                <Col span={24}>
                    <PlayerStatisticCard
                        playerName={playerInfo?.displayName.value}
                        portraitAvatar={playerInfo?.portraitAvatar.value}
                        playerLevel={playerInfo?.level.value}
                        bountyLevel={playerInfo?.endorsement.value.level}
                        totalWins={playerInfo?.gameWon.value}
                    />
                </Col>

                {/*2 英雄游戏时间*/}
                <Col xs={24} md={4} sm={24}>
                    <StatisticCard
                        style={{height: 350, overflow: "hidden"}}
                        title="天梯排名"
                        extra={<EllipsisOutlined/>}
                        statistic={{
                            value: 4196,
                            description: <Statistic title="排名前" value="20%"/>,
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
                                <Statistic value={32} title="场均消灭数" layout="horizontal"/>
                                <Statistic value={4210} title="场均伤害量" layout="horizontal"/>
                                <Statistic value={2031} title="场均治疗量" layout="horizontal"/>
                            </>
                        }
                    />
                </Col>
                <Col xs={24} md={12} sm={24}>
                    <Card>
                        <Spin spinning={!top5HeroGameTime}>
                            <ReactECharts
                                style={{overflow: 'hidden'}}
                                option={top5HeroGameTime || {}}
                            />
                        </Spin>
                    </Card>
                </Col>
                <Col xs={24} md={8} sm={24}>
                    <Card>
                        <ReactECharts
                            style={{overflow: 'auto'}}
                            option={getRadarOption()}
                        />
                    </Card>
                </Col>

                <Col span={24}>
                    <Card>
                        <ReactECharts
                            style={{height: 450, overflow: "hidden"}}
                            option={getHeroWinsBar()}
                        />
                    </Card>
                </Col>

                <Col span={24}>
                    <HeroAnalysisPanel/>
                </Col>

                <Col xs={24} md={12} sm={24}>
                    <Card>
                        <ReactECharts
                            style={{overflow: 'hidden'}}
                            option={getLineOption()}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} sm={24}>
                    <Card>
                        <ReactECharts
                            style={{overflow: 'hidden'}}
                            option={getBarOption()}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} sm={24}>
                    <Card>
                        <ReactECharts
                            style={{overflow: 'hidden'}}
                            option={getPieOption()}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={12} sm={24}>
                    <Card>
                        <ReactECharts
                            style={{overflow: 'hidden'}}
                            option={getLineOption()}
                        />
                    </Card>
                </Col>

                <Col span={24}>
                    <Card>
                        <ReactECharts
                            style={{overflow: 'hidden'}}
                            option={getDoubleLineOption()}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Kanban