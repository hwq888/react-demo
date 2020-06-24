import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from 'react-router-dom';
import './router.scss';
import Home from './home/Home';
import About from './about/About';

class Demo1 extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/about'>about路由跳转</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
  }
}

export default Demo1;
