import { createI18n } from 'vue-i18n'
import zhCnLocale from 'element-plus/dist/locale/zh-cn.mjs'
import enLocale from 'element-plus/dist/locale/en.mjs'
import twLocale from 'element-plus/dist/locale/zh-tw.mjs'
import en from '../config/languages/en-US.json'
import zh from '../config/languages/zh-CN.json'
import tw from '../config/languages/zh-TW.json'

const messages = {
  en: {
    ...en,
    ...enLocale,
  },
  zh: {
    ...zh,
    ...zhCnLocale,
  },
  hk: {
    ...tw,
    ...twLocale,
  },
}
const i18n = createI18n({
  locale: 'en',
  legacy: false,
  globalInjection: true,
  messages,
})
export default i18n
