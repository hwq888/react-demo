import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom'
import './index.scss';
class Header extends Component {
        constructor(props){
            super(props);
            this.state={
            }
        }
        render() {
            // const url = window.location.href;
            return (
                <div className="header-container">
                    <span>{this.props.title}</span>
                </div>
            );
        }
}
export default Header;