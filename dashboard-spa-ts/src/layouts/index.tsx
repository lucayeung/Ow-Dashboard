import React, { useState } from 'react';
import '@ant-design/pro-layout/dist/layout.css';

import ProLayout from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';

interface BasicLayoutProps {
    children: React.ReactChild;
}

function BasicLayout({
    children
}: BasicLayoutProps) {
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
          {children}
      </ProLayout>
    </div>
  );
}

export default BasicLayout;