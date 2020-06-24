/**
 * Created on 2018/3/18.
 */
import React,{ Component} from 'react';

export default class About extends Component{
    render(){
        return (
            <div>
                <h1>关于</h1>
                <div>
                    <p>1、路由跳转：</p>
                    <p>this.props.history.push('detail');</p>
                    <p>this.props.history.replace('/detail');</p>
                    <p>this.props.history.goBack();</p>
                    <p>Link,NavLink,a标签</p>
                </div>
            </div>
        )
    }
}