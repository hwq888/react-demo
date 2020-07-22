import React, {Component} from 'react';
import { connect } from "react-redux";
import { commSetTitle } from "../../store/comm/commActionCreators";
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
    componentWillMount = () => {
        this.props.commSetTitle('登录');
    }
}

// export default Login;
export default connect(
    null,
    { commSetTitle }
)(Login);