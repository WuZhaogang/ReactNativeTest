import {React, PureComponent} from "react"

export default class BaseComponent extends PureComponent {

    componentWillUnmount(){
        //重写组件的setState方法，直接返回空
        this.setState = (state,callback)=>{
            return null;
        };
    }
}