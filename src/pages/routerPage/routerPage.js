import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class routerPage extends Component {
    render() {
        return (
            <div>
                <a href='#/'>回到home</a>
                {/*<a className="ml10" onClick={() => this.props.history.push('detail')}>代码跳转</a>*/}
                {/*<a className="ml10" onClick={() => this.props.history.push({pathname: '/detail', state: {id: 3}})}>代码跳转带参数</a>*/}
                <NavLink className="ml10" exact to='/detail/3'>参数路由(URL)</NavLink>
                <NavLink className="ml10" exact to="/childRouter" >子路由</NavLink>
                <NavLink className="ml10" exact to='/routerPage'>路由语法总结</NavLink>
            </div>
        )
    }
    componentDidMount() {
        //console.log(this.props.match.params);
        console.log(this);
    }
}
export default routerPage;