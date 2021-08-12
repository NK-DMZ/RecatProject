/* eslint-disable import/no-anonymous-default-export */
import React,{useReducer} from "react";
import './Example.css';

export default ()=>{
    const [count, dispatch] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1
            case 'cut':
                return state-1
            default:
                return state
        }
    }, 0)
    return (
        <div>
            <p>example5-useReducer函数</p>
            <h2>现在的分数是{count}</h2>
            <button className="example2_button" onClick={()=>{dispatch('add')}}>add</button>
            <button className="example2_button" onClick={()=>{dispatch('cut')}}>cut</button>
        </div>
    )
}