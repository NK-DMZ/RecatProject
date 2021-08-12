  // eslint-disable-next-line 
import React,{useState,useMemo} from 'react'

export default function Example7(params) {
    // eslint-disable-next-line 
    const [uzi,setUzi]=useState('uzi在线')
    // eslint-disable-next-line 
    const [xiaohu,setXiaohu]=useState('小虎在线')
    return (
        <div>
            <p>example7-useMemo函数解决子组件重复执行问题</p>
            <p>点击uzi在线按钮会修改子组件内容，由此触发function changeuzi，点击小虎在线按钮只是修改了父组件内容</p>
            <button onClick={()=>{setUzi(new Date().getTime())}}> uzi在线</button>
            {/* <button onClick={()=>{setXiaohu(new Date().getTime())}}> 小虎上线</button> */}
            <button onClick={()=>{setXiaohu(new Date().getTime()+'小虎上线')}}> 小虎在线</button>
            <ChildComponent name={uzi}>{xiaohu}</ChildComponent>
            {/* <ChildComponent name={uzi}></ChildComponent> */}
        </div>
    )
}
function ChildComponent({name,children}) {
    function changeuzi() {
        console.log('uzi上线！');
        return name+',上线了'
    }

    //父组件发生改变，子组件默认不执行
    // eslint-disable-next-line 
    // const actionuzi=useMemo(()=>changeuzi(name),[name]) 
    //父组件发生改变，子组件函数会被执行
    const actionuzi=changeuzi(name)

    return(
        <div>
            <div>{actionuzi}</div>
            <div>{children}</div>
        </div>
    )
}
