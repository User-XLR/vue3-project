<script setup lang="ts">
import en from 'element-plus/dist/locale/en.mjs'
import useBaseInfoStore from '@/stores/baseInfoStore'
import layoutPage from '@/components/layouts/baseIndex.vue'

const locale = en
const baseInfoStore = useBaseInfoStore()
baseInfoStore.setToken('222')
</script>

<template>
  <el-config-provider size="small" :z-index="3000" :locale="locale">
    <layoutPage></layoutPage>
  </el-config-provider>
</template>

<style scoped></style>
