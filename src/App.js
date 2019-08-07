import React from 'react';
import './App.css';
import { Layout, Breadcrumb } from 'antd';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import Menu from './common/Sider'
import Home from './pages/Home'
import Login from './pages/login/Login'
import LoginLoading from './pages/login/LoginLoading'
import Test from './pages/test'
import 'antd/dist/antd.css';

import Store from './store'

const { Header, Sider, Content } = Layout

let store = Store({})

class App extends React.Component {
    state = {
        collapsed: true,
      };

      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render() {
        return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Sider onCollapse={this.onCollapse} collapsible collapsed={this.state.collapsed}>
                            <Menu/>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                <Breadcrumb>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                      <a href="">Application Center</a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                      <a href="">Application List</a>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                                  </Breadcrumb>
                            </Header>
                            <Content
                                style={{
                                  margin: '24px 16px',
                                  padding: 24,
                                  background: '#fff',
                                  minHeight: 580,
                                }}
                              >
                                <Switch>
                                    <Route exact path="/login" name="Login Page" component={Login}/>
                                    <Route exact path="/loginLoading" name="Login Loading" component={LoginLoading}/>
                                    <Route path="/test" component={Test}/>
                                    <Route exact path="/" component={Home}/>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </Provider>
        </div>
        )                     
    }
}

export default App;
