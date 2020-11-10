
import Login from './pages/Login';
import Layout from './pages/Layout';
import Home from './pages/Home';
import SearchBlog from './pages/SearchBlog';
import UserManage from './pages/UserManage';
import PersonCenter from './pages/PersonCenter';

import { Route, HashRouter, Redirect } from 'react-router-dom';

const router =
  <HashRouter>
    <Redirect to="/login" from='/' exact />
    <Route path="/login" component={Login}></Route>
    <Route path="/layout" component={Layout}></Route>
    <Route path="/layout/home" component={Home}></Route>
    <Route path="/layout/user-manage" component={UserManage}></Route>
    <Route path="/layout/search-blog" component={SearchBlog}></Route>
    <Route path="/layout/person-center" component={PersonCenter}></Route>
  </HashRouter>

export default router