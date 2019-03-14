import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class detail extends Component {
    render() {
        return (
            <div>
                <NavLink to='/'>回到home</NavLink>
                <NavLink className="ml10" to='/routerPage'>回到router</NavLink>

                <div>
                   {this.props.match.params.id}
                </div>
            </div>
        )
    }
    componentDidMount() {
        console.log('获取URL上面参数'+ JSON.stringify(this.props.match.params));
        // console.log('获取内存参数'+ JSON.stringify(this.props.history.location.state));
    }
}
export default detail;