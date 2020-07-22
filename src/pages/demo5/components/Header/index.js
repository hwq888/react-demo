import React, {Component} from 'react';
import { connect } from "react-redux";
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
            const { pageTitle } = this.props;
            return (
                <div className="header-container">
                    <span>{pageTitle}</span>
                </div>
            );
        }
}

const mapStateToProps = (state) => {
	return {
		pageTitle: state.getIn(['comm', 'pageTitle']),
	}
}

const mapDispathToProps = (dispatch) => {
	return {
	}
}
// export default Header;
export default connect(
    mapStateToProps, mapDispathToProps
)(Header);