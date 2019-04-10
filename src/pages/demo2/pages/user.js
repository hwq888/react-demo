import React, {Component} from 'react';
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

export default User;