/**
 * Created on 2018/3/18.
 */
import React,{ Component} from 'react';
import {
    Prompt
} from 'react-router-dom';

export default class Home extends Component{
    render(){
        return (
            <div>
                <h1>主页</h1>
                <Prompt // 阻止导航也是一个较简单的示例
                    when={true} // when属性的作用是当它的值为true时，才会触发消息提示，值为false的时候，不会触发消息提示
                    message={location => (
                        `Are you sure you want to go to ${location.pathname}`
                    )}
                />
            </div>
        )
    }
}