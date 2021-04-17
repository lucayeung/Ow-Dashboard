import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'antd/dist/antd.css';
import '@ant-design/pro-card/dist/card.css';

import BigScreen from "./pages/BigScreen";

ReactDOM.render(
  <React.StrictMode>
    <BigScreen />
  </React.StrictMode>,
  document.getElementById('root')
);
