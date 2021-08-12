/* eslint-disable import/no-anonymous-default-export */
import React,{useState,createContext,useContext} from "react";
import './Example.css';

const CountContext=createContext();
function Counter(params) {
    let count=useContext(CountContext)
    return(
        <h2>子组件{count}</h2>
    )
}
export default ()=>{
    let [count,setCount] = useState(0);
    let handleAdd = ()=>setCount(count+1);
   
    return (
        <div>
            <p>example4-createContext父子组件传值函数</p>
            <button className="example2_button" onClick={handleAdd}>点击</button>
            <h5>父组件{count}</h5>
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}