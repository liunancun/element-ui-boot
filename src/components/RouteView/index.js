import RouteView from './src/route-view.vue'

RouteView.install = function (Vue) {
    Vue.component(RouteView.name, RouteView)
}

export default RouteView