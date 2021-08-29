import React, { Component } from 'react'
import MainMenu from '../MainMenu';
//此文件写了setState的异步执行与同步执行
export default class SetStatedome extends Component {
    constructor(props) {
        super(props);
        this.num = React.createRef();
        this.sum = React.createRef();
        this.state = {
            num:'undefined',
            sum:''
        };
    }
    inputchangeNum=()=>{
        let val=this.refs.num.value;
        this.setState({
            num:val
        })
        console.log(this.state.num);
    }
    inputchangeSum=()=>{
        let val=this.refs.sum.value;
        this.setState({
            sum:val
        },()=>{
            console.log(this.state.sum);
        })
    }
    render() {
        return (
            <div>
                <h1>此文件写了setState的异步执行与同步执行</h1>
                <input type="text"  onChange={this.inputchangeNum} ref='num'/>
                <p>setState是异步函数，打开控制台会发现打印落后输入一拍</p>
                <input type="text"  onChange={this.inputchangeSum} ref='sum'/>
                <p>改写后，setState可以同步更新</p>
                <MainMenu></MainMenu>
            </div>
        )
    }
}

