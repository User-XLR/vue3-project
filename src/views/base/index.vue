<template>
  <div>{{ t('hello') }}</div>
  <el-button @click="clickFn('en')">en</el-button>
  <el-button @click="clickFn('zh')">zh</el-button>
  <el-button @click="clickFn('hk')">tw</el-button>
</template>

<script setup lang="ts">
import useBaseInfoStore from '@/stores/baseInfoStore'
import api from '@/api/baseApi'

const baseInfoStore = useBaseInfoStore()
const clickFn = (str: any) => {
  baseInfoStore.setLanguage(str)
}
const { t } = useI18n()
/* api调用实例 */
api
  .baseA({
    size: 1000,
  })
  .then((res: any) => {
    console.log(res)
  })

console.log(baseInfoStore.getToken.value)
baseInfoStore.setToken('000')
</script>

<style lang="scss" scoped></style>
