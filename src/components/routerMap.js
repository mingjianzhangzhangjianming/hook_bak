import * as Base from '@/page/base'
import * as Exper from '@/page/new-test'

const routerMap =  [
    {path: '/', component: Base.Login},
    {path: '/login', component: Base.Login},
    {path: '/404', component: Base.Notfount},
    {path: '/tenant', component: Base.Content, auth: 'tenant'}, //机构管理
    {path: '/tenant/tenantMange', component: Base.TenantMange, auth: 'tenant'},
    {path: '/tenant/tenantDetail', component: Base.Tenantdetail, auth: 'tenant'},
    {path: '/tenant/tenantRule', component: Base.TenantRule, auth: 'tenant'},
    {path: '/tenant/userManger', component: Base.Usermanger, auth: 'tenant'},
    {path: '/test', component: Exper.Runtest, auth: 'test'} //新建测试
]

export default routerMap