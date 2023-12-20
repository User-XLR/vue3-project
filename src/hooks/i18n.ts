import { createI18n } from 'vue-i18n'
import zhCnLocale from 'element-plus/dist/locale/zh-cn.mjs'
import enLocale from 'element-plus/dist/locale/en.mjs'
import twLocale from 'element-plus/dist/locale/zh-tw.mjs'
import en from '../config/languages/en'
import zh from '../config/languages/zh'
import tw from '../config/languages/tw'

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
