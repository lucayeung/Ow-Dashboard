import React from 'react';
import { SmileOutlined, CrownOutlined } from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/kanban',
        name: '看板',
        icon: <SmileOutlined />,
        component: './Kanban',
      },
      {
        path: '/about',
        name: '关于',
        icon: <CrownOutlined />,
        component: './About',
      }
    ],
  }
};