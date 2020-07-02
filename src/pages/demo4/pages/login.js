import React, {Component} from 'react';
import {
    NavLink,
} from 'react-router-dom';
// 登录
class Login extends Component {
    render() {
        return (
            <div>
                <NavLink to='/app/home'><button className="toHome">首页</button></NavLink>
            </div>
        );
    }
}

export default Login;