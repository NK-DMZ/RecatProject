1.安装
yarn add react-router-dom

2.在index.js文件中引入

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>
   ,
  document.getElementById('root')
);

3.建立统一管理路由routes.js

// 该文件专门用于统一管理路由
import Login from "../pages/login";
import User from "../pages/user";
// routes数组中存储着所有的路由配置，每一个路由配置都是一个对象
const routes=[
    {
        path:'/login',
        component:Login
    },
    {
        path:'/user',
        component:User
    }
]
export default routes

4.在app.js中引入
 <Switch>
  {
    routes.map(routeobj=><Route key={routeobj.path}{...routeobj}/>)
  }
  <Redirect to='/login'/>
</Switch>

5.写链接（这是别的项目里面的）
 <ul>
    <li><a href="/AssignDemo">AssignDemo</a></li>
    <li><a href="/AwaitandAsync">AwaitandAsync</a></li>
    <li><a href="/Inputdemo">Inputdemo</a></li>
    <li><a href="/JsonDatause">JsonDatause</a></li>
    <li><a href="/ObjectStatechange">ObjectStatechange</a></li>
    <li><a href="/SetStatedome">SetStatedome</a></li>
    <li><a href="/TableUse">TableUse</a></li>
</ul>