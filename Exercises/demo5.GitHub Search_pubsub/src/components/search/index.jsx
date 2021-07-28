import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js';


export default class Search extends Component {
    constructor(props){
        super(props);
        this.keyWordContainer = React.createRef();
    }
    
    serach = () => {   
        // 1.获取用户输入
        const { value } = this.keyWordContainer.current
        // 2.校验数据
        if (!value.trim()) return alert('输入不能为空')
        // 通知app将isFirst变为false、isLoading变为true
        // this.props.updateState({isFirst:false,isLoading:true})
        PubSub.publish('updataState',{isFirst:false,isLoading:true})
        // 3.发送请求获取数据
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => { 
                const{items}=response.data
                //请求成功后，通知app存储用户信息、将isLoading变为false
                PubSub.publish('updataState',{users:items,isLoading:false})
            },
            error => { 
                // 注意：此处的error是一个对象，真正的错误信息在error.message
                //请求失败后,存储错误信息，将isLoading变为false
                PubSub.publish('updataState',{isLoading:false,errormessage:error.message})
            }
        )
    }
    render() {
        return (
            <div className='search_divall'>
                <h1> 搜索GitHub用户 </h1>
                <div>
                    <input type="text" placeholder="请输入进行查找" className='search_input' ref={this.keyWordContainer} />
                    <button onClick={this.serach}>search</button>
                </div>
            </div>
        )
    }
}
