import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js';

export default class List extends Component {
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
    componentDidMount(){
        //_,这个地方是消息名
          this.msgid=PubSub.subscribe('updataState',(_,data)=>{
              this.setState(data)
            // console.log('订阅消息是：'+data);
          })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.msgid)
    }
    render() {
        const { users, isFirst, isLoading, errormessage } = this.state
        return (
            <div>
                {
                    isFirst ? <h1>欢迎使用！</h1> :
                        isLoading ? <h1>Loading....</h1> :
                            errormessage ? <h1>{errormessage}</h1> :
                                Object.keys(users).length === 0 ? <h1>没找到！</h1> :
                                    users.map((userobj) => {
                                        return (
                                            <div className="card" key={userobj.id}>
                                                <a href={userobj.html_url}>
                                                    <img src={userobj.avatar_url} alt="" />
                                                </a>
                                                <p>{userobj.login}</p>
                                            </div>
                                        )
                                    })

                }
            </div>
        )
    }
}
