import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Tree, Input, Slider, Button, Switch, Row, Col } from 'antd'
import '@/common/less/new-user.less'
import { morphoData, zeusData, blacklistData, vcData, antifraud, rainBowData} from './configData'
// const data = {
//     "id": 3467,
//     "uuid": "5d444230-4e69-4bf4-926d-7aba51ce1fc1",
//     "email": "kabao@qq.com",
//     "encrypted_password": "5d444230-4e69-4bf4-926d-7aba51ce1fc1",
//     "name": "卡包",
//     "tenantTags": null,
//     "enable": "true",
//     "role": "企业经理",
//     "tenant_id": 1,
//     "create_at": "2020-12-04T16:21:28.000+0800",
//     "update_at": "2020-12-17T20:02:26.000+0800",
//     "system_id": null,
//     //黑名单 反欺诈 流量监控
//     "systemEnabled": {
//         "systems": [
//             {
//                 "id": "blacklist",
//                 "displayName": "黑名单查询",
//                 "priceunits": [
//                     {
//                         "id": "blacklist_v2.0",
//                         "displayName": "黑名单V2.0",
//                         "value": "免费",
//                         "enable": "true"
//                     },
//                     {
//                         "id": "blacklist_v3.0_basic",
//                         "displayName": "黑名单V3.0基础版",
//                         "value": "免费",
//                         "enable": "true"
//                     },
//                     {
//                         "id": "blacklist_v3.0_super",
//                         "displayName": "黑名单V3.0高阶版",
//                         "value": "免费",
//                         "enable": "true"
//                     }
//                 ]
//             },
//             {
//                 "id": "antiFraud",
//                 "displayName": "反欺诈规则",
//                 "priceunits": [
//                     {
//                         "id": "antiFraud",
//                         "displayName": "反欺诈",
//                         "value": "免费",
//                         "enable": "true"
//                     }
//                 ]
//             },
//             {
//                 "id": "flowMonitor",
//                 "displayName": "流量监控",
//                 "priceunits": [
//                     {
//                         "id": "vc1.2",
//                         "displayName": "流量监控V1.2",
//                         "value": "免费",
//                         "enable": "false"
//                     },
//                     {
//                         "id": "vc2.2",
//                         "displayName": "流量监控V2.2",
//                         "value": "免费",
//                         "enable": "false"
//                     },
//                     {
//                         "id": "vc3.0",
//                         "displayName": "流量监控V3.0",
//                         "value": "免费",
//                         "enable": "false"
//                     },
//                     {
//                         "id": "vc3.1",
//                         "displayName": "流量监控V3.1",
//                         "value": "免费",
//                         "enable": "true"
//                     }
//                 ]
//             }
//         ]
//     },
    
//     "systemDisabled": { }, //联通 移动 电信 公安
//     "system_extends": null,
//     "tenant_full_name": null,
//     "tenant_email": null,
//     "permissions": "",
//     "proxy_token": "",
//     // 神月
//     "config": {
//         "enable_upload": true,
//         "enable_morpho": false,
//         "enable_shenyue": false,
//         "enable_badinfo": false,
//         "enable_score": false,
//         "enable_output_blacklist": false,
//         "enable_output_morpho_v2": false,
//         "enable_output_money": true,
//         "type": "nopay",
//         "cutoffPercent": 0,
//         "upload_loan_amount": true,
//         "upload_loan_repayment": false,
//         "upload_device_id": false,
//         "upload_ipaddr": false,
//         "upload_location": false,
//         "upload_loan_type": true,
//         "upload_apply_name": true,
//         "upload_apply_pid": false,
//         "upload_apply_mobile": false,
//         "query_loan_type": false,
//         "query_apply_name": false,
//         "query_apply_pid": false,
//         "query_apply_mobile": false,
//         "enable_input_pid": true,
//         "enable_input_pidMd5": false,
//         "enable_input_pidSha256": false,
//         "enable_input_pidSM3": false,
//         "enable_input_mobile": true,
//         "enable_input_mobileMd5": false,
//         "enable_input_mobileSha256": false,
//         "enable_input_mobileSM3": false,
//         "enable_input_name": true,
//         "enable_input_nameMd5": false,
//         "enable_input_nameSha256": false,
//         "enable_input_nameSM3": false,
//         "enable_input_loan_type": true
//     },
//     // 宙斯盾
//     "zeus_config": {
//         "enable_zeus": false,
//         "enable_verify": true,
//         "enable_layer": true,
//         "enable_report": true,
//         "enable_verifica": true,
//         "search_verifica": "4",
//         "enable_monitor": true,
//         "search_monitor": "1",
//         "enable_pid": true,
//         "enable_pidMd5": false,
//         "enable_pidSha256": false,
//         "enable_pidSM3": false,
//         "enable_mobile": true,
//         "enable_mobileMd5": false,
//         "enable_mobileSha256": false,
//         "enable_mobileSM3": false,
//         "enable_name": true,
//         "enable_nameMd5": false,
//         "enable_nameSha256": false,
//         "enable_nameSM3": false,
//         "enable_filtered": true,
//         "enable_loan_type": true,
//         "enable_risklevel_filtered": false,
//         "search_src": "1"
//     },
//     //信用评分
//     "rainbowScore": {
//         "enable_zzcS1020": true,
//         "enable_zzcS3010": false,
//         "enable_zzcS4010": true,
//         "enable_zzcS4020": false,
//         "enable_zzcS5010": true,
//         "enable_zzcS5020": false,
//         "enable_zzcS5030": true,
//         "enable_zzcS5040": false,
//         "enable_zzcS5050": true,
//         "enable_zzcS5060": false,
//         "enable_pid": true,
//         "enable_pidMd5": false,
//         "enable_pidSha256": false,
//         "enable_pidSM3": false,
//         "enable_mobile": true,
//         "enable_mobileMd5": false,
//         "enable_mobileSha256": false,
//         "enable_mobileSM3": false,
//         "enable_name": true,
//         "enable_nameMd5": false,
//         "enable_nameSha256": false,
//         "enable_nameSM3": false,
//         "enable_loan_type": true
//     },
//     "platform_id": -1,
//     //黑名单 vc 反欺诈入参查询设置
//     "app_config": {
//         "blacklist": {
//             "enable_input_pid": false,
//             "enable_input_pidMd5": true,
//             "enable_input_pidSha256": false,
//             "enable_input_pidSM3": false,
//             "enable_input_mobile": false,
//             "enable_input_mobileMd5": true,
//             "enable_input_mobileSha256": false,
//             "enable_input_mobileSM3": false,
//             "enable_input_name": false,
//             "enable_input_nameMd5": true,
//             "enable_input_nameSha256": false,
//             "enable_input_nameSM3": false,
//             "enable_input_loan_type": false,
//             "search_src": null
//         },
//         "vc": {
//             "enable_input_pid": false,
//             "enable_input_pidMd5": false,
//             "enable_input_pidSha256": false,
//             "enable_input_pidSM3": false,
//             "enable_input_mobile": true,
//             "enable_input_mobileMd5": false,
//             "enable_input_mobileSha256": false,
//             "enable_input_mobileSM3": false,
//             "enable_input_name": true,
//             "enable_input_nameMd5": false,
//             "enable_input_nameSha256": false,
//             "enable_input_nameSM3": false,
//             "enable_input_loan_type": false,
//             "search_src": "1"
//         },
//         "antifraud": {
//             "enable_input_pid": true,
//             "enable_input_pidMd5": false,
//             "enable_input_pidSha256": false,
//             "enable_input_pidSM3": false,
//             "enable_input_mobile": true,
//             "enable_input_mobileMd5": false,
//             "enable_input_mobileSha256": false,
//             "enable_input_mobileSM3": false,
//             "enable_input_name": true,
//             "enable_input_nameMd5": false,
//             "enable_input_nameSha256": false,
//             "enable_input_nameSM3": false,
//             "enable_input_loan_type": true,
//             "search_src": null
//         }
//     }
// }

export default class NewUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            morpho_Expanded: false,
            morpho_expandedKeys: [],
            zues_Expanded: true,
            blacklist_Expanded: false,
            vc_Expanded: false,
            antifraud__Expanded: false,
            rainBowData__Expanded: false,
            cutoffPercent: 100,
            // fromList: {
                
            // }
        }
        this.moveSlide = this.moveSlide.bind(this)
        this.onChangeExpanded = this.onChangeExpanded.bind(this)
        this.onExpand = this.onExpand.bind(this)
    }

    // static propTypes = {

    // }

    moveSlide(result) {
        this.setState({
            cutoffPercent: result
        })
    }


    // 默认点击switch开关展开节点
    onChangeExpanded(type,value) {
        console.log(type,value)
        let wrap = value ? ['0-0'] : []
        this.setState({
            [type]: wrap
        })
    }
    //点击展开项时指定展开受控节点
    onExpand(morpho_expandedKeys) {
        console.log(morpho_expandedKeys)
        this.setState({
            morpho_expandedKeys
        })
    }

    componentDidMount() {
        console.log(this.props.createUser)
    }

    render() {
        const { cutoffPercent, morpho_Expanded, morpho_expandedKeys } = this.state
        return (
            <div className="new-user-container">
                <div className="popup-container">
                    <div className="popup-con">
                        <h3>新建用户</h3>
                        <div className="userinfo">
                            <span className="userinfo-wrap-flex">
                                <label>姓名:</label>
                                <Input/>
                            </span>
                            <span className="userinfo-wrap-flex">
                                <label>邮件:</label>
                                <Input/>
                            </span>
                            <span className="userinfo-wrap-flex">
                                <label>岗位类型:</label>
                                <Input/>
                            </span>
                            
                        </div>
                        {/* 
                                    |--- 输出以下字段 （神月）
                            1.权限 ---|   或
                                    |----查询配置
                            
                            2.上报忽略字段 （神月）

                            3.查询入参

                            4.熔断比例
                        */}
                        <div id="new-user-form">
                            <div className="item-offset-morpho">
                                <div className="morpho">
                                    <Switch className="edit-config" 
                                        defaultChecked={false} 
                                        onChange={(value) => this.onChangeExpanded('morpho_expandedKeys',value)} 
                                    />
                                    <Tree className="config-tree" checkable showLine
                                        disabled={false}
                                        autoExpandParent={true}
                                        expandedKeys={morpho_expandedKeys}
                                        onExpand={this.onExpand}
                                        onCheck={this.onCheck}
                                        treeData={morphoData}
                                    />
                                    <p>{morpho_Expanded ? '开' : '关'}</p>
                                </div>
                                {/* 熔断比例 */}
                                <div className="config-slider">
                                    <Row align="middle" justify="start">
                                        <Col>
                                            <label>
                                                熔断比例
                                            </label>
                                        </Col>
                                        <Col span={6} offset={1}>
                                            <Slider
                                                min={0}
                                                max={100}
                                                onChange={this.moveSlide}
                                                value={typeof cutoffPercent === 'number' ? cutoffPercent : 0}
                                            />
                                        </Col>
                                    </Row>    
                                </div>
                            </div>
                            <div className="item-offset">
                                <Switch className="edit-config" onChange={(value) => this.onChangeExpanded('zues_Expanded',value)} />
                                <Tree
                                    className="config-tree"
                                    checkable
                                    showLine
                                    // defaultExpandedKeys={['0-0-0', '0-0-1','0-0-2','0-0-3']}
                                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                                    treeData={zeusData}
                                />
                            </div>
                            <div className="item-offset">
                                <Switch className="edit-config" />
                                <Tree
                                    className="config-tree"
                                    checkable
                                    showLine
                                    // defaultExpandedKeys={['0-0-0', '0-0-1','0-0-2','0-0-3']}
                                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                                    treeData={blacklistData}
                                />
                            </div>
                            <div className="item-offset">
                                <Switch className="edit-config" />
                                <Tree
                                    className="config-tree"
                                    checkable
                                    showLine
                                    // defaultExpandedKeys={['0-0-0', '0-0-1','0-0-2','0-0-3']}
                                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                                    treeData={vcData}
                                />
                            </div>
                            <div className="item-offset">
                                <Switch className="edit-config" />
                                <Tree
                                    className="config-tree"
                                    checkable
                                    showLine
                                    // defaultExpandedKeys={['0-0-0', '0-0-1','0-0-2','0-0-3']}
                                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                                    treeData={antifraud}
                                />
                            </div>
                            <div className="item-offset">
                                <Switch className="edit-config" />
                                <Tree
                                    className="config-tree"
                                    checkable
                                    showLine
                                    // defaultExpandedKeys={['0-0-0', '0-0-1','0-0-2','0-0-3']}
                                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                                    treeData={rainBowData}
                                />
                            </div> 
                        
                        </div>
                        <div className="popup-save">
                            <span className="popup-save-auto">
                                <Button type="primary" onClick={() => this.props.createUser({openUserPopup: false})}>确认</Button>
                                <Button type="dashed" onClick={() => this.props.createUser({openUserPopup: false})}>取消</Button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
