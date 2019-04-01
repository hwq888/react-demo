import React, {Component} from 'react';
import Tabbar from "../components/Tabbar";
// 购物车
class Car extends Component {
    render() {
        return (
            <div>
                <img className="bg" src={require('../static/imgs/car.png')} alt=""/>

            </div>
        );
    }
}

export default Tabbar(Car);