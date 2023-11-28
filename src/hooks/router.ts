import route from '@/router/index.ts'

route.beforeEach(() => {
  console.log(1)
})

export default route
