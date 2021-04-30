import React,{ Component } from 'react'
import Rechargepop from './recharge-popup'
import { Button, Input, Switch, Table, Tag } from 'antd'
import { StrikethroughOutlined, ApiOutlined, HighlightOutlined } from '@ant-design/icons'
import './index.less'
const dataSource = [
    {
        key: '1',
        id: 1,
        tenantName: '中智诚征信有限公司',
        balance: '49999',
        actionA: '正式账号充值',
        actionB: '设置报警阀值',
        store: false
    },
    {
        key: '2',
        id: 1,
        tenantName: '中智诚征信有限公司',
        balance: '49999',
        actionA: '正式账号充值',
        actionB: '设置报警阀值',
        store: false
    },
    {
        key: '3',
        id: 1,
        tenantName: '中智诚征信有限公司',
        balance: '49999',
        actionA: '正式账号充值',
        actionB: '设置报警阀值',
        store: false
    },
    {
        key: '4',
        id: 1,
        tenantName: '中智诚征信有限公司',
        balance: '49999',
        actionA: '正式账号充值',
        actionB: '设置报警阀值',
        store: false
    },
    {
        key: '5',
        id: 1,
        tenantName: '中智诚征信有限公司',
        balance: '49999',
        actionA: '正式账号充值',
        actionB: '设置报警阀值',
        store: false
    },
    {
        key: '6',
        id: 1,
        tenantName: '中智诚征信有限公司',
        balance: '49999',
        actionA: '正式账号充值',
        actionB: '设置报警阀值',
        store: false
    },
    {
        key: '7',
        id: 1,
        tenantName: '中智诚征信有限公司',
        balance: '49999',
        actionA: '正式账号充值',
        actionB: '设置报警阀值',
        store: false
    },
    {
        key: '8',
        id: 1,
        tenantName: '中智诚征信有限公司',
        balance: '49999',
        actionA: '正式账号充值',
        actionB: '设置报警阀值',
        store: false
    }
]

const amount = (
    <div className="amountCon">
        <div className="amonut-warp">
            <input type="number" placeholder="充值金额"/>
            <label><StrikethroughOutlined /></label>
            <label className="bottom"></label>
        </div>
        <div className="amonut-warp">
            <textarea placeholder="备注"/>
            <label><HighlightOutlined /></label>
            <label className="bottom"></label>
        </div>
    </div>
)
const threshold = (
    <div className="amountCon">
        <div className="amonut-warp">
            <input type="number" placeholder="设置报警阀值1"/>
            <label><ApiOutlined /></label>
            <label className="bottom"></label>
        </div>
        <div className="amonut-warp">
            <input type="number" placeholder="设置报警阀值2"/>
            <label><ApiOutlined /></label>
            <label className="bottom"></label>
        </div>
    </div>
)
export default class Recharge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    dataIndex: 'id',
                    align: 'center',
                    title: 'ID'
                },
                {
                    dataIndex: 'tenantName',
                    align: 'center',
                    title: '机构全称'
                },
                {
                    dataIndex: 'balance',
                    align: 'center',
                    title: '余额'
                },
                {
                    dataIndex: 'actionA',
                    align: 'center',
                    title: '操作A',
                    render: (text,record) => (
                        <Tag icon={<StrikethroughOutlined />} onClick={() => this.handleActionA(text,record)} color="#cd201f">
                            {text}
                        </Tag>
                    )
                },
                {
                    dataIndex: 'actionB',
                    align: 'center',
                    title: '操作B',
                    render: (text,record) => (
                        <Tag icon={<ApiOutlined />} onClick={() => this.handleActionB(text,record)} color="#3b5999">
                            {text}
                        </Tag>
                    )
                },
                {
                    dataIndex: 'store',
                    align: 'center',
                    title: '状态',
                    render: (text,record) => (
                        <Switch defaultChecked={text} disabled />
                    )
                }
            ],
            amountProps: {
                width: 900,
                visible: false,
                title: "测试账号充值",
                cancelText: '取消',
                okText: '确认',
                confirmLoading: false
            },
            thresholdProps: {
                width: 900,
                visible: false,
                title: "测试账号设置报警阀值",
                cancelText: '取消',
                okText: '确认',
                confirmLoading: false
            }
        }
    }
    
    handleCancel(action) {
        this.setState({
            [action]: {
                ...this.state[action],
                visible: false
            }
        })
    }

    handleOk(action) {
        // console.log(
        //     {
        //         [action]: {
        //             ...this.state,
        //             visible: false
        //         }
        //     }
        // )
        this.setState({
            [action]: {
                ...this.state[action],
                visible: false
            }
        })
    }

    handleActionA(text,record) {
        console.log(text,record)
        this.setState({
            amountProps: {
                ...this.state.amountProps,
                visible: true
            }
        })
    }

    handleActionB() {
        this.setState({
            thresholdProps: {
                ...this.state.thresholdProps,
                visible: true
            }
        })
    }

    render() {
        const { columns, amountProps, thresholdProps } = this.state
        return (
            <div className="table-container">
                <div className="table-menu">
                    <span className="table-menu-serch">
                        <Input.Search className="serch-input" allowClear placeholder="请输入查询项目" />
                        <Button className="submitBtn" type="primary">查询</Button>
                        <Button className="submitBtn">重置</Button>
                    </span>
                </div>
                <div className="table-box">
                    <Table 
                        columns={columns} 
                        dataSource={dataSource} 
                        scroll={{y:500}} 
                        size={'small'}
                    />
                </div>
                <Rechargepop 
                    {...amountProps} 
                    handleOk={() => this.handleOk('amountProps')}
                    handleCancel={() => this.handleCancel('amountProps')}
                >
                    {amount}
                </Rechargepop>
                <Rechargepop 
                    {...thresholdProps} 
                    handleOk={() =>this.handleOk('thresholdProps')}
                    handleCancel={() => this.handleCancel('thresholdProps')}
                >
                    {threshold}
                </Rechargepop>
            </div>
        )
    }
}
