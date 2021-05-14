
import React,{ Component } from 'react';
import { Spin, Button, Form, Input, Row, Col, message} from 'antd';
import { withRouter } from 'react-router-dom';
import QueuiAnim from 'rc-queue-anim';
import { loginSalt, loginAuth} from '@/api/';
import { CancelToken } from 'axios';

const formTailLayout = {
    labelCol: { 
       xxl: {
            span: 4,
            offset: 2
       },
       xl: {
            span: 3,
            offset: 1
       },
       lg: {
           span: 3,
           offset: 2
       }
    },
    wrapperCol: { 
        xxl: {
            span: 16,
            offset: 0
       },
       xl: {
            span: 18,
            offset: 2
       },
       lg: {
            span: 17,
            offset: 2
        }
     }
}

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    async onFinish({ username, password }) {
        try {
            const { salt } = await loginSalt()
            const data = {
                username: username + "@intellicredit.cn",
                password: "007203bb1775f070dc27bad6c151950c253222cd" + salt
            }
            const result = await loginAuth(JSON.stringify(data))
            localStorage.setItem("isLogin",true)
            localStorage.setItem("username",result.username)
            localStorage.setItem("role","tenant,test") 
            this.props.history.push('/tenant?ev=int')
        } catch(e) {
            if(e.data?.message) {
                message.info(e.data.message)
            }
        }
    }

    onFinishFailed(err) {
        console.log('Failed:',err)
    }

    render() {
        const {userState} = this.props
        return (
            <>  
                <Spin spinning={userState.isSpin} tip={userState.tip}>
                    <QueuiAnim className="demo-content" delay={500}>
                        <Form 
                            key="form"
                            labelAlign="left" 
                            {...formTailLayout} 
                            onFinish={value => this.onFinish(value)}
                            onFinishFailed={errorInfo => this.onFinishFailed(errorInfo)} 
                        >
                            {
                                userState.tableList.map(({label,name,rules,children}) =>
                                    <Form.Item 
                                        label={label} name={name} 
                                        rules={rules} key={name}
                                    >
                                        {   
                                            children.type==="username" ? 
                                            <Input 
                                                addonAfter={children.addonAfter} 
                                                placeholder={children.placeholder} 
                                                allowClear
                                            />
                                            :
                                            <Input.Password 
                                                addonAfter={children.addonAfter} 
                                                placeholder={children.placeholder} 
                                            />
                                        }
                                    </Form.Item>
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