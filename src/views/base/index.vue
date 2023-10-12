<template>
  <div>{{ t('hello') }}</div>
</template>

<script setup lang="ts">
import useBaseInfoStore from '@/stores/baseInfoStore'
import api from '@/api/baseApi'

const { t } = useI18n()
/* api调用实例 */
api
  .baseA({
    size: 1000,
  })
  .then((res: any) => {
    console.log(res)
  })
const baseInfoStore = useBaseInfoStore()
console.log(baseInfoStore.getToken.value)
baseInfoStore.setToken('000')
</script>

<style lang="scss" scoped></style>
