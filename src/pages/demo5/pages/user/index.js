import React, {Component} from 'react';
import { connect } from "react-redux";
import { commSetTitle } from "../../store/comm/commActionCreators";
// 用户
class User extends Component {
    render() {
        return (
            <div>
                <h>用户中心</h>
                {/* <img className="bg" src={require('../static/imgs/user.png')} alt=""/> */}
                {/*<Tabbar/>*/}

            </div>
        );
    }
    componentWillMount = () => {
        this.props.commSetTitle('我的');
    }
}

// export default User;
export default connect(
    null,
    { commSetTitle }
)(User);