import { RouteRecordRaw } from 'vue-router'
import routes from 'virtual:generated-pages'

console.log(routes, '路由地址')

const router: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    redirect: '/base',
    children: [...routes]
  }
]

export default router
