import React, { Component } from 'react'
import MainMenu from '../MainMenu';
// 输入框输入

export default class  Inputdemo extends Component {
    constructor(props) {
        super(props);
        this.idvalue = React.createRef();
        this.namevalue = React.createRef();
    }
    //输入获取
    inputChange(){
        //获取dom节点元素
        //1.添加ref属性
        //2.使用this.refs.idvalue获取dom节点
        let val=this.refs.idvalue.value;
        this.setState({
            idvalue:val
        })
    }

    check=()=>{
        console.log(this.state.idvalue);
        console.log(this.namevalue);
    }
    render() {
        return (
            <div>
                <h1>输入框输入</h1>
                 id:<input type="text" ref='idvalue' onChange={()=>this.inputChange()} />
                <br /><br />
                name:<input type="text" ref={this.namevalue} />
                <br /><br />
                <button onClick={this.check}>查看输入的ID和name</button>
                <MainMenu></MainMenu>
            </div>
        )
    }
}
