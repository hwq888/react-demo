/**
 * Created by hwq on 2019/3/14.
 */
import React,{ Component} from 'react';

export default class Rendering extends Component{
    render(){
        return (
            <div>
                <p>子路由详情</p>
            </div>
        )
    }
    componentWillMount(){
        // console.log(this)
        // let type = this.props.location.pathname.split('/')[2];
        // this.getRecord(type);
    }
}