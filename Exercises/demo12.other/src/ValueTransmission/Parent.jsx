import React, { Component } from 'react';
import Child from './Child'

export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // arr: [{
            //     "userName":"fangMing","text":"123333","result":true
            // }, {
            //     "userName":"zhangSan","text":"345555","result":false
            // }, {
            //     "userName":"liSi","text":"567777","result":true
            // }, {
            //     "userName":"wangWu","text":"789999","result":true
            // },]
            company:1,
        }
    }
    render() {
        return (
            <div>
                {/* <Child arr={this.state.arr}>这里把state里面的arr传递到子组件
                </Child> */}
                <Child company={this.state.company}>这里把state里面的arr传递到子组件
                </Child>
            </div>
        );
    }
}