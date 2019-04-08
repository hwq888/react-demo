import React, { Component } from 'react';
import {
    HashRouter,
    // NavLink,
    Switch,
    Route
    // Redirect
} from 'react-router-dom';
import asyncComponent from './utils/asyncComponent';
import PrivateRoute from './components/PrivateRoute';
import './static/iconfont.css'
import './static/style/main.scss'
// import Home from './pages/home';
// import Ctgr from './pages/ctgr';
// import Car from './pages/car';
// import User from './pages/user';
// import Tabbar from './components/Tabbar';
import Header from './components/Header';
import Tabbar from './components/Tabbar';
const Home = asyncComponent(() => import("./pages/home"));
const Car = asyncComponent(() => import("./pages/car"));
const Ctgr = asyncComponent(() => import("./pages/ctgr"));
const User = asyncComponent(() => import("./pages/user"));

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <Header title="首页"></Header>
                    </div>
                    <div className="main-container">
                        <Switch>
                        <Route path={`${this.props.match.path}/home`} component={Home} />
                        <Route path={`${this.props.match.path}/ctgr`} component={Ctgr} />
                        <Route path={`${this.props.match.path}/car`} component={Car} />
                        <PrivateRoute path={`${this.props.match.path}/user`} component={User} />
                        {/*<Route path={`${this.props.match.path}/user`} component={User} />*/}
                        {/*<Redirect exact strict from="/" to="/app/home" />*/}
                        </Switch>
                    </div>
                    <div>
                        <Tabbar></Tabbar>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;