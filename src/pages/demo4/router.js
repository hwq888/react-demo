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
const Login = asyncComponent(() => import("./pages/login"));
class Demo4 extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/app" component={App} />
                    <Route path='/' exact strict render={()=>(<Redirect to='/app/home' />)}></Route>
                    <Route path="/login" component={Login} />
                    {/* <Redirect exact strict from="/" to="/app/home" /> */}
                </Switch>
            </HashRouter>
        )
    }
}

export default Demo4;
