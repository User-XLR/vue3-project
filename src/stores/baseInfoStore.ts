import { defineStore } from 'pinia'

const useBaseInfoStore = defineStore(
  'baseInfo',
  () => {
    const token = ref('')
    const getToken = computed(() => {
      return token
    })
    const setToken = (tokenValue: string) => {
      token.value = tokenValue
    }
    const projectId = ref('')
    const getProjectId = computed(() => {
      return projectId
    })
    const setProjectId = (projectIdValue: string) => {
      projectId.value = projectIdValue
    }
    const language = ref('en')
    const setLanguage = (languages: string) => {
      language.value = languages
    }
    return {
      token,
      projectId,
      getToken,
      setToken,
      getProjectId,
      setProjectId,
      language,
      setLanguage,
    }
  },
  {
    persist: true,
  },
)
export default useBaseInfoStore
