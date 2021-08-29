import React, { Component } from 'react';
import MainMenu from '../MainMenu';

export default class ObjectPush extends Component {
    constructor(props){
		super(props);
		this.state = {
            data:[
                {id:1,name:'test1'},
                {id:12,name:'test12'},
                {id:13,name:'test13'},
                {id:14,name:'test14'},
                {id:15,name:'test15'}
            ],
            records:[
                {id:3,name:'test3'},
                {id:32,name:'test32'},
                {id:313,name:'test313'},
                {id:314,name:'test314'},
                {id:315,name:'test315'}
            ]
		}
	}
    pushdemo=()=>{
        const len=this.state.records.length;
        for(let i= 0;i<len;i++){
            this.state.data.push(this.state.records[i])
        }
        
        console.log(this.state.data);
    }
    render() {
        return (
            <div>
                <h1>对象数组push</h1>
                <button onClick={this.pushdemo}>pushdemo</button>
                <MainMenu></MainMenu>
            </div>
        );
    }
}
