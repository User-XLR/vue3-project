import { createI18n } from 'vue-i18n'
import en from '../config/languages/en'
import zh from '../config/languages/zh'
import tw from '../config/languages/tw'

const messages = {
  en: {
    ...en,
  },
  zh: {
    ...zh,
  },
  hk: {
    ...tw,
  },
}
const i18n = createI18n({
  locale: 'en',
  legacy: false,
  globalInjection: true,
  messages,
})
export default i18n
