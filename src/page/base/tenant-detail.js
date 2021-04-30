import React,{ Component } from 'react'
import { Affix, Button, Select, Checkbox, Input, InputNumber, Switch, Upload, Divider } from 'antd'
import { EditOutlined, FormOutlined, UploadOutlined } from '@ant-design/icons'
import '@/common/less/tenant-detail.less'
const { Option } = Select
export default class Tenantdetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloading: false,
            isEdit: true,//'save','edit'
        }
    }
    
    formStateChange = () => {
        this.setState({
            isloading: true
        })
        this.timer = setTimeout(() =>{
            this.setState((oldState) =>{
               clearTimeout(this.timer)
               return {
                    isloading: false,
                    isEdit: !oldState.isEdit
                }
            })
        },350)
        
    }

    render() {
        const { isloading, isEdit } = this.state
        return (
            <div className="tenant-detail-box">
               <div className="edit-detail">
                   <div className="edit-header" >
                        <span className="tenant-store">
                            <h3>机构状态</h3>
                            <Switch disabled={isEdit} defaultChecked={true} unCheckedChildren={'冻结'} checkedChildren={'开启'}  />
                        </span>
                        <Affix offsetTop={150}>
                            <Button 
                                onClick={this.formStateChange} 
                                type="primary" 
                                loading={isloading}
                                icon={isEdit ? <EditOutlined /> : <FormOutlined />}>
                                { isEdit ? '编辑' : '保存' }
                            </Button>
                        </Affix>
                   </div>
                   <div className="tenant-edit-form">
                        <div className="edit-form-box">
                            <span className="edit-from-item">
                                <label>机构ID:</label>
                                <InputNumber disabled={isEdit} min={1} value="1" type="number"/>
                            </span>
                            <span className="edit-from-item">
                                <label>机构全称:</label>
                                <Input disabled={isEdit} value="中智诚征信有限公司" placeholder="请输入机构全称" />
                            </span>
                            <span className="edit-from-item">
                                <label>电子邮件:</label>
                                <Input disabled={isEdit} value="admin@intellicredit.cn" placeholder="请输入电子邮件" />
                            </span>
                            <span className="edit-from-item">
                                <label>联系电话:</label>
                                <Input disabled={isEdit} value="010-56590521" placeholder="请输入电子邮件" />
                            </span>
                            <span className="edit-from-item">
                                <label>地址:</label>
                                <Input.TextArea disabled={isEdit} value="中智诚征信有限公司系民营第三方征信公司，在当前民间消费信贷和互联网金融蓬勃发展的形" placeholder="请输入地址" />
                            </span>
                            <span className="edit-from-item">
                                <label>机构描述:</label>
                                <Input.TextArea disabled={isEdit} value="中智诚征信有限公司系民营第三方征信公司，在当前民间消费信贷和互联网金融蓬勃发展的形势下， 致力于中国社会信用体系基础建设，成为专为老百姓服务的征信局。" placeholder="请输入机构描述" />
                            </span>
                            <span className="edit-from-item">
                                <label>平台ID:</label>
                                <InputNumber disabled={isEdit} value={1} min={1}  type="number"/>
                            </span>
                            <span className="edit-from-item">
                                <label>营业执照:</label>
                                <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture"
                                    defaultFileList={null}
                                    className="upload-list-inline">
                                    <Button disabled={isEdit} icon={<UploadOutlined />}>Upload</Button>
                                </Upload>
                            </span>
                            <span className="edit-from-item">
                                <label>机构类型:</label>
                                <Select disabled={isEdit} style={{ width: 256 }} value={1}>
                                    <Option value={1}>P2P</Option>
                                    <Option value={2}>中大型商业银行</Option>
                                    <Option value={3}>城市商业银行</Option>
                                    <Option value={4}>农商行</Option>
                                    <Option value={5}>民营银行</Option>
                                    <Option value={6}>消费金融公司</Option>
                                    <Option value={7}>小额贷款公司</Option>
                                </Select>
                            </span>
                            <span className="edit-from-item">
                                <label>贷款类型(新):</label>
                                <Select disabled={isEdit} style={{ width: 256 }} value={1}>
                                    <Option value={1}>小额信贷</Option>
                                    <Option value={2}>中大额信贷</Option>
                                    <Option value={3}>消费分期</Option>
                                    <Option value={4}>信用卡</Option>
                                    <Option value={5}>信用卡代偿</Option>
                                    <Option value={6}>车贷</Option>
                                    <Option value={7}>借条</Option>
                                </Select>
                            </span>
                            <span className="edit-from-item">
                                <label>机构类型(旧):</label>
                                <Select disabled={isEdit} style={{ width: 256 }} value={1}>
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
                        <Divider orientation="left" plain>
                            机构配置
                        </Divider>
                   </div>
                   <div className="tenant-config">
                        <div className="config-card-con">
                            <Checkbox disabled={isEdit} className="check-card">
                                神月
                            </Checkbox>
                            <div className="card-warp">
                                <span className="config-form-item">
                                    <label htmlFor="tenantName">客户类型:</label>
                                    <Select disabled={isEdit} placeholder="请输入机构全称" value="0">
                                        <Option value="0">上报数据客户</Option>
                                        <Option value="1">只查不报客户</Option>
                                    </Select>
                                </span>
                                <span className="config-form-item">
                                    <label>查询总量限制:</label>
                                    <InputNumber disabled={isEdit} placeholder="查询总量限制" />
                                </span>
                                <span className="config-form-item">
                                    <label>初始上报数据量预置:</label>
                                    <InputNumber disabled={isEdit} placeholder="上报数据量预置" />
                                </span>
                                <span className="config-form-item" >
                                    <label>合理查报比:</label>
                                    <Input disabled={isEdit} placeholder="输入合理查报比" addonAfter={'%'} />
                                </span>
                                <span className="config-form-item">
                                    <label>异常查报比:</label>
                                    <Input disabled={isEdit} placeholder="异常查报比" addonAfter={'%'} />
                                </span>
                            </div>
                            <h4>推送V1配置</h4>
                            <div className="sys-config">
                                <span className="config-form-item">
                                    <label>时间窗口:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} />
                                </span>
                                <span className="config-form-item">
                                    <label>触发百分比:</label>
                                    <Input disabled={isEdit} defaultValue={0} min={0} addonAfter={'%'} />
                                </span>
                                <span className="config-form-item">
                                    <label>不同贷款申请机构数:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} min={0} />
                                </span>
                                <span className="config-form-item">
                                    <label>共债余额:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} min={0} />
                                </span>
                                <span className="config-form-item">
                                    <label>查询次数:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} min={0} />
                                </span>
                                <span className="config-form-item">
                                    <label>共债机构数:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} min={0} />
                                </span>
                            </div>
                        </div>
                        <div className="config-card-con">
                            <Checkbox disabled={isEdit} className="check-card">
                                宙斯盾
                            </Checkbox>
                            <h4>推送V1配置</h4>
                            <div className="sys-config">
                                <span className="config-form-item">
                                    <label>时间周期:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} min={0} />
                                </span>
                                <span className="config-form-item">
                                    <label>申请次数:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} min={0} />
                                </span>
                                <span className="config-form-item">
                                    <label>申请机构数:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} min={0} />
                                </span>
                                <span className="config-form-item">
                                    <label>借贷机构数:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} min={0} />
                                </span>
                                <span className="config-form-item">
                                    <label>共债总余额:</label>
                                    <InputNumber disabled={isEdit} defaultValue={0} min={0} />
                                </span>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}
