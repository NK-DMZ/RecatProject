import React, { Component } from 'react';

export default class Child extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="list">
                {/* <ul>
                    {
                        this.props.arr.map(item => {//这个地方通过this.props.arr接收到父组件传过来的arr，然后在{}里面进行js的循环
                            return (
                                <li key={item.userName}>
                                    {item.userName} 评论是:{item.text}
                                </li>
                            )
                        })
                    }
                </ul> */}
                <p>{this.props.company}</p>
             
            </div>
        )
    }
}