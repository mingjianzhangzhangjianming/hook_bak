
import React,{ Component } from 'react'
import { Select } from 'antd'
import '@/common/less/login.less'
import QueuiAnim from 'rc-queue-anim'
import UserInfo from '@/components/userInfo'
import Axios from '@/api/index.js'

const { Option } = Select
const selectAfter = (
    <Select defaultValue="@intellicredit.cn" className="select-after">
        <Option value="@intellicredit.cn">@intellicredit.cn</Option>
    </Select>
)

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true,
            userLogion: {
                LinkTit: '修改密码',
                isSpin: false,
                tip:"登陆中...",
                formTailLayout: {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 18 }
                },
                //表单项列表数据
                tableList: [
                    {
                        label: "用户名",
                        name: "username",
                        rules: [{ required: true, message: "请输入你的用户名!"}],
                        children:{
                            type: 'username',
                            addonAfter: selectAfter,
                            placeholder: '请输入公司邮箱前部分'
                        }
                    },
                    {
                        label: "密码",
                        name: "password",
                        rules: [{ required: true, min: 6, max: 16, message: '请输入你的密码!' }],
                        children:{
                            type: 'password',
                            addonAfter: null,
                            placeholder: '请注意大小写!'
                        }
                    }
                ]
            
            },
            userChange: {
                LinkTit: '返回登录',
                isSpin: false,
                tip:"正在保存...",
                formTailLayout: {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 18 }
                },
                //表单项列表数据
                tableList: [
                    {
                        label: "用户名",
                        name: "username",
                        rules: [{ required: true, message: "请输入你的用户名!"}],
                        children:{
                            type: 'username',
                            addonAfter: selectAfter,
                            placeholder: '请输入公司邮箱前部分'
                        }
                    },
                    {
                        label: "旧密码",
                        name: "oldpassword",
                        rules: [{ required: true, min: 6, max: 16, message: '请输入你最初的密码!' }],
                        children:{
                            type: 'oldpassword',
                            addonAfter: null,
                            placeholder: '请输入原始密码'
                        }
                    },
                    {
                        label: "新密码",
                        name: "newpassword",
                        rules: [{ required: true, min: 6, max: 16, message: '输入新密码!' }],
                        children:{
                            type: 'newpassword',
                            addonAfter: null,
                            placeholder: '输入新密码'
                        }
                    },
                    {
                        label: "确认密码",
                        name: "confirmpassword",
                        rules: [{ required: true, min: 6, max: 16, message: '请再次确认新密码!' }],
                        children:{
                            type: 'confirmpassword',
                            addonAfter: null,
                            placeholder: '再次确认新密码'
                        }
                    }
                ]
            
            }
        }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin() {
        let { isLogin }  = this.state
        this.setState({
            isLogin: !isLogin
        })
    }
    
    loginRequset = async () => {
        // http://localhost:3000/#/login
        const salt = await Axios.get('/iceApi/api/v1/admintool/salt')
        console.log(salt)
        return await Axios.post('/iceApi/api/v1/admintool/auth',
                        {
                            "username":"zhangjianming@intellicredit.cn",
                            "password":"007203bb1775f070dc27bad6c151950c253222cd"+"40247fcf7c2e34aa2d7cdf662bcd79fa"
                        }
        )
        // try{
        //     const response = await axios.get('/user?id=123');
        //     console.log(response)
        //  }  catch (error) {
        //     console.error(error)  
        //  }
    }

    componentDidMount() {
        this.loginRequset()
        .then(res => 
            console.log(res)
        ).catch(
            err => console.log(err)
        )
    }

    render() {
        const { isLogin, userLogion, userChange } = this.state
        return(

            <div className="login-content">
                <div className="content-left">
                    <strong>Admin Tool</strong>
                    <h5>Copyright  2020 中智诚征信技术部出品</h5>
                </div>
                <div className="content-right">
                    <QueuiAnim className="form-content" delay={400}>
                        {
                            isLogin ? <UserInfo 
                                        userState={userLogion} 
                                        ChangeLogin={this.handleLogin} 
                                        key={Date.now()}>登 录</UserInfo>
                                    : <UserInfo 
                                        userState={userChange} 
                                        ChangeLogin={this.handleLogin} 
                                        key={Date.now()} >保 存</UserInfo>
                        }
                    </QueuiAnim>
                </div>
            </div>
            
        )
    }
}
