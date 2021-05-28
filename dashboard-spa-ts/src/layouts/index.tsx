import React, {useState} from 'react';
import '@ant-design/pro-layout/dist/layout.css';
import {Link, useLocation} from "react-router-dom";

import ProLayout, {DefaultFooter} from '@ant-design/pro-layout';
import defaultProps from './_defaultProps';
import {BackTop} from "antd";
import {GithubOutlined, TwitterOutlined} from '@ant-design/icons';

interface BasicLayoutProps {
    children: React.ReactChild;
}

function BasicLayout({
    children
}: BasicLayoutProps) {
    const location = useLocation();

    return (
        <div id="app-layout" style={{height: '100vh'}}>
            <ProLayout
                {...defaultProps}
                fixSiderbar
                location={{pathname: location.pathname}}
                menuHeaderRender={logo => logo}
                collapsed
                collapsedButtonRender={false}
                menuItemRender={(item, dom) =>
                    <Link to={item.path || '/'}>{dom}</Link>}
                footerRender={() => (
                    <DefaultFooter
                        links={[
                            {
                                key: 'gh', title: (
                                    <GithubOutlined style={{margin: '0 8px'}}/>
                                ), href: 'www.alipay.com'
                            },
                            {
                                key: 'tw', title: (
                                    <TwitterOutlined style={{margin: '0 8px'}}/>
                                ), href: 'www.alipay.com'
                            },
                        ]}
                        copyright="2021 Create by YeungShaohsoung"
                    />
                )}
            >
                {children}
            </ProLayout>
            <BackTop/>
        </div>
    );
}

export default BasicLayout;