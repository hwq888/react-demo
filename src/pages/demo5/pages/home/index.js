import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { commSetTitle } from "../../store/comm/commActionCreators";
import { Button } from 'antd-mobile';
import './home.scss'
// import {
//     NavLink,
// } from 'react-router-dom';
// 首页
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1 className="content">首页</h1>
                <Button type="primary" className="btn">primary</Button>
                {/* <NavLink to='/login'><img className="bg" src={require('../static/imgs/home.png')} alt=""/></NavLink> */}
            </div>
        );
    }
    componentWillMount = () => {
        console.log('componentWillMount')
        this.props.commSetTitle('首页');
    }
    componentDidMount = () => {
        console.log('componentDidMount')
        // 代理测试
        axios.get('/index/recommend.json')
            .then((res) => {
                    console.log(res.data.list);
            })
        
    }
}
// export default Home;
export default connect(
    null,
    { commSetTitle }
)(Home);
