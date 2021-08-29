import React, { Component } from 'react';
import { Switch, Modal } from 'antd';
const { confirm } = Modal;

export default class SwitchChange extends Component {
    constructor(props) {
        super(props);
        this.state={
            isselect:true
        }
    }
      // 是否开启
  isOpen=() => {
    // const isselect =this.state.isselect
    confirm({
      title: 'switch按钮状态改变' ,
      icon: null,
      checked: true,
      content: '确定switch按钮状态改变，取消switch按钮状态不改变' ,
      onOk: () => {
        console.log('onOk');
        this.setState({isselect:! this.state.isselect},()=>{
            console.log(this.state.isselect);
        })
      },
      onCancel:()=> {
        this.setState({isselect:this.state.isselect},()=>{
            console.log(this.state.isselect);
        })
      },
    });
  }
    render() {
        return (
            <div>
                <h1> 通过弹窗点击事件进行控制switch</h1>
                <p>要求取消时switch按钮状态不改变</p>
                <Switch  onChange={() => this.isOpen()} checked={this.state.isselect} />
            </div>
        );
    }
}