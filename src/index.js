import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import '@/icons'
import '@/permission'

import Breadcrumb from './components/Breadcrumb'
import Hamburger from './components/Hamburger'
import SvgIcon from './components/SvgIcon'
import Layout from './layout'

const components = [
    Breadcrumb,
    Hamburger,
    SvgIcon,
    Layout
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...components
}

export { default as router } from './router'
export { default as store } from './store'
export { default as Layout } from './layout'
export { default as Login } from '@/views/login/index'
export { default as E404 } from '@/views/404'
export { default as Dashboard } from '@/views/dashboard/index'