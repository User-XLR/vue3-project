<script setup lang="ts">
import useBaseInfoStore from "@/stores/baseInfoStore";
import layoutPage from "@/components/layouts/baseIndex.vue";
import { ref, watchEffect, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
const route = useRoute();

const { messages, locale }: any = useI18n();
const baseInfoStore = useBaseInfoStore();
const localeLang = ref(messages[baseInfoStore.language]);
const changeLanguage = () => {
	locale.value = baseInfoStore.language;
	localeLang.value = messages.value[locale.value];
};
watchEffect(changeLanguage);
watch(
	() => route.query?.theme,
	() => {
		const { theme = "light" }: any = route.query;
		if (baseInfoStore.getTheme.value) return;
		baseInfoStore.setTheme(theme);
	}
);
</script>

<template>
	<el-config-provider size="small" :z-index="3000" :locale="localeLang">
		<layoutPage></layoutPage>
	</el-config-provider>
</template>

<style scoped></style>
