import { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import { PartitionOutlined, RiseOutlined, PicRightOutlined, SplitCellsOutlined } from '@ant-design/icons'
import logo from '@/common/image/logo.png'
import '@/common/less/navList.less'

class NavList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKeys: null,
            collapsed: false,
            renderlist: [
                {
                    tip: "机构管理",
                    icon: <PartitionOutlined/>,
                    toPath: '/tenant?ev=int',
                    auth: 'tenant'
                },
                {
                    tip: "新建测试",
                    icon: <RiseOutlined/>,
                    toPath: "/test",
                    auth: 'test'
                }
            ]
        }
        this.handleCollapsed = this.handleCollapsed.bind(this)
        this.pathChange = this.pathChange.bind(this)
    }

    handleCollapsed() {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    handleSelect = ({selectedKeys}) =>{
        this.setState({
            selectedKeys: selectedKeys
        })
    }

    pathChange(path) {
        this.state.renderlist.forEach((item,index) =>{
            if(item.toPath.indexOf(path) > -1){
                this.setState({
                    selectedKeys: [...index.toString()]
                })
            }
        })
    }
    
    componentDidMount() {
        let role = localStorage.getItem("role")
        role = role ? role.split(",") : [] 
        let renderlist = this.state.renderlist.filter(item => role.indexOf(item.auth) > -1)
        //console.log(renderlist)
        this.setState({renderlist})
        //监听路由变化刷新时侧边栏active
        this.pathChange(this.props.location.pathname)
        this.props.history.listen(route => this.pathChange(route.pathname))
        
    }
    render() {
        const { renderlist, collapsed, selectedKeys } = this.state
        return (
            <div className="nav-content">
                <div className={collapsed ? 'nav-icon-auto'  : 'nav-icon'}>
                    <img src={logo} alt="" />
                    <span>Admin Tool</span>
                </div>
                <div className="nav-list">
                    <Menu
                        selectedKeys={selectedKeys}
                        onSelect={this.handleSelect}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}>
                        {
                            renderlist.map((item,index) =>{
                                return (
                                    <Menu.Item key={index} icon={item.icon}>
                                        <Link key={item.toPath} to={item.toPath}>
                                            {item.tip}
                                        </Link>
                                    </Menu.Item>
                                    
                                )
                            })
                        }
                    </Menu>
                </div>
                <div className="nav-footer">
                    <span className="icon-menu" onClick={this.handleCollapsed}>
                        {
                            collapsed ? <PicRightOutlined /> : <SplitCellsOutlined />
                        }
                    </span>
                </div>
            </div>
        )
    }
}

export default withRouter(NavList)