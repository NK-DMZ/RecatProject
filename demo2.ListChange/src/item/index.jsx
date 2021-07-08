import React,{Component} from 'react';
import './index.css'
export default class Item extends Component{  
    state={
        mouseisenter:false
    }
    handlemouse=(mouseisenter)=>{
        return ()=>{
            this.setState({mouseisenter})
        }
    }
    // handledelete=(id)=>{
    //     return ()=>{
    //         if(window.confirm('确定删除嘛？')){
    //             console.log('del',id);
    //             this.props.deltodo(id)
    //         }
    //     }
    // }
    handledelete=(index)=>{
        return ()=>{
            if(window.confirm('确定删除嘛？')){
                // console.log('del',id);
                this.props.deltodo(index)
            }
        }
    }
    handlecheck=(id)=>{
        return (event)=>{
            console.log(id,event.target.checked);
            this.props.updatetodo(id,event.target.checked)
        }
    }
    render(){
        // const {index,id,name,done}=this.props
        const {index,id,name,done}=this.props
        const {mouseisenter}=this.state
        return(
           <li 
                onMouseEnter={this.handlemouse(true)} 
                onMouseLeave={this.handlemouse(false)} 
                className={mouseisenter?'action':''}
            >
               <label htmlFor="">
                   <input type="checkbox" checked={done} onChange={this.handlecheck(id)} />
                   <span>{name}</span>
               </label>
               <button 
                    style={{display:mouseisenter?'block':'none'}}
                    // onClick={this.handledelete(id)}
                    onClick={this.handledelete(index)}
                    className='itembutton'
                >del</button>
           </li>
        )
    }
}