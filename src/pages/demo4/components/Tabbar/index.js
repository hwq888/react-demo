import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.scss';
const tabbarArr = [
    {
        img:'icon-home',
        text:'首页',
        link:'/app/home'
    },{
        img:'icon-fenlei',
        text:'分类',
        link: '/app/classify'
    },{
        img:'icon-gouwuche',
        text:'购物车',
        link:'/app/car'
    },{
        img:'icon-wulumuqishigongandashujuguanlipingtai-ico-',
        text:'我的',
        link:'/app/user'
    },
];



class Tabbar extends Component {
        constructor(props){
            super(props);
            this.state={
                index:0
            }
        }
        itemChange = (index)=>{
            this.setState({
                index:index,
            })
        };

        render() {
            const url = window.location.href;
            return (
                <div className="tabbar-container">
                    <div className="tabbar">
                        <div className="tabbar-content">
                            {
                                tabbarArr.map((item,index)=>(
                                    <NavLink to={item.link} key={index}
                                        //   className="tabbar-item"
                                        //   activeClassName="active"
                                          className={"tabbar-item " + (url.indexOf(item.link) >-1?'active':'')}
                                        // onClick={()=>this.itemChange(index)}
                                    >
                                        <div className={'iconfont '+ item.img}></div>
                                        <div className="tabbar-text">{item.text}</div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
            );
        }
}



export default Tabbar;