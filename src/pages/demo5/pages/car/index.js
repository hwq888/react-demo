import React, {Component} from 'react';
import { connect } from "react-redux";
import { commSetTitle } from "../../store/comm/commActionCreators";
// 购物车
class Car extends Component {
    render() {
        return (
            <div>
                <h1>购物车</h1>
                {/* <img className="bg" src={require('../static/imgs/car.png')} alt=""/> */}

            </div>
        );
    }
    componentWillMount = () => {
        this.props.commSetTitle('购物车');
    }
}
// export default Car;
export default connect(
    null,
    { commSetTitle }
)(Car);