import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

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

const route = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default route
