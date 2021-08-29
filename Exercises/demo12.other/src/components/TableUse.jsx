import React, { Component } from 'react';
import { Table, Button, Space } from 'antd';
import MainMenu from '../MainMenu';

export default class TableUse extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectedRowKeys: [], 
            loading: false,
            total:-1,
            pageSize:10,
            current:1,
            data : [],
        }
    }
    componentDidMount() {
        this.addData();
    }
    start = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            loading: false,
          });
        }, 1000);
      };
    
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    // 获取信息
    getInformation=(record,index) => {
        console.log('获取当前行的年龄');
        console.log(record.age);
        console.log(`获取当前页面第${index+1}行，获取编号${index + (this.state.current-1)*this.state.pageSize+1}`);
    }
    // 加载数据
    addData = () => {
        let data = []
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                name: `Edward King ${i+1}`,
                age: `${30+i}`,
                address: `London, Park Lane no. ${i}`,
            });
        }
        this.setState({ data })
    }

    render() {
        const {data}=this.state
        const columns = [
            {
              title: 'Name',
              align: 'center',
              dataIndex: 'name',
            },
            {
              title: 'Age',
              align: 'center',
              dataIndex: 'age',
            },
            {
              title: 'Address',
              align: 'center',
              dataIndex: 'address',
            },
            {
                title: '操作',
                dataIndex: 'secret',
                align: 'center',
                render: (text, record,index) => (
                  <Space size="middle">
                     <Button type="link" onClick={() => this.getInformation(record,index) } >获取当前行的年龄</Button>
                     <Button type="link" onClick={()=>console.log('欢迎点击！')} >正在点击操作下的另外一个按钮</Button>
                  </Space>
                ),
            },
        ];
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
                </div>
                <Table 
                    rowSelection={rowSelection} 
                    columns={columns} 
                    dataSource={data} 
                    pagination={{
                        position: ['bottomRight'],
                        // 显示总条数
                        showTotal: total => `共 ${total} 条`,
                        pageSize: this.state.pageSize,
                        // 设置总条数
                        total: this.state.data.length,
                         onChange: (current,remain)=>{
                            this.setState({current:current})
                            console.log(`当前页数：${current}`);
                        },
                        showSizeChanger: false,
                      }}
                />
                <MainMenu></MainMenu>
            </div>
        );
    }
}
