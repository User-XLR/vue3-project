/// <reference types="vite/client" />
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/en.mjs'
declare module 'element-plus/dist/locale/zh-tw.mjs'
declare module 'virtual:generated-pages'
declare module '*.vue' {
  import { defineComponent } from 'vue'

  const Component: ReturnType<typeof defineComponent>
  export default Component
}
