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