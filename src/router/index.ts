import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    children: [
      {
        path: 'base',
        name: 'base',
        component: () => import('@/views/base/index.vue'),
      },
    ],
  },
]

export default routes
