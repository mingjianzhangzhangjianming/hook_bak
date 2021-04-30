import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Tooltip, Tabs} from 'antd'
import { FullscreenOutlined, RedoOutlined, ColumnHeightOutlined } from '@ant-design/icons'
import { Tenantdetail, Usermanger, TenantRule, } from './index'
import '@/common/less/tenant-mange.less'

const { TabPane } = Tabs
export default class TenantMange extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    
    render() {
        const { location } = this.props
        const menuName = location.search.split("=")[1] === 'prod' ? '正式机构' : '测试机构'
        return (
           <>
                <section className="menu-breadcrumb">
                    <div className="menu-left">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to={{ pathname:'/tenant',search: location.search}}>{menuName}/</Link>
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
                            <FullscreenOutlined onClick={} />
                        </Tooltip>
                    </div>
                </section>
                <div className="card-container">
                    <Tabs>
                        <TabPane tab="机构详情" key="1">
                            <Tenantdetail />
                        </TabPane>
                        <TabPane tab="用户管理" key="2">
                            <Usermanger />
                        </TabPane>
                        <TabPane tab="规则配置" key="3">
                            <TenantRule />
                        </TabPane>
                    </Tabs>
                    
                </div>
           </>
        )
    }
}
