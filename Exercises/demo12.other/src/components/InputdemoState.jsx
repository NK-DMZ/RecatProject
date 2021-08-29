import React, { Component } from 'react';
import MainMenu from '../MainMenu'
export default class InputdemoState extends Component {
    constructor(props){
		super(props);
		this.state = {
			inpValu:''
		}
	}
    handelChange(e){
		this.setState({
			inpValu:e.target.value
		})
	}
    render() {
        return (
            <div>
                <h1>受控组件this.setState输入框输入</h1>
                <input 
                    type="text" 
                    onChange={this.handelChange.bind(this)} 
                    defaultValue={this.state.inpValu}/>
                <p>输入框内容：{this.state.inpValu}</p>
                <MainMenu></MainMenu>
            </div>
        );
    }
}