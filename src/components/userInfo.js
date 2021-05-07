
import React,{ Component } from 'react';
import { Spin, Button, Form, Input, Row, Col, message} from 'antd';
import { withRouter } from 'react-router-dom';
import QueuiAnim from 'rc-queue-anim';
import { loginSalt, loginAuth} from '@/api/';

const FormItem = Form.Item
const InputPassword = Input.Password



class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    onFinish({ username, password }) {
        loginSalt().then(({salt}) => {
            if(!salt) {
                message.info("获取随机盐失败！")
                return
            }
            const data = {
                username: username + "@intellicredit.cn",
                password: "007203bb1775f070dc27bad6c151950c253222cd" + salt
            }
            loginAuth(JSON.stringify(data)).then(res => {
                localStorage.setItem("isLogin",true)
                localStorage.setItem("username",res.username)
                localStorage.setItem("role","tenant,test") 
                this.props.history.push('/tenant?ev=int')
            })
        }).catch(err => console.log(err))
   
    }

    onFinishFailed({ values }) {
        
    }
    componentDidMount() {
        const { type } = this.props.userState
        console.log(type)
    }

    render() {
        const userState = this.props.userState
        return (
            <>  
                <Spin spinning={userState.isSpin} tip={userState.tip}>
                    <QueuiAnim className="demo-content" delay={400}>
                        <Form 
                            key="form"
                            labelAlign="left" 
                            {...userState.formTailLayout} 
                            onFinish={value => this.onFinish(value)}
                            onFinishFailed={errorInfo => this.onFinishFailed(errorInfo)} 
                        >
                            {
                                userState.tableList.map(({label,name,rules,children}) =>
                                    <FormItem 
                                        label={label} 
                                        name={name} 
                                        rules={rules} 
                                        key={name}
                                    >
                                        {   
                                            children.type==="username" ? 
                                            <Input 
                                                addonAfter={children.addonAfter} 
                                                placeholder={children.placeholder} 
                                                allowClear
                                            />
                                            :
                                            <InputPassword 
                                                addonAfter={children.addonAfter} 
                                                placeholder={children.placeholder} 
                                            />
                                        }
                                    </FormItem>
                                )
                            }
                            <Row>
                                <Col offset={4}>
                                    <Button 
                                        danger 
                                        type="link" 
                                        onClick={this.props.ChangeLogin}
                                    >
                                        {userState.LinkTit}
                                    </Button>
                                </Col>
                                
                            </Row>
                            <Row justify="center">
                                <Col span={10}>
                                    <Button 
                                        className="submitBtn" 
                                        htmlType="submit" 
                                        type="primary" 
                                        block
                                    >
                                        {this.props.children}
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </QueuiAnim>
                </Spin>
            </>
        )
    }

}

export default withRouter(UserInfo)