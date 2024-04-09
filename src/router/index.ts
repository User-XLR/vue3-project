import { RouteRecordRaw } from 'vue-router'
import routes from '~pages'

console.log(routes)

const router: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    children: [...routes],
  },
]

export default router
