import React, { Component } from 'react'
import { NavBar, Icon, InputItem, Button, Toast } from 'antd-mobile';
import './index.less'
import { phonereg,codereg } from '../../config/reg';
import { codetime } from '../../config/contants';

export default class Login extends Component {
    state={
        // 存储手机号
        phone:'',
        // 存储验证码 
        code:'',
        //按钮等待时间
        time:codetime,
        // 按钮是否可以点击
        canclick:true
    }
    // 登陆按钮的回调
    // login=()=>{
    //     const{phone,code}=this.state
    //     if(!phone ) return Toast.fail('请输入合法的手机号',3); 
    //     else if(!code) return Toast.fail('请输入合法的验证码',3); 
    // }
    //优化版本
    login=()=>{
        const{phone,code}=this.state
        this.phoneerr=false
        this.codeerr=false
        if(!phone ) this.phoneerr=true
        if(!code) this.codeerr=true
        let errmsg='请输入合法的'
        errmsg += this.phoneerr?' 手机号':''
        errmsg +=this.codeerr?'  验证码':''
        if(this.phoneerr||this.codeerr)
        return Toast.fail(errmsg)
        console.log(`手机号：${phone},验证码：${code}`);
    }
    // 获取验证码按钮的回调
    getcode=()=>{
        // 从状态中获取按钮状态、时间
        const {canclick,phone}=this.state
        //判断按钮是否可以点击
        if(!canclick) return
        // 若手机号为空不能点击获取验证码
        else if(!phone) return Toast.fail('请输入合法的手机号',3); 
        // 让按钮不可点击
        this.setState({canclick:false})
        // 开启定时器——更新时间
        this.timeid=setInterval(()=>{
            const {time}=this.state
            // 更新状态中的时间
            this.setState(state=>({time:time-1}))
            // 如果时间小于0，清除定时器，让按钮再次可以点击
            if(time<=0){
                // 清除定时器
                clearInterval(this.timeid)
                // 让按钮可以点击
                this.setState({canclick:true,time:codetime})
            } 
        },1000)

        this.setState({canclick:false})
        console.log('输出专用');
    }

    // 保存用户输入
    /**
     * 
     * @param {存储数据的类型} type 
     * @returns 
     */
    saveDate=(type)=>{
        return(value)=>{
            //两种方法可以实现
            // if(type==='phone'&&phonereg.test(value)){
            //     this.setState({[type]:value})
            // }else if(type==='code'&&codereg.test(value)){
            //     this.setState({[type]:value})
            // }else{
            //     this.setState({[type]:''})
            // }
            if(type==='phone'&&!phonereg.test(value)) value=''
            else if(type==='code'&&!codereg.test(value)) value=''
            this.setState({[type]:value})
        }
    }
    render() {
        const {canclick,time}=this.state
        return (
            <div>
                {/* 顶部导航区 */}
                <NavBar
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}>手机验证登陆</NavBar>
                {/* 内容区 */}
                <div className="login_content">
                    {/* 手机号输入区域 */}
                   <div className="mobile">
                    <InputItem
                        onChange={this.saveDate('phone')}
                        clear
                        placeholder="请输入手机号"
                        ref={el => this.autoFocusInst = el}
                        >手机号</InputItem>
                   </div>

                    {/* 验证码输入区域 */}
                    <div className="code_group">
                        <InputItem
                            className='codeinput'
                            onChange={this.saveDate('code')}
                            clear
                            placeholder="请输入6位数验证码"
                            ref={el => this.autoFocusInst = el}
                            >验证码</InputItem>
                        <button 
                            className={canclick?"getcode_btn active":"getcode_btn disable" }
                            onTouchEnd={this.getcode}
                            disabled={this.state.canclick?false:true}
                            >
                            获取验证码{canclick?'':`(${time})`}
                        </button>
                    </div>

                    {/* 登陆按钮 */}
                    <div className="btn"> <Button type="primary" onTouchEnd={this.login}>登陆</Button></div>

                    {/* 底部说明 */}
                    <div className="footer">
                        未注册的手机号，验证后自动创建账号，登陆即代表同意
                        <a href="https://game.qq.com/privacy_guide.shtml?ADTAG=gamepcbottom">腾讯游戏隐私保护指引</a>
                    </div>
                </div>
                
            </div>
        )
    }
}
