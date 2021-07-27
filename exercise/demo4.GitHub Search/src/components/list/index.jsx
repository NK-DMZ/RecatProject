import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, errormessage } = this.props
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
