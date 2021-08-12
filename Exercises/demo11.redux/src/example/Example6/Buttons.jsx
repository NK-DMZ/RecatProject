import React,{useContext} from 'react'
import { ColorContext,upadte_color } from './Color';
import './Example.css';
export default function Buttons() {
    const {dispatch}=useContext(ColorContext)
    return (
       <div>
           <button className="example1_button" onClick={()=>{dispatch({type:upadte_color,color:"red"})}}>红色</button>
           <button className="example1_button" onClick={()=>{dispatch({type:upadte_color,color:"yellow"})}}>黄色</button>
       </div>
    )
}
