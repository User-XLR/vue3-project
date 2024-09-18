<template>
  <div class="">{{ t('hello') }}</div>
  <el-button
    type="primary"
    class="hover:bg-red-600"
    @click="clickFn('en')"
  >
    {{ t('en') }}
  </el-button>
  <el-button @click="clickFn('zh')">{{ t('zh') }}</el-button>
  <el-button @click="clickFn('hk')">{{ t('tw') }}</el-button>
  <el-button @click="toTest">
    {{ t('Jump') }}
  </el-button>
  <hr />
  <el-switch
    v-model="value3"
    inline-prompt
    active-text="light"
    active-value="light"
    inactive-value="dark"
    inactive-text="dark"
    @change="changeTheme"
  />
  <hr />
  <div class="flex justify-center items-center bg-nav">
    <div class="block m-5">
      <span class="demonstration">{{ t('Default') }}</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import useBaseInfoStore from '@/stores/baseInfoStore'
// import api from '@/api/baseApi'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const router = useRouter()
const route = useRoute()
const baseInfoStore = useBaseInfoStore()
const value3 = ref(baseInfoStore.getTheme)
const clickFn = (str: any) => {
  baseInfoStore.setLanguage(str)
}
const { t } = useI18n()
/* api调用实例 */
// api
//   .baseA({
//     size: 1000
//   })
//   .then((res: any) => {
//     console.log(res)
//   })
baseInfoStore.setToken('000')
const toTest = () => {
  const query = Object.assign({}, route.query)
  router.push({ path: '/base/test', query })
}
/* 切换主题 */
const changeTheme = (val: any) => {
  baseInfoStore.setTheme(val)
}
const value1 = ref('')
</script>

<style lang="scss" scoped></style>
