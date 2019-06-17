import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import Login from './pages/login/Login'
import LoginLoading from './pages/login/LoginLoading'
import Test from './pages/test'
import 'antd/dist/antd.css';

import Store from './store'

let store = Store({})

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" name="Login Page" component={Login}/>
                    <Route exact path="/loginLoading" name="Login Loading" component={LoginLoading}/>
                    <Route path="/test" component={Test}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
