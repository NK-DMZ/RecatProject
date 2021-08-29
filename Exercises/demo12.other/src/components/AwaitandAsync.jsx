import React, { Component } from 'react';
import MainMenu from '../MainMenu';
export default class AwaitandAsync extends Component {
    add=()=>{
        //延时输入函数
        const asy = function(v, time) {
            return new Promise((resolve, reject) =>{
                setTimeout(()=>{
                    resolve(v)
                }, time)
            })
        }
        const add = async function() {
            console.log('5秒后打印a,15秒后打印b,30秒后打印c和d');
            const a = await asy(3, 5000)
            console.log(a)
            const b = await asy(4, 10000)
            console.log(b)
            const c =  await asy(5, 15000)
            console.log(a,b,c)
            const d = a + b +c  
            console.log(d)
        }
        add()
    }
    render() {
        return (
            <div>
                <h1>await与async的用法</h1>
                <button onClick={this.add}>打开控制台点我！</button>
                <MainMenu></MainMenu>
            </div>
        );
    }
}