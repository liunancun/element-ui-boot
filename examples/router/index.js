import { router, Layout, RouteView, Dashboard } from '../../src/index'
export { router }

export const routes = [{
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: '系统首页', icon: 'dashboard' }
    }]
}, {
    path: '/organization',
    component: Layout,
    meta: { title: '组织架构', icon: 'example' },
    children: [{
        path: 'department',
        component: RouteView,
        redirect: '/organization/department/tree',
        meta: { title: '部门管理' },
        children: [{
            hidden: true,
            path: 'tree',
            name: 'DepartmentTree',
            component: () => import('../views/About'),
            meta: { title: '部门列表', activeMenu: '/organization/department' }
        }]
    }, {
        path: 'department/group',
        component: RouteView,
        redirect: '/organization/department/group/list',
        meta: { title: '分组管理' },
        children: [{
            hidden: true,
            path: 'list',
            name: 'DepartmentGroupTree',
            component: () => import('../views/About'),
            meta: { title: '分组列表', activeMenu: '/organization/department/group' }
        }]
    }]
}]
