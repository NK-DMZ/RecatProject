import React, { Component } from 'react';
import axios from 'axios'
import './index.css'

export default class App extends Component{
    getstudent=()=>{
        // axios({
        //     url:'http://localhost:3000/api/students',//处理好跨域问题
        //     method:'GET'
        // }).then(
        //     response=>{console.log('success',response,response.data);},
        //     error=>{console.log('failed!',error)}
        // )
        axios.get('http://localhost:3000/api/students').then(
            response=>{console.log('success',response,response.data);},
            error=>{console.log('failed!',error)}
        )
    }
    render(){
        return(
            <div>
                <button onClick={this.getstudent}>点我获取学生信息</button>
            </div>
        )
    }
}
// 解决跨域问题：
/*
1.jsonp
2.cors====>7
3.代理
*/