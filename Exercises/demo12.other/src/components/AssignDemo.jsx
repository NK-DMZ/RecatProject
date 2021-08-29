import React, { Component } from 'react'
import MainMenu from '../MainMenu';
//Assign的使用方法
export default class AssignDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                total: 0,
                records: [{}, {}],
            }
        };
    }
    componentDidMount() {
        console.log("AssignDemo:");
        console.log(this.state.data);
    }
    assignuse=()=>{
        const assignusevalue = Object.assign({}, 
                this.state.data, 
                { total: 6, records: [{name:'德莱文',age:102}, {name:'卡尔玛',age:120}]},
                {age:22,counter:99}
            );
        console.log(assignusevalue);
    }
    render() {
        return (
            <div>
                <h1>Assign的使用方法</h1>
                <p>打开控制台后点击按钮</p>
                <button onClick={this.assignuse}>用assign累加对象属性</button>
                <MainMenu></MainMenu>
            </div>
        )
    }
}
