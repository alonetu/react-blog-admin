import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import 'antd/dist/antd.css';

import Home from './pages/Home';
import Login from './pages/Login';
import SearchBlog from './pages/SearchBlog';
import UserManage from './pages/UserManage';
import { Route, HashRouter, Redirect } from 'react-router-dom';

const router =
  <HashRouter>
    <Redirect to="/login" from='/' exact />
    <Route path="/home" component={Home}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/home/user-manage" component={UserManage}></Route>
    <Route path="/home/search-blog" component={SearchBlog}></Route>
  </HashRouter>

ReactDOM.render(router, document.getElementById('root'))
