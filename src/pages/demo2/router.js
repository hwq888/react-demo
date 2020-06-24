import React, { Component } from 'react';
import {
    HashRouter,
    // NavLink,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import asyncComponent from './utils/asyncComponent';
import './static/iconfont.css'
import './static/style/main.scss'
const App = asyncComponent(() => import("./app"));

// const Home = asyncComponent(() => import("./pages/home"));
// const Car = asyncComponent(() => import("./pages/car"));
// const Ctgr = asyncComponent(() => import("./pages/ctgr"));
// const User = asyncComponent(() => import("./pages/user"));
const Login = asyncComponent(() => import("./pages/login"));

class Demo2 extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/app" component={App} />
                    {/*<Route path="/ctgr" component={Ctgr} />*/}
                    {/*<Route path="/car" component={Car} />*/}
                    {/*<Route path="/user" component={User} />*/}
                    <Route path="/login" component={Login} />
                    <Redirect exact strict from="/" to="/app/home" />
                </Switch>
            </HashRouter>
        )
    }
}

export default Demo2;
