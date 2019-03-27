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
import Topics from './topics/Topics';

class RouterPage extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><NavLink to='/about' activeClassName="selected">关于</NavLink></li>
                    {/*<li><NavLink to='/about' isActive={oddEvent}>Event 123</NavLink></li>*/}
                    <li><Link to='/topics'>主题列表</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    );
  }
}

export default RouterPage;
