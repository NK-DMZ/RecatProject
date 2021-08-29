import React, { Component } from 'react'
import MainMenu from '../MainMenu';
import Datamytest from './Datause.json';
// 这个文件对输入的json文件内容进行统一加入默认属性,使用展现出来

export default class Datause extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                total: 0,
                records: [{}, {}],
            }
        };
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = () => {
        const datatest = Datamytest;
        datatest.forEach((item, index) => {
            item.age = index+1;
            item.title = "index";
        })
        // const a = Object.assign({}, this.state.data, { total: datatest.length, records: datatest });
        this.setState({
            data: { total: datatest.length, records: datatest },
        }, () => {
            console.log("JsonDatause:");
            console.log(this.state.data);
        });
    };

    render() {
        const { data } = this.state;
        // console.log(data.records);
        return (
            <div>
                <h1>json数据使用，添加统一默认属性</h1>
                {data.records.length && data.records.map((item,index) => 
                    <div key={index} title={item.id}>
                        <span > &nbsp;&nbsp;&nbsp;&nbsp;   {item.id}        &nbsp;&nbsp;&nbsp;&nbsp;  </span>
                        <span > &nbsp;&nbsp;&nbsp;&nbsp;   {item.title}     &nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <span > &nbsp;&nbsp;&nbsp;&nbsp;   {item.age}       &nbsp;&nbsp;&nbsp;&nbsp; </span>
                        <span > &nbsp;&nbsp;&nbsp;&nbsp;   {item.isvName}   &nbsp;&nbsp;&nbsp;&nbsp;  </span>
                    </div>
                )}
                <MainMenu></MainMenu>
            </div>
        )
    }
}
