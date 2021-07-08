import React, { Component } from 'react';
import Item from '../item/index'
import './index.css'
export default class List extends Component{   
    render(){
        const {todos,deltodo,updatetodo}=this.props
        return(
            <ul>
                {
                    // todos.map((todos)=>{
                    //     // return <Item key={todoobj.id} id={todoobj.id} name={todoobj.name} done={todoobj.done} />
                    //     return <Item key={todos.id} {...todos} deltodo={deltodo} />
                    // })
                    todos.map((todos,index)=>{
                        return <Item 
                        key={todos.id} 
                        index={index} {...todos} 
                        deltodo={deltodo}
                        updatetodo={updatetodo} 
                        />
                    })
                }
            </ul>
        )
    }
}