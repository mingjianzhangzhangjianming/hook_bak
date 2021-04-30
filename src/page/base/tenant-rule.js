import React,{ Component } from 'react'
import { Table, Tag, Switch, Checkbox, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
export default class TenantRule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloading: false,
            ruleColumns: [
                {   
                    key: 'ruleName',
                    width: '15%',
                    align: 'center',
                    title: '规则名',
                    dataIndex: 'ruleName'
                },
                {   
                    key: 'describe',
                    width: '60%',
                    align: 'center',
                    title: '规则描述',
                    dataIndex: 'describe',
                    ellipsis: true
                },
                {   
                    key: 'ischarge',
                    width: '10%',
                    align: 'center',
                    title: '收费情况',
                    dataIndex: 'ischarge',
                    render: (text) => (
                        text 
                            ? <Tag color="magenta">收费</Tag> 
                            : <Tag color="cyan">免费</Tag>
                    )
                },
                {
                    key: 'store',
                    width: '15%',
                    align: 'center',
                    title: (
                        <Checkbox className="check-card" defaultChecked={false} onChange={this.activeRuleAll.bind(this)}>
                            状态
                        </Checkbox>
                    ),
                    dataIndex: 'store',
                    render: (text,record,index) => (<Switch checked={text} onChange={this.activeRuleOne.bind(this,index)} />)
                }
                
            ],
            ruleDataSource: [
                {
                    key: 'ruleName1',
                    ruleName: 'ZZC_IDC0001',
                    describe: '身份证号码与姓名不匹配',
                    store: false,
                    ischarge: false
                },
                {
                    key: 'ruleName2',
                    ruleName: 'ZZC_IDC0002',
                    describe: '身份证号码与姓名不匹配',
                    store: true,
                    ischarge: false,
                },
                {
                    key: 'ruleName3',
                    ruleName: 'ZZC_IDC0003',
                    describe: '申请人证件号码与黑名单证件号码相同',
                    store: true,
                    ischarge: true
                },
                {
                    key: 'ruleName4',
                    ruleName: 'ZZC_IDC0004',
                    describe: '手机号码与姓名不匹配',
                    store: true,
                    ischarge: false
                },
                {
                    key: 'ruleName5',
                    ruleName: 'ZZC_IDC0005',
                    describe: '申请人姓名和证件号码与黑名单姓名和证件号码均相同',
                    store: true,
                    ischarge: true
                },
                {
                    key: 'ruleName6',
                    ruleName: 'ZZC_IDC0006',
                    describe: '申请人电子邮件地址与黑名单电子邮件地址相同',
                    store: true,
                    ischarge: false
                },
            ]
        }
    }

    activeRuleAll(e) {
        this.setState({
            isloading: true
        })
        this.timer = setTimeout(() =>{
            let rulelist = this.state.ruleDataSource
            rulelist.map((item,index) =>{
                item.store = e.target.checked
            })
            console.log(rulelist)
            this.setState({
                ruleDataSource: rulelist,
                isloading: false
            })
            clearTimeout(this.timer)
            console.log(this.state.ruleDataSource)
        },400)
        
    }

    activeRuleOne(current,checked) {
        console.log(current)
        let rulelist = this.state.ruleDataSource
        rulelist[current].store = checked
        this.setState({
            ruleDataSource: rulelist
        })
        console.log(this.state.ruleDataSource,checked)
    }
    
    render() {
        const { isloading, ruleColumns, ruleDataSource } = this.state
        return (
            <div className="tenant-rule-box">
                <div className="table-menu">
                    <span className="full-view"></span>
                    <Button 
                        className="submitBtn" 
                        icon={<PlusOutlined />} 
                        type="primary"
                        onClick={this.CloseOpen}>编辑</Button>
                </div>
                <div className="table-box">
                    <Table 
                        onRow={record =>{
                            return {
                                onDoubleClick: event =>{
                                    this.navtionToDetail(record)
                                }
                            }
                        }}
                        loading={isloading}
                        columns={ruleColumns} 
                        dataSource={ruleDataSource} 
                        scroll={{y:500}} 
                        size={'small'}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        )
    }
}
