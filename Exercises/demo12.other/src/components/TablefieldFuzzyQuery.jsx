import React, { Component } from 'react';
import { Table } from 'antd';
import MainMenu from '../MainMenu';
import './common.css'
export default class TablefieldFuzzyQuery extends Component {
    constructor(props){
		super(props);
		this.state = {
            data : [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                },
                {
                    key: '4',
                    name: 'Jim Red',
                    age: 32,
                    address: 'London No. 2 Lake Park',
                },
                {
                    key: '5',
                    name: 'Caesar Red',
                    age: 66,
                    address: 'London No. 2 Lake Park',
                },
                {
                    key: '6',
                    name: 'William Shakes beare',
                    age: 85,
                    address: 'London No. 2 Lake Park',
                },
                {
                    key: '7',
                    name: 'Mark Twain',
                    age: 54,
                    address: 'London No. 2 Lake Park',
                },
            ],
            tempdata : [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                },
                {
                    key: '4',
                    name: 'Jim Red',
                    age: 32,
                    address: 'London No. 2 Lake Park',
                },
                {
                    key: '5',
                    name: 'Caesar Red',
                    age: 66,
                    address: 'London No. 2 Lake Park',
                },
                {
                    key: '6',
                    name: 'William Shakes beare',
                    age: 85,
                    address: 'London No. 2 Lake Park',
                },
                {
                    key: '7',
                    name: 'Mark Twain',
                    age: 54,
                    address: 'London No. 2 Lake Park',
                },
            ],
            fuzzyinputvalue:'',
            arr:[]
		}
	}
    fuzzy=()=>{
        const {data,fuzzyinputvalue,arr}=this.state
        const temparr=[]
        this.setState({tempdata:data,arr:temparr})
        if(fuzzyinputvalue===''){
            return
        }
        let len=data.length;
        for(let i =0;i<len;i++){
            if(data[i].name.indexOf(fuzzyinputvalue)>= 0){
                arr.push(data[i])
            }
        }
        console.log(this.state.arr);
        this.setState({tempdata:arr})
    }
    handelChange(e){
		this.setState({
			fuzzyinputvalue:e.target.value
		})
	}
    render() {
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              sortDirections: ['descend'],
            },
            {
              title: 'Age',
              dataIndex: 'age',
              defaultSortOrder: 'descend',
              sorter: (a, b) => a.age - b.age,
            },
            {
              title: 'Address',
              dataIndex: 'address',
              onFilter: (value, record) => record.address.indexOf(value) === 0,
            },
        ];
        return (
            <div>
                <div className="fuzzydiv">
                    <h1>js模糊查询</h1>
                    <input 
                        type="text" 
                        placeholder="输入name进行查询"
                        onChange={this.handelChange.bind(this)} 
                        defaultValue={this.state.fuzzyinputvalue}
                    />
                    <button onClick={this.fuzzy}>查询</button>
                    <Table columns={columns} dataSource={this.state.tempdata} />
                </div>
                <MainMenu></MainMenu>
            </div>
        );
    }
}
