import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import NewTenantPopup from './new-tenant'
import { Menu, Breadcrumb, Tooltip, Button, Input, Switch, Table} from 'antd'
import { PlusOutlined, FullscreenOutlined, RedoOutlined, ColumnHeightOutlined } from '@ant-design/icons'

import '@/common/less/content.less'

const columns = [
    {
      align: 'center',
      title: 'ID',
      dataIndex: 'id',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {  
      align: 'center',
      title: '机构全称',
      dataIndex: 'tenantName'
    },
    {
      align: 'center',
      title: '联系邮箱',
      dataIndex: 'email'
    },
    {
      align: 'center',
      title: '联系电话',
      dataIndex: 'phone'
    },
    {
        align: 'center',
        title: '详细地址',
        dataIndex: 'address',
        ellipsis: true
      },
      {
        align: 'center',
        title: '创建时间',
        dataIndex: 'time',
        sorter: {
          compare: (a, b) => a.english - b.english,
          multiple: 1,
        },
      },
      {
        align: 'center',
        title: '状态',
        dataIndex: 'store',
        render: (text,record) => (<Switch defaultChecked={text} disabled />),
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
        },
      },
  ]

const dataSource = [
    {
        key: '1',
        id: 1,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: true
    },
    {
        key: '2',
        id: 2,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '3',
        id: 3,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: true
    },
    {
        key: '4',
        id: 4,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '5',
        id: 5,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '6',
        id: 6,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '7',
        id: 7,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '8',
        id: 8,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '9',
        id: 9,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '10',
        id: 10,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '11',
        id: 9,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '12',
        id: 10,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '13',
        id: 9,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    },
    {
        key: '14',
        id: 10,
        tenantName: '中智诚征信有限公司',
        email: 'admin@intellicredit.cn',
        phone: '010-56590521',
        address: '上海市浦东新区银山路183号6号楼101B',
        time: '2014-12-24  23:12:00',
        store: false
    }
]

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloading: true,
            isOpen: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.CloseOpen = this.CloseOpen.bind(this)
        this.CloseOff = this.CloseOff.bind(this)
    }

    handleChange(value) {
        console.log(value)
    }

    navtionToDetail(record) {
        const { search } = this.props.location
        console.log(record,this.props)
        this.props.history.push({pathname:'/tenant/tenantMange',search: search})
    }

    CloseOpen() {
        this.setState({
            isloading: true
        })
        this.timer = setTimeout(() =>{
            this.setState((oldstate) =>{
                clearTimeout(this.timer)
                return {
                    isOpen: true,
                    isloading: false
                }
            })
        },400)
    }

    CloseOff() {
        this.setState({
            isOpen: false
        })
    }

    componentDidMount() {
        console.log(this.props)
        this.timer = setTimeout(() => {
            this.setState({isloading:false})
            clearTimeout(this.timer)
        },600)
        
    }

    render() {
        const { isOpen, isloading } = this.state
        const { location } = this.props
        const menuName = location.search.split("=")[1] === 'prod' ? '正式机构' : '测试机构'
        return (
            <div className="table-container">
                <section className="menu-breadcrumb">
                    <div className="menu-left">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to={'/tenant?ev=int'}>首页</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item overlay={
                                    <Menu>
                                        <Menu.Item>
                                            <Link to={'/tenant?ev=prod'}>正式机构</Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <Link to={'/tenant?ev=int'}>测试机构</Link>
                                        </Menu.Item>
                                    </Menu>
                                }>
                                {menuName}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="menu-right">
                        <Tooltip title="刷新">
                            <RedoOutlined />
                        </Tooltip>
                        <Tooltip title="密度">
                            <ColumnHeightOutlined />
                        </Tooltip>
                        <Tooltip title="全屏" >
                            <FullscreenOutlined onClick={this.fullView} />
                        </Tooltip>
                    </div>
                </section>
                <div className="table-menu">
                    <span className="table-menu-serch">
                        <Input.Search className="serch-input" allowClear placeholder="请输入查询项目" />
                        <Button className="submitBtn" type="primary">查询</Button>
                    </span>
                    
                    <Button 
                        className="submitBtn" 
                        icon={<PlusOutlined />} 
                        type="primary"
                        onClick={this.CloseOpen}>新建机构</Button>
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
                        columns={columns} 
                        dataSource={dataSource} 
                        scroll={{y:500}} 
                        size={'small'}
                        onChange={this.handleChange}
                    />
                </div>
                
                {/* 新建机构弹窗 */}
                {   
                    isOpen && <NewTenantPopup CloseOff={this.CloseOff} />
                }
            </div>
        )
    }
}