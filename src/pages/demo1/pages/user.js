import React, {Component} from 'react';
import Tabbar from "../components/Tabbar";
// 用户
class User extends Component {
    render() {
        return (
            <div>
                <img className="bg" src={require('../static/imgs/user.png')} alt=""/>
                {/*<Tabbar/>*/}

            </div>
        );
    }
}

export default Tabbar(User);