import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';
import '../static/iconfont.css'
import '../static/style/main.scss'
const Home = asyncComponent(() => import("../pages/home"));
const Car = asyncComponent(() => import("../pages/car"));
const Ctgr = asyncComponent(() => import("../pages/ctgr"));
const User = asyncComponent(() => import("../pages/user"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/car" component={Car} />
          <Route path="/ctgr" component={Ctgr} />
          <Route path="/user" component={User} />
          <Redirect to="/home" />
        </Switch>
      </HashRouter>
    )
  }
}
