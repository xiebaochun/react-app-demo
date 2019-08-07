import React from 'react'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'
const { SubMenu } = Menu

class Sider extends React.Component {
	state = {
    collapsed: true,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.toggleCollapsed} style={{display: 'none', marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Link component="span" to="/">
            	<Icon type="home" />
            	<span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
          	<Link component="span" to="/login">
            	<Icon type="user" />
            	<span>Login</span>
            </Link>   
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Test</span>
              </span>
            }
          >
            <Menu.Item key="5">
            	<Link component="span" to="/test/form">form</Link>
            </Menu.Item>
            <Menu.Item key="6">
            	<Link component="span" to="/test/demo">demo</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sider