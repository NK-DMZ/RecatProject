import React,{Component} from 'react';
import './index.css'
export default class Footer extends Component{   
    checkAll=(event)=>{
        // console.log();
        this.props.checkAll(event.target.checked)
    }
    cleardone=()=>{
        this.props.cleardone()
    }
    render(){
        const{todos}=this.props
        const donecount=todos.reduce((preValue,current)=>{return preValue+(current.done?1:0)},0)
        const total=todos.length
        return(
           <div>
               <label htmlFor="">
                   <input type="checkbox" defaultChecked={total===donecount&&total>0} onChange={this.checkAll}   />
               </label>
               <span>
                   <span>已完成{donecount}</span>/全部{total}
               </span>
               <label htmlFor="">
                   <button onClick={this.cleardone} className='footerbutton'>删除已完成</button>
               </label>
           </div>
        )
    }
}