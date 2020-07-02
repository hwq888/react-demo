import React, {Component} from 'react';
import axios from 'axios';
// import {
//     NavLink,
// } from 'react-router-dom';
// 首页
class Home extends Component {
    render() {
        return (
            <div>
                <h1>首页</h1>
                {/* <NavLink to='/login'><img className="bg" src={require('../static/imgs/home.png')} alt=""/></NavLink> */}
            </div>
        );
    }
    componentDidMount = () => {
    //    代理测试
        axios.get('/index/recommend.json')
            .then((res) => {
                    console.log(res.data.list);
            })
       
    }
}
export default Home;