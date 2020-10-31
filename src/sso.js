import router from './router'
import store from './store'
import { setToken } from '@/utils/auth'

router.beforeEach((to, from, next) => {
  const token = to.query.token
  if (token) {
    store.commit('user/SET_TOKEN', token)
    setToken(token)
    next(to.path)
  } else {
    next()
  }
})