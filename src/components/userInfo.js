
import React,{ Component } from 'react'
import { Spin, Button, Form, Input, Row, Col} from 'antd'
import { withRouter } from 'react-router-dom'
import QueuiAnim from 'rc-queue-anim'

const FormItem = Form.Item
const InputPassword = Input.Password

const InputChild = ({children}) => {
    if(children.type==='username'){
        return (
            <Input 
                addonAfter={children.addonAfter} 
                placeholder={children.placeholder} 
                allowClear
            />
        )
    }
    return (
        <InputPassword 
            addonAfter={children.addonAfter} 
            placeholder={children.placeholder} 
        />
        
    )
}

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.changeFrom = this.changeFrom.bind(this)
    }
    
    changeFrom(e) {
       localStorage.setItem("isLogin",true)
       localStorage.setItem("role","tenant,test") 
       this.props.history.push('/tenant?ev=int')
       console.log(this.props)
    }

    componentDidMount() {
        
    }
    render() {
        const userState = this.props.userState
        return (
            <>  
                <Spin spinning={userState.isSpin} tip={userState.tip}>
                    <QueuiAnim className="demo-content" delay={400}>
                        <Form labelAlign="left" {...userState.formTailLayout} onFinishFailed={this.changeFrom} key="a">
                            {
                                userState.tableList.map((item,index) =>{
                                    return (
                                        <FormItem label={item.label} name={item.name} rules={item.rules} key={index}>
                                            <InputChild  children={item.children}/>
                                        </FormItem>
                                    )
                                })
                            }
                            <Row>
                                <Col offset={4}>
                                    <Button type="link" danger onClick={this.props.ChangeLogin}>{userState.LinkTit}</Button>
                                </Col>
                                
                            </Row>
                            <Row justify="center">
                                <Col span={10}>
                                    <Button className="submitBtn" block htmlType="submit" type="primary">{this.props.children}</Button>
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