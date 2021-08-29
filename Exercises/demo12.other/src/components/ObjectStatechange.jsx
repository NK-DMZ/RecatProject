import React, { Component } from 'react'
import MainMenu from '../MainMenu';
// 对象用setState赋值
export default class ObjectStatechange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                total: 2,
                records: [{name:'小王',age:12}, {name:'大王',age:120}],
                hero:{
                    id:1,
                    heroname:'王',
                    done(){
                        console.log('done');
                    }
                }
            }
        };
    }
    componentDidMount() {
        console.log("ObjectStatechange:");
        console.log(this.state.data);
    }
    changetotal=()=>{
        this.setState({
            data: { total: 5 ,records:[{name:'德莱文',age:102}, {name:'卡尔玛',age:120}, {name:'提莫',age:36}],hero:{heroname:'帝',done(){console.log('you need me');}}},
            // data: { total: 4, records: datatest },
        },()=>{
            console.log(this.state.data);
        });
    }
    render() {
        return (
            <div>
                <h1>对象用setState赋值</h1>
                <p>state中的data对象total属性{this.state.data.total}</p>
                <p>state中的data对象hero对象的id属性{this.state.data.hero.id}</p>
                {/* <p>state中的data对象hero对象的done方法{this.state.data.hero.done}</p> */}
                <button onClick={this.changetotal}>修改total内容</button>
                <button onClick={this.state.data.hero.done}>done</button>
                <MainMenu></MainMenu>
            </div>
        )
    }
}