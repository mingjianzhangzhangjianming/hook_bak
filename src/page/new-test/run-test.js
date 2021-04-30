import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Tooltip, Button, Input, Select} from 'antd'
import { SearchOutlined, FullscreenOutlined, RedoOutlined, ColumnHeightOutlined } from '@ant-design/icons'
import '@/common/less/run-test.less'
import Popuptest from './popup-test'
const { Option } = Select

export default class Runtest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popupVisible: false,
            test_store: 'usezipped', //zipped usezipped running fulfilled 
        }
    }

    showDrawer = () =>{
        this.setState({
            popupVisible: true 
        })
    }

    popupClose = () =>{
        this.setState({
            popupVisible: false 
        })
    }

    componentDidMount() {
        console.log(this.props.location)
    }
    render() {
        return (
            <div className="run-test-container">
                <section className="menu-breadcrumb">
                    <div className="menu-left">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to={'/tenant?ev=int'}>首页</Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to={'/test'}>新建测试</Link>
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
                <div className="run-test-option">
                    <div className="run-test-headr">
                        <span className="test-wrap-item">
                            <label>查询方式</label>
                            <Select value='uuid'>
                                <Option value='uuid'>按uuid查询</Option>
                            </Select>
                        </span>
                    </div>
                    <div className="run-test-wrap">
                        <span className="test-wrap-item">
                            <label>uuid</label>
                            <Input  />
                        </span>
                    </div>
                    <div className="run-serch">
                        <Button type="primary" 
                                icon={<SearchOutlined/>} 
                                onClick={this.showDrawer}
                                block>
                            查询
                        </Button>
                    </div>
                    <Popuptest 
                        popupVisible={this.state.popupVisible}
                        popupClose={this.popupClose}
                    />
                </div>
            </div>
        )
    }
}