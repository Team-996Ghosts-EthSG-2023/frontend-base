import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components"
import {
  DeploymentUnitOutlined,
  CalendarOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CompassOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Layout, Menu, Button } from 'antd';

const { Header, Sider } = Layout;

function getItem(
  label,
  key,
  icon,
  children,
) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Feed', 'feed', <CompassOutlined />),
  getItem('Campaign', 'campaign', <DeploymentUnitOutlined />),
  getItem('Calendar', 'calendar', <CalendarOutlined />),
];


export const RootLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  return (
    <Layout>
      <HeaderStyled>
        <Button type="primary" onClick={() => setCollapsed(!collapsed)} style={MenuButtonStyles}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <DemoLogo/>
        <Gap/>
        <Button 
          shape="circle"
          size="large"
          icon={<Avatar icon={<UserOutlined />} />}
        >
        </Button>
      </HeaderStyled>
      <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu 
            theme="dark" 
            defaultSelectedKeys={['feed']} 
            mode="inline" 
            items={items} 
            onClick={(e) => navigate(`/${e.key ?? ''}`)}
          />
        </Sider>
        <Layout>
          <Outlet/>
        </Layout>
      </Layout>
    </Layout>
  );
};

const MenuButtonStyles = {
  fontSize: '16px', 
  color: '#fff',
  marginLeft: "0.8rem",
  marginRight: "2rem",
  marginBottom: "16",
  marginTop: "0.8rem"
}

const Gap = styled.div`
  width: 80%;
`

const HeaderStyled = styled(Header)`
  padding: 5px;
  display: flex; 
  justify-content: space-between; 
`

const DemoLogo = styled.div`
  width: 100px;
  height: 50px;
  background-color: grey;
  margin: 0 auto;
`



