/* eslint-disable import/no-anonymous-default-export */
import React,{useState,useEffect} from "react";
export default ()=>{
    const columnSum=columnSum;
    let [count,setCount] = useState(0);
    let handleAdd = ()=>setCount(count+1);
    useEffect(() => {
        console.log(`you clicked ${count}`);
    })
    return (
        <div>
            <p>example2-useEffect生命周期函数</p>
            <button className="example2_button" onClick={handleAdd}>点击</button>
            <h5>需要同时打开控制台{count}</h5>
        </div>
    )
}