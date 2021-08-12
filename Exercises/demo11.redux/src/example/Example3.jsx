/* eslint-disable import/no-anonymous-default-export */
import React,{useState,useEffect} from "react";
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
function Index() {
    useEffect(()=>{
        console.log("欢迎来到首页组件");
        return ()=>{
            console.log("首页离开了");
        }
    },[])
    return <h1>这是首页</h1>
}
function List(params) {
    useEffect(()=>{
        console.log("欢迎来到列表组件");
    })
    return <h2>Listpage</h2>
}
function Count(params) {
    let [count,setCount] = useState(0);
    let [num,setNum] = useState(0);
    let handleAdd =()=>setCount(count+1);
    let cutnum=()=>setNum(num-1);
    useEffect(() => {
        console.log(`you clicked ${count}`);
        return () => {
            console.log("已经离开count组件");
        }
    //如果数组中有值时，则该值更新时，useEffect 中的函数才会执行
    // }, [count])
    //如果数组为空时，则只执行一次（相当于componentDidMount）
    // eslint-disable-next-line 
    // }, [])
    //如果没有第二个参数，则每次render时，useEffect 中的函数都会执行；
    })
    // 直观体现在：
    // 执行}, [count])时，点击count按钮会执行return内容，点击num则不会
    // 执行}, [])时，第一次执行完log内容后，不管点击count按钮还是num按钮都不会执行return内容
    // 执行})时，不管点击count还是num按钮都会执行return内容
    return  <div>
        <button className="example2_button" onClick={handleAdd}>增加count</button>
        <button className="example2_button" onClick={cutnum}>减少num</button>
        <h5>需要同时打开控制台count:{count}和num:{num}</h5>
    </div>
}

export default ()=>{
    return (
        <div>
            <p>example3-useEffect生命周期函数解绑使用</p>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                    <li><Link to="/count">计数</Link></li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list" exact component={List} />
                <Route path="/count" exact component={Count} />
            </Router>
        </div>
    )
}
