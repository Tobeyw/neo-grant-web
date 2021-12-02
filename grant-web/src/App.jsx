import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import { NeoDemo1 } from './neo/NeoDemo1';

const {
  Header, Content, Footer, Sider,
} = Layout;
function App() {

  const [state, setState] = useState({ menuID: '1' });

  const menuClick = (e) => {
    setState({
      menuID: e.key
    });
  }
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <div className="logo" />
        <Menu onClick={menuClick} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <span className="nav-text">NEO Demo</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          {state.menuID === '1' && <h1>--- NEO Demo ---</h1>}
        </Header>
        <Content style={{ padding: 24, background: '#fff', minHeight: 360 }} >
          {state.menuID === '1' && <NeoDemo1 />}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Demo ©2021 Created by Steven
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
