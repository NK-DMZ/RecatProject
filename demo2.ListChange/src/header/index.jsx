import React,{Component} from 'react';
import './index.css'
import { v4 as uuidv4 } from 'uuid';
export default class Header extends Component{   
    handkeyup=(event)=>{
        // 获取用户输入
        const {value}=event.target
        // 判断按键是否为回车
        if(event.keyCode!==13) return
        // 数据的校验
        if(value.trim()==='')return alert('输入内容不能为空')
        //准备一个todo对象
        const todoobj={id:uuidv4(),name:value,done:false}
        console.log(todoobj.id);
        // 将todoobj传给app
        this.props.addtodo(todoobj)
        event.target.value=''
    }
    render(){
        return(
           <div>
               <input type="text" onKeyUp={this.handkeyup} className='headerinput' />
           </div>
        )
    }
}