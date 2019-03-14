import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class home extends Component {
    render() {
        return (
            <div>
                {/*<NavLink to='/detail'>去detail页面</NavLink>*/}
                <NavLink className="ml10" to='/routerPage'>去路由页面</NavLink>
            </div>
        )
    }
}
export default home;