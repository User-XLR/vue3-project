<template>
  <div class="m-1">{{ t('hello') }}</div>
  <el-button @click="clickFn('en')">en</el-button>
  <el-button @click="clickFn('zh')">zh</el-button>
  <el-button @click="clickFn('hk')">tw</el-button>
  <hr />
  <div class="flex justify-center items-center bg-neutral-700 fon">
    <div class="block m-5">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
    </div>
  </div>
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

baseInfoStore.setToken('000')

const value1 = ref('')
</script>

<style lang="scss" scoped></style>
