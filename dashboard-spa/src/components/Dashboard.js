import React, { useState } from 'react'
import ProCard, { StatisticCard } from '@ant-design/pro-card'
import RcResizeObserver from 'rc-resize-observer'
import ReactECharts from 'echarts-for-react'
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
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
    render: tags => (
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
    render: (text, record) => (
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

const { Statistic } = StatisticCard;

export default function Dashboard() {
  const [responsive, setResponsive] = useState(false);

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
          value: 1548,
          name: "Bananas"
        }]
      }]
    }  
  }

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 640);
      }}
    >
      <ProCard
        title="数据概览"
        extra="2019年9月28日 星期五"
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
                  description: <Statistic title="较本月平均流量" value="8.04%" trend="down" />,
                }}
              />
              <StatisticCard
                statistic={{
                  title: '本月累计流量',
                  value: 234,
                  description: <Statistic title="月同比" value="8.04%" trend="up" />,
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
            title="流量走势"
            chart={
              <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getLineOption()}
              />
            }
          />
        </ProCard>
        <StatisticCard
          title="流量占用情况"
          chart={
            <React.Fragment>
              <ReactECharts
                style={{ overflow: 'hidden' }}
                option={getPieOption()}
              />
              <Table columns={columns} dataSource={data} />
            </React.Fragment>
          }
        />
      </ProCard>
    </RcResizeObserver>
  );
};