import React, { Component } from 'react';
import {
    NavLink,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';
import Rendering from './childRouter/rendering';
export default class ChildRouter extends Component{
    render() {
        return (
            <main className="common-con-top">
                <section className="record-nav-con">
                    <nav className="record-nav">
                        <NavLink to={`${this.props.match.path}/passed`} className="nav-link">已通过</NavLink>
                        <NavLink to={`${this.props.match.path}/audited`} className="nav-link">待审核</NavLink>
                        <NavLink to={`${this.props.match.path}/failed`} className="nav-link">未通过</NavLink>
                    </nav>
                </section>
                {/* 子路由在父级配置，react-router4新特性，更加灵活 */}
                <Switch>
                    <Route path={`${this.props.match.path}/:type`} component={Rendering} />
                    <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/passed`} exact component={Rendering} />
                </Switch>
            </main>
        );
    }
    componentDidMount() {
        console.log('childRouter')
        console.log(this)
    }
}