/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import './Example.css';
function Example1() {
    const [age, setAge] = useState(18)
    return(
        <div>
            <p>example1——useState状态函数</p>
            <button className="example1_button" onClick={()=>setAge(age+1)}>点击</button>
            <h5>今年：{age}</h5>
        </div>
    )
}
export default Example1

// import React,{useState} from "react";

// export default ()=>{
//     let [count,setCount] = useState(0);
//     let handleAdd = ()=>setCount(count+1);
//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={handleAdd}>点击</button>
//         </div>
//     )
// }