<script setup lang="ts">
import useBaseInfoStore from '@/stores/baseInfoStore'
import layoutPage from '@/components/layouts/baseIndex.vue'

const { messages, locale }: any = useI18n()
const baseInfoStore = useBaseInfoStore()
const localeLang = ref(messages[baseInfoStore.language])
const changeLanguage = () => {
  locale.value = baseInfoStore.language
  localeLang.value = messages.value[locale.value]
}

watchEffect(changeLanguage)
</script>

<template>
  <el-config-provider size="small" :z-index="3000" :locale="localeLang">
    <layoutPage></layoutPage>
  </el-config-provider>
</template>

<style scoped></style>
