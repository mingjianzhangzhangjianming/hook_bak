import React,{ Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavList from '@/components/navList'
import PageBar from '@/components/pageBar'
import screenfull from 'screenfull'

export default class FrontendAuth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isfullView: false
        }
    }
    fullView = () => {
        this.setState((oldState) =>{
            screenfull.toggle()
            return {
                isfullView: true
            }
        })
        
    }
    render() {
        let { routerMap, location } = this.props
        const { pathname } = location
        const isLogin = !!localStorage?.getItem("isLogin")
        let role = localStorage.getItem("role")?.split(",") || []
        const routerList = routerMap.filter(item => !item.auth || role.indexOf(item.auth) > -1)
        const targetRouterDom = routerList.find( item => item.path === pathname)
        if(targetRouterDom && !targetRouterDom.auth && !isLogin) {
            const { component } = targetRouterDom
            return <Route path={pathname} component={component}/>
        }

        if(isLogin) {
            if(pathname==="/"||pathname==="/login"){
                return <Redirect to="/tenant" />
            }else {
                return targetRouterDom ? 
                    <div id="main-content-box">
                        <NavList/>
                        <PageBar menu={targetRouterDom.menu}>
                            <Route 
                                path={pathname}
                                component={targetRouterDom.component} 
                            /> 
                        </PageBar>
                    </div>
                     : <Redirect to="/404" />
            }
        }else {
            return (targetRouterDom && targetRouterDom.auth) ? 
                <Redirect to="/login" /> : <Redirect to="/404" />
        }
    }
}