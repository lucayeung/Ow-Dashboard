import React, { useState } from 'react';
import './App.scss';
import '@ant-design/pro-layout/dist/layout.css';

import ProLayout from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import KanBan from "./pages/Kanban";

function App() {
  const [pathname, setPathname] = useState('/welcome');
  return (
    <div id="app-layout" style={{ height: '100vh' }}>
      <ProLayout
        {...defaultProps}
        fixSiderbar
        location={{ pathname }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) =>
            <a onClick={() => setPathname(item.path || '/welcome')}>{dom}</a>}
      >
          <KanBan />
      </ProLayout>
    </div>
  );
}

export default App;