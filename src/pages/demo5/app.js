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
// import './static/iconfont.css'
// import './static/style/main.scss'
import Header from './components/Header';
import Tabbar from './components/Tabbar';
const Home = asyncComponent(() => import("./pages/home"));
const Classify = asyncComponent(() => import("./pages/classify"));
const Car = asyncComponent(() => import("./pages/car"));
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
                        <Route path={`${this.props.match.path}/classify`} component={Classify} />
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