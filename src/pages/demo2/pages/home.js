import React, {Component} from 'react';
import {
    NavLink,
} from 'react-router-dom';
// 首页
class Home extends Component {
    render() {
        return (
            <div>
                <NavLink to='/login'><img className="bg" src={require('../static/imgs/home.png')} alt=""/></NavLink>
            </div>
        );
    }
}
export default Home;