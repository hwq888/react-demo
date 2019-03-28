import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from 'react-router-dom';
import './router.scss';
import Home from './home/Home';
import Redux from './reactRedux/Redux';

class RouterPage extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/redux'>Redux基本使用</Link></li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home} />
                <Route path="/redux" component={Redux} />
            </div>
        </Router>
    );
  }
}

export default RouterPage;
