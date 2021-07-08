import React, { Component } from 'react';
import Header from './header/index'
import List from './list/index'
import Footer from './footer/index'
import './App.css'

export default class App extends Component{
    //初始化状态，因为header要用todos（添加），而且list也要用（读）
    state={
        todos:[
            {id:'001',name:'活动1',done:true},
            {id:'002',name:'活动2',done:true},
            {id:'003',name:'活动3',done:false},
        ]
    }
    addtodo=(todoobj)=>{
        // 获取原数据
        const {todos}=this.state
        // 更新状态
        this.setState({todos:[todoobj,...todos]})
    }
    //第一种写法
    // deltodo=(id)=>{
    //     const {todos}=this.state
    //     const newtodos=todos.filter((todoobj,index)=>{
    //         return todoobj.id!==id
    //     })
    //     this.setState({todos:newtodos})
    // }
    //在item/index.jsx同步修改
    //第二种写法
    deltodo=(index)=>{
        const {todos}=this.state
        todos.splice(index,1)
        this.setState({todos:todos})
    }
    updatetodo=(id,done)=>{
        const {todos} =this.state
        const newtodos=todos.map((todoobj,index)=>{
            if(todoobj.id===id) todoobj.done=done
            return todoobj
        })
        this.setState({todos:newtodos})
    }
    checkAll=(done)=>{
        const {todos}=this.state
        const newtodos=todos.map((todoobj)=>({...todoobj,done}))
        this.setState({todos:newtodos})
    }
    cleardone=()=>{
        const {todos}=this.state
        const newtodos=todos.filter((todoobj)=>{
            return !todoobj.done
        })
        this.setState({todos:newtodos})
    }
    render(){
        
        return(
            <div>
                <Header addtodo={this.addtodo}/>
                <List todos={this.state.todos} deltodo={this.deltodo} updatetodo={this.updatetodo} />
                <Footer  todos={this.state.todos} checkAll={this.checkAll} cleardone={this.cleardone} />
            </div>
        )
    }
}