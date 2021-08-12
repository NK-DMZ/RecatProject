import React,{useRef} from 'react'
export default function Example8(params) {
    const inputexample=useRef(null)
    const onButtonclick=()=>{
        inputexample.current.value="你好！"
        console.log(inputexample);
    }
    return(
        <div>
            <p>example7-useMemo函数解决子组件重复执行问题</p>
            <input ref={inputexample} type="text" />
            <button onClick={onButtonclick}>在input上显示文字</button>
        </div>
    )
}