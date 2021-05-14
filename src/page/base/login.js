
import React,{ Component } from 'react';
import { Select } from 'antd';
import UserInfo from '@/components/userInfo';
import '@/common/less/login.less';
import { regExpConfig } from '@/common/js/regExpConfig';

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
            isLoginForm: true,
            userLogin: {
                type: "login",
                LinkTit: "修改密码",
                isSpin: false,
                tip:"登陆中...",
                //表单项列表数据
                tableList: [
                    {
                        label: "用户名",
                        name: "username",
                        rules: [
                            { 
                                pattern: regExpConfig.isAlpha,
                                message: "用户名必须为大小写字母!"
                            },
                            { 
                                required: true, 
                                message: "请输入你的用户名!"
                            }
                        ],
                        children:{
                            type: 'username',
                            addonAfter: selectAfter,
                            placeholder: '请输入公司邮箱前部分'
                        }
                    },
                    {
                        label: "密码",
                        name: "password",
                        rules: [
                            { 
                                pattern: regExpConfig.strictPwd,
                                message: "密码中必须为8 ~ 20个字符, 包含大小写字母、数字、特殊字符"
                            },
                            { required: true, message: '请输入你的密码!'}
                        ],
                        children:{
                            type: 'password',
                            addonAfter: null,
                            placeholder: '请注意大小写!'
                        }
                    }
                ]
            
            },
            userChange: {
                type: "changePassword",
                LinkTit: '返回登录',
                isSpin: false,
                tip:"正在保存...",
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
                        rules: [{ required: true, min: 8, max: 20, message: '请输入你最初的密码!' }],
                        children:{
                            type: 'oldpassword',
                            addonAfter: null,
                            placeholder: '请输入原始密码'
                        }
                    },
                    {
                        label: "新密码",
                        name: "newpassword",
                        rules: [{ required: true, min: 8, max: 20, message: '输入新密码!' }],
                        children:{
                            type: 'newpassword',
                            addonAfter: null,
                            placeholder: '输入新密码'
                        }
                    },
                    {
                        label: "确认密码",
                        name: "confirmpassword",
                        rules: [{ required: true, min: 8, max: 20, message: '请再次确认新密码!' }],
                        children:{
                            type: 'confirmpassword',
                            addonAfter: null,
                            placeholder: '再次确认新密码'
                        }
                    }
                ]
            
            }
        }
        this.handleChangeForm = this.handleChangeForm.bind(this)
    }

    handleChangeForm() {
        let { isLoginForm }  = this.state
        this.setState({
            isLoginForm: !isLoginForm
        })
    }

    render() {
        const { isLoginForm, userLogin, userChange } = this.state
        return(
            <div className="login-content">
                <div className="content-left">
                    <strong>Admin Tool</strong>
                    <h5>Copyright  2020 中智诚征信技术部出品</h5>
                </div>
                <div className="content-right">
                    {
                        isLoginForm ? 
                        <UserInfo 
                            userState={userLogin} 
                            ChangeLogin={this.handleChangeForm}>
                                登 录
                        </UserInfo> : 
                        <UserInfo 
                            userState={userChange} 
                            ChangeLogin={this.handleChangeForm}>
                                保 存
                        </UserInfo>
                    }
                </div>
            </div>   
        )
    }
}
