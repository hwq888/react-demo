import React  from 'react'
// import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom'
import {HashRouter,Route,Switch, Redirect} from 'react-router-dom'
import asyncComponent from './asyncComponent';
// import Home from './pages/home';
// import Ctgr from './pages/ctgr';
// import Car from './pages/car';
// import User from './pages/user';
const Home = asyncComponent(() => import("../pages/home"));
const Ctgr = asyncComponent(() => import("../pages/ctgr"));
const Car = asyncComponent(() => import("../pages/car"));
const User = asyncComponent(() => import("../pages/user"));
const NoFind = asyncComponent(() => import("../pages/tips/noFind"));


export default ()=>(
    <HashRouter>
        <Switch>
            {/*<Route path='/' component={Home}></Route>*/}
            <Route path='/home' component={Home}></Route>
            <Route path='/ctgr' component={Ctgr}></Route>
            <Route path='/car' component={Car}></Route>
            <Route path='/user' component={User}></Route>
            <Route path='/noFind' component={NoFind}></Route>
            <Redirect to="/home"/>
        </Switch>

    </HashRouter>
)