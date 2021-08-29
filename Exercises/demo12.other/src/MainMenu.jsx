import React, { Component } from 'react';
import './index.css'
export default class MainMenu extends Component {
    render() {
        return (
            <div className='menu_div'>
                <a href="/ES">ES语法</a>
                <br />
                <hr />
                <ul className='app_ul'>
                    <li><a href="/AssignDemo">AssignDemo</a></li>
                    <li><a href="/AwaitandAsync">AwaitandAsync</a></li>
                    <li><a href="/CopytoClipboard">CopytoClipboard</a></li>
                    <li><a href="/InputdemoRef">Inputdemo</a></li>
                    <li><a href="/InputdemoState">InputdemoState</a></li>
                    <li><a href="/JsonDatause">JsonDatause</a></li>
                    <li><a href="/ObjectPush">ObjectPush</a></li>
                    <li><a href="/ObjectStatechange">ObjectStatechange</a></li>
                    <li><a href="/SetStatedome">SetStatedome</a></li>
                    <li><a href="/SwitchChange">SwitchChange</a></li>
                    <li><a href="/TableUse">TableUse</a></li>
                    <li><a href="/TablefieldFuzzyQuery">TablefieldFuzzyQuery</a></li>
                    <li><a href="/TableSortingandscreening">TableSortAndScreen</a></li>
                </ul>
                <hr className="menu_hr"/>
                <h5 >组件中传值</h5>
                <ul className="app_ul_transfer">
                    <li><a href="/Parent">Parent-child value transfer父传子</a></li>
                </ul>
                <hr className="menu_hr"/>
                <pre className='app_pre'>
                <p>AssignDemo              assign对象累加用法</p>
                <p>AwaitandAsync           JS中的async/await的用法和理解</p>
                <p>CopytoClipboard         复制到粘贴板</p>
                <p>InputdemoRef            ref输入框数据输入</p>
                <p>InputdemoState          受控组件state输入</p>
                <p>JsonDatause             json数据使用</p>
                <p>ObjectPush              object对象push方法使用</p>
                <p>ObjectStatechange       state中的对象修改</p>
                <p>SetStatedemo            setState同步异步问题</p>
                <p>SwitchChange            switch通过弹窗状态修改</p>
                <p>TablefieldFuzzyQuery    根据姓名字段进行查询</p>
                <p>TableSortingandscreening  antd中table查询与筛选</p>
                <p>TableUse</p>  
                <p>antd中的table部分使用，包括编号排序，转换页面后编号顺序排序，点击按钮获取当前行数信息<br />
                （只能获取data中的，编号index不是data赋值的，项目中的ID和编号不是一个，ID是传过来的，<br />编号是我们自己加上的）
                </p>
                </pre>
            </div>
        );
    }
}
