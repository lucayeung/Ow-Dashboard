import React, {useState} from 'react';
import {StatisticCard} from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';
import '@ant-design/pro-card/dist/card.css';

const imgStyle = {
    display: 'block',
    width: 42,
    height: 42,
};

interface Props {
    playerName: string;
    playerLevel: number;
    bountyLevel: number;
    totalWins: number;
}

export default ({
    playerName,
    playerLevel,
    bountyLevel,
    totalWins
}: Props) => {
    const [responsive, setResponsive] = useState(false);

    return (
        <RcResizeObserver
            key="resize-observer"
            onResize={(offset) => {
                setResponsive(offset.width < 596);
            }}
        >
            <StatisticCard.Group direction={responsive ? 'column' : 'row'}>
                <StatisticCard
                    statistic={{
                        title: '玩家名称',
                        value: playerName,
                        icon: (
                            <img
                                style={imgStyle}
                                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                                alt="icon"
                            />
                        ),
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: '玩家等级',
                        value: playerLevel,
                        icon: (
                            <img
                                style={imgStyle}
                                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                                alt="icon"
                            />
                        ),
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: '悬赏等级',
                        value: bountyLevel,
                        icon: (
                            <img
                                style={imgStyle}
                                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                                alt="icon"
                            />
                        ),
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: '总胜场',
                        value: totalWins,
                        icon: (
                            <img
                                style={imgStyle}
                                src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                                alt="icon"
                            />
                        ),
                    }}
                />
            </StatisticCard.Group>
        </RcResizeObserver>
    );
};