import React, {Component} from 'react';
import { connect } from "react-redux";
import { commSetTitle } from "../../store/comm/commActionCreators";
// 分类
class Classify extends Component {
    render() {
        return (
            <div>
                <h1>分类</h1>
                {/* <img className="bg" src={require('../static/imgs/ctgr.png')} alt=""/> */}
            </div>
        );
    }
    componentWillMount = () => {
        this.props.commSetTitle('分类');
    }
}

// export default Classify;
export default connect(
    null,
    { commSetTitle }
)(Classify);