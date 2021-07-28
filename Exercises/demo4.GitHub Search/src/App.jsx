import React, { Component } from 'react'
import Search from './components/search/index'
import List from './components/list/index'

export default class App extends Component {
  state={
    // 存储用户信息
    users:[],
    // 是否为初始展示
    isFirst:true,
    // 标识是否为加载中
    isLoading:false,
    // 存储错误信息
    errormessage:''
  }
  saveusers=(userarr)=>{
    this.setState({users:userarr})
  }
  updateState=(obj)=>{
    this.setState(obj)
  }
  render() {
    return (
      <div>
        <Search updateState={this.updateState}></Search>
        <List {...this.state}></List>
      </div>
    )
  }
}

