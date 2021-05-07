import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Steps, Input, InputNumber, Upload, Button, Select, Checkbox, Table, Switch, Tag } from 'antd'
import { FileDoneOutlined, BranchesOutlined, UngroupOutlined, CloseOutlined, UploadOutlined } from '@ant-design/icons'
import '@/common/less/new-tenant.less'
const { Step } = Steps
const { Option } = Select

export default class NewTenant extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stepList: [
                {
                    title: '机构信息填写',
                    status: 'finish',
                    icon: <FileDoneOutlined />
                },
                {
                    title: '服务科目配置',
                    status: 'wait',
                    icon: <BranchesOutlined />
                },
                {
                    title: '规则开通',
                    status: 'wait',
                    icon: <UngroupOutlined />
                }
            ],
            current: 0,
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
        this.handleChange = this.handleChange.bind(this)
        // this.activeRuleAll = this.activeRuleAll.bind(this)
    }

    static propTypes = {
        current: PropTypes.number
    }

    //点击步骤条
    handleChange(value) {
        this.setState({
            current: value
        })
    }

    handleNext = () => {
        this.setState((oldState) => {
            if(oldState.current < 2){
                return {
                    current: oldState.current + 1
                }
            }
            
        })
    }

    handlePrev = () => {
        this.setState((oldState) => {
            if(oldState.current > 0){
                return {
                    current: oldState.current - 1
                }
            }
            
        })
    }

    handleswitch(e) {
        console.log(e.target.checked);
    }

    activeRuleAll(e) {
        this.setState({
            isloading: true
        })
        this.timer = setTimeout(() =>{
            let rulelist = this.state.ruleDataSource
            rulelist.map(item =>
                item.store = e.target.checked
            )
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
        const { stepList, current, ruleDataSource, ruleColumns, isloading } = this.state
        return (
            <div className="new-tenant-container">
                <div className="popup-container">
                    <div className="popup-con">
                        <div className="steps-header">
                            <Steps size="small" current={current} onChange={this.handleChange}>
                                {
                                    stepList.map(
                                            (item,index) => 
                                                <Step 
                                                    key={item.title} status={current >= index ? 'finish' : item.status} 
                                                    title={item.title} icon={item.icon} />
                                        )

                                }
                            </Steps>
                            <CloseOutlined onClick={this.props.CloseOff} />
                        </div>
                        <div className="steps-form" hidden={current%3 !== 0}>
                            <div className="steps-form-scroll">

                                <span className="steps-form-item">
                                    <label htmlFor="tenantName">机构全称:</label>
                                    <Input id="tenantName" placeholder="请输入机构全称" />
                                </span>
                                <span className="steps-form-item">
                                    <label>电话:</label>
                                    <Input placeholder="请输入电话" />
                                </span>
                                <span className="steps-form-item">
                                    <label>电子邮件:</label>
                                    <Input placeholder="请输入电子邮件" />
                                </span>
                                <span className="steps-form-item">
                                    <label>地址:</label>
                                    <Input.TextArea placeholder="请输入地址" />
                                </span>
                                <span className="steps-form-item">
                                    <label>营业执照:</label>
                                    <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture"
                                        // defaultFileList={[...fileList]}
                                        className="upload-list-inline">
                                        <Button icon={<UploadOutlined />}>上传执照</Button>
                                    </Upload>
                                </span>

                                <span className="steps-form-item">
                                    <label>机构描述:</label>
                                    <Input.TextArea placeholder="请输入机构描述" />
                                </span>
                                <span className="steps-form-item">
                                    <label>平台ID:</label>
                                    <InputNumber min={1}  type="number"/>
                                </span>
                                <span className="steps-form-item">
                                    <label>机构类型:</label>
                                    <Select value={1}>
                                        <Option value={1}>P2P</Option>
                                        <Option value={2}>中大型商业银行</Option>
                                        <Option value={3}>城市商业银行</Option>
                                        <Option value={4}>农商行</Option>
                                        <Option value={5}>民营银行</Option>
                                        <Option value={6}>消费金融公司</Option>
                                        <Option value={7}>小额贷款公司</Option>
                                    </Select>
                                </span>
                                <span className="steps-form-item">
                                    <label>贷款类型(新):</label>
                                    <Select value={1}>
                                        <Option value={1}>小额信贷</Option>
                                        <Option value={2}>中大额信贷</Option>
                                        <Option value={3}>消费分期</Option>
                                        <Option value={4}>信用卡</Option>
                                        <Option value={5}>信用卡代偿</Option>
                                        <Option value={6}>车贷</Option>
                                        <Option value={7}>借条</Option>
                                    </Select>
                                </span>
                                <span className="steps-form-item">
                                    <label>机构类型(旧):</label>
                                    <Select value={1}>
                                        <Option value={1}>现金贷</Option>
                                        <Option value={2}>小额贷款</Option>
                                        <Option value={3}>P2P</Option>
                                        <Option value={4}>车辆抵押贷款</Option>
                                        <Option value={5}>房贷</Option>
                                        <Option value={6}>电商平台</Option>
                                        <Option value={7}>大学生分期</Option>
                                    </Select>
                                </span>
                               
                            </div>
                            <div className="steps-tenant-btn">
                                <Button className="submitBtn" type="primary" onClick={this.handleNext}>下一步</Button>
                            </div>
                        </div>
                        <div className="steps-form" hidden={current%3 !== 1}>
                            <div className="steps-form-scroll">
                                <div className="steps-card-con">
                                    <Checkbox className="check-card" onChange={this.handleswitch}>
                                        神月
                                    </Checkbox>
                                    <div className="card-warp">
                                        <span className="steps-form-item">
                                            <label htmlFor="tenantName">客户类型:</label>
                                            <Select placeholder="请输入机构全称" value="0">
                                                <Option value="0">上报数据客户</Option>
                                                <Option value="1">只查不报客户</Option>
                                            </Select>
                                        </span>
                                        <span className="steps-form-item">
                                            <label>查询总量限制:</label>
                                            <InputNumber placeholder="查询总量限制" />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>初始上报数据量预置:</label>
                                            <InputNumber placeholder="上报数据量预置" />
                                        </span>
                                        <span className="steps-form-item" >
                                            <label>合理查报比:</label>
                                            <Input placeholder="输入合理查报比" addonAfter={'%'} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>异常查报比:</label>
                                            <Input placeholder="异常查报比" addonAfter={'%'} />
                                        </span>
                                    </div>
                                    <h4>推送V1配置</h4>
                                    <div className="sys-config">
                                        <span className="steps-form-item">
                                            <label>时间窗口:</label>
                                            <InputNumber defaultValue={0} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>触发百分比:</label>
                                            <Input defaultValue={0} min={0} addonAfter={'%'} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>不同贷款申请机构数:</label>
                                            <InputNumber defaultValue={0} min={0} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>共债余额:</label>
                                            <InputNumber defaultValue={0} min={0} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>查询次数:</label>
                                            <InputNumber defaultValue={0} min={0} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>共债机构数:</label>
                                            <InputNumber defaultValue={0} min={0} />
                                        </span>
                                    </div>
                                </div>
                                <div className="steps-card-con">
                                    <Checkbox className="check-card" onChange={this.handleswitch}>
                                        宙斯盾
                                    </Checkbox>
                                    <h4>推送V1配置</h4>
                                    <div className="sys-config">
                                        <span className="steps-form-item">
                                            <label>时间周期:</label>
                                            <InputNumber defaultValue={0} min={0} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>申请次数:</label>
                                            <InputNumber defaultValue={0} min={0} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>申请机构数:</label>
                                            <InputNumber defaultValue={0} min={0} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>借贷机构数:</label>
                                            <InputNumber defaultValue={0} min={0} />
                                        </span>
                                        <span className="steps-form-item">
                                            <label>共债总余额:</label>
                                            <InputNumber defaultValue={0} min={0} />
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="steps-form-btn">
                                <Button className="submitBtn" type="default" onClick={this.handlePrev}>上一步</Button>
                                <Button className="submitBtn" type="primary" onClick={this.handleNext}>下一步</Button>
                            </div>
                        </div>
                        <div className="steps-rule" hidden={current%3 !== 2}>
                            <div className="steps-rule-con">
                                <div className="steps-rule-table">
                                    <Table 
                                        dataSource={[...ruleDataSource]} 
                                        columns={ruleColumns} 
                                        scroll={{x:'100%',y:400}} 
                                        size={'middle'}
                                        pagination={false}
                                        loading={isloading}
                                        bordered
                                    />
                                    <div className="steps-rule-btn">
                                        <Button className="submitBtn" type="default" onClick={this.handlePrev}>上一步</Button>
                                        <Button className="submitBtn" type="primary" onClick={this.handleNext}>提交</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

