import React, { Component } from 'react'
import MainMenu from '../MainMenu'
import './common.css'

export default class CopytoClipboard extends Component {
    constructor(props){
		super(props);
		this.state = {
			writevalue:'写入数据到粘贴板吧！'
		}
	}
    copyinput=()=>{
        const input = document.querySelector('#demoInput');
        input.select();
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            console.log('复制成功');
        }
    }
    copyText=()=> {
        console.log('函数在运行');
        var text = document.getElementById("text").innerText;
        var input = document.getElementById("input");
        input.value = text; // 修改文本框的内容
        input.select(); // 选中文本
        document.execCommand("copy"); // 执行浏览器复制命令
        alert("复制成功");
    }
    writecontent=()=>{
        var textareaEl = document.createElement('textarea');
        textareaEl.setAttribute('readonly', 'readonly'); // 防止手机上弹出软键盘
        textareaEl.value = this.state.writevalue;
        document.body.appendChild(textareaEl);
        textareaEl.select();
        document.execCommand('copy');
        document.body.removeChild(textareaEl);
    }
    render() {
        // const btnCopy = new Clipboard('btn');
        return (
            <div>
                <h1>JavaScript复制内容到剪贴板</h1>
                <div className="copyinpiut">
                    <h3>复制input标签内容</h3>
                    <input type="text" id="demoInput" defaultValue="hello world"  />
                    <button data-clipboard-target="#demoInput" onClick={this.copyinput} >点我复制</button>
                    <hr />                   
                </div>
                <div className="copyp">
                    <h3>复制p标签内容</h3>
                    <p id="text">我把你当兄弟你却想着复制我？</p><button onClick={this.copyText}>copy</button>
                    {/* <textarea id="input">这是幕后黑手</textarea> */}
                    <textarea id="input" defaultValue="这是幕后黑手" ></textarea>
                    <hr />
                </div>
                <div className="WritePasteboard">
                    <h3>写入数据进入粘贴板</h3>
                    <button onClick={this.writecontent}>写入数据进入粘贴板</button>
                </div>
                <div className="verification">
                    <input type="text" />
                </div>
               
                <MainMenu></MainMenu>
            </div>
        )
    }
}
/*
定义和用法
appendChild() 方法可向节点的子节点列表的末尾添加新的子节点。
提示：如果文档树中已经存在了 newchild，它将从文档树中删除，然后重新插入它的新位置。
如果 newchild 是 DocumentFragment 节点，则不会直接插入它，而是把它的子节点按序
插入当前节点的 childNodes[] 数组的末尾。
你可以使用 appendChild() 方法移除元素到另外一个元素。

添加列表项:
document.getElementById("myList").appendChild(newListItem);

转移某个列表项到另外一个列表项：
var node=document.getElementById("myList2").lastChild;
document.getElementById("myList1").appendChild(node);


HTMLInputElement.setSelectionRange()
HTMLInputElement.setSelectionRange 方法用于设定<input> 或 <textarea> 元素中当前选中文本的起始和结束位置。

在较新的浏览器中，你可以通过一个可选的 selectionDirection 来指定文本选中的方向。比如通过点击和拖动从结束位置往起始位置选中一个字符串。

每次调用这个这个方法都会更新 HTMLInputElement 的 selectionStart, selectionEnd 和 selectionDirection 属性。

要注意的是，在 WHATWG forms spec 中，selectionStart, selectionEnd 属性和 setSelectionRange 方法只能应用于类型为文本、搜索、链接、电话号码和密码的输入。
Chrome 从版本 33 开始会在访问其余类型的这些属性和方法时抛出异常。例如，输入类型为数字时会抛出：“不能从'HTMLInputElement'中读取'selectionStart'属性：
输入元素的类型('number')不支持选择（Failed to read the 'selectionStart' property from 'HTMLInputElement': The input element's type ('number') does not support selection）”。
如果你希望全选输入元素中的文本，你可以使用 HTMLInputElement.select() 方法。
语法
element.setSelectionRange(selectionStart, selectionEnd [, selectionDirection]);
参数
如果 selectionEnd 小于 selectionStart，则二者都会被看作 selectionEnd。
selectionStart
被选中的第一个字符的位置索引，从0开始。如果这个值比元素的 value 长度还大，则会被看作 value 最后一个位置的索引。
selectionEnd
被选中的最后一个字符的 下一个 位置索引。如果这个值比元素的value长度还大，则会被看作value最后一个位置的索引。
selectionDirection 可选
一个表示选择方向的字符串，可能的值有：
"forward"
"backward"
"none" 默认值，表示方向未知或不相关。
https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement/setSelectionRange
*/