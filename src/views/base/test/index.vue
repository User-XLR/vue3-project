<template>
	<div id="chart">1212</div>
</template>

<script setup lang="ts">
import { draw } from "@/utils/echarts";
import { onMounted } from "vue";

onMounted(() => {
	draw(document.querySelector("#chart") as HTMLElement, {
		xAxis: {
			type: "category",
			data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
		},
		yAxis: {
			type: "value"
		},
		series: [
			{
				data: [150, 230, 224, 218, 135, 147],
				type: "line"
			}
		]
	});
});
</script>

<style lang="scss" scoped>
#chart {
	width: 100%;
	height: 400px;
}
</style>
