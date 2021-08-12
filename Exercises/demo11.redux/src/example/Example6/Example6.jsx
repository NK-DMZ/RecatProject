/* eslint-disable import/no-anonymous-default-export */
import React,{} from "react";
import './Example.css';
import Buttons from "./Buttons";
import ShowArea from "./ShowArea";
import {Color} from "./Color";

export default ()=>{
    return (
        <div>
            <p>example6</p>
            <Color>
                <ShowArea></ShowArea>
                <Buttons></Buttons>
            </Color>
        </div>
    )
}