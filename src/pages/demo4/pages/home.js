import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'antd-mobile';
import './home.scss'
// import {
//     NavLink,
// } from 'react-router-dom';
// 首页
class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="content">首页</h1>
                <Button type="primary">primary</Button>
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
