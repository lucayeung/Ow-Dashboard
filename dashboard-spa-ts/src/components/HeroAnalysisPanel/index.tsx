import React, {useState} from 'react';
import ProCard, {StatisticCard} from '@ant-design/pro-card';
import {Select, Table, Tag, Space} from 'antd';
import RcResizeObserver from 'rc-resize-observer';
import {getPieOption, getRadarOption} from "../../pages/Kanban/mock";
import ReactECharts from "echarts-for-react";

const {Option} = Select;
const {Statistic} = StatisticCard;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: any) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: any[]) => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default () => {
    const [responsive, setResponsive] = useState(false);

    return (
        <RcResizeObserver
            key="resize-observer"
            onResize={(offset) => {
                setResponsive(offset.width < 1180);
            }}
        >
            <ProCard
                title="英雄数据"
                extra={
                    <Select defaultValue="all" style={{width: 120}} onChange={value => console.log(value)}>
                        <Option value="all">所有英雄</Option>
                        <Option value="genji">源氏</Option>
                        <Option value="roadhog">路霸</Option>
                        <Option value="法老之鹰">法老之鹰</Option>
                        <Option value="76">士兵76</Option>
                        <Option value="doomfist">末日铁拳</Option>
                    </Select>
                }
                split={responsive ? 'horizontal' : 'vertical'}
                headerBordered
                bordered
            >
                <ProCard split="horizontal">
                    <ProCard split="horizontal">
                        <ProCard split="vertical">
                            <StatisticCard
                                statistic={{
                                    title: '昨日全部流量',
                                    value: 234,
                                    description: <Statistic title="较本月平均流量" value="8.04%" trend="down"/>,
                                }}
                            />
                            <StatisticCard
                                statistic={{
                                    title: '本月累计流量',
                                    value: 234,
                                    description: <Statistic title="月同比" value="8.04%" trend="up"/>,
                                }}
                            />
                        </ProCard>
                        <ProCard split="vertical">
                            <StatisticCard
                                statistic={{
                                    title: '运行中实验',
                                    value: '12/56',
                                    suffix: '个',
                                }}
                            />
                            <StatisticCard
                                statistic={{
                                    title: '历史实验总数',
                                    value: '134',
                                    suffix: '个',
                                }}
                            />
                        </ProCard>
                    </ProCard>
                    <StatisticCard
                        title="雷达占比"
                        chart={
                            <ReactECharts
                                style={{overflow: 'hidden'}}
                                option={getRadarOption()}
                            />
                        }
                    />
                </ProCard>
                <StatisticCard
                    title="流量占用情况"
                    chart={
                        <React.Fragment>
                            <ReactECharts
                                style={{overflow: 'hidden'}}
                                option={getPieOption()}
                            />
                            <Table
                                columns={columns}
                                dataSource={data}
                            />
                        </React.Fragment>
                    }
                />
            </ProCard>
        </RcResizeObserver>
    );
};