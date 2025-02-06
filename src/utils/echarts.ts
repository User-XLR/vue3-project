import useStore from "@/stores/baseInfoStore";
import * as echarts from "echarts/core";
import { BarChart, LineChart } from "echarts/charts";
import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	// 数据集组件
	DatasetComponent,
	// 内置数据转换器组件 (filter, sort)
	TransformComponent
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import type {
	// 系列类型的定义后缀都为 SeriesOption
	BarSeriesOption,
	LineSeriesOption
} from "echarts/charts";
import type {
	// 组件类型的定义后缀都为 ComponentOption
	TitleComponentOption,
	TooltipComponentOption,
	GridComponentOption,
	DatasetComponentOption
} from "echarts/components";
import type { ComposeOption } from "echarts/core";
import { debounce } from "@/utils";
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
	| BarSeriesOption
	| LineSeriesOption
	| TitleComponentOption
	| TooltipComponentOption
	| GridComponentOption
	| DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	BarChart,
	LineChart,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer
]);
const store = useStore();
const theme = computed(() => store.getTheme.value);
/**
 * 绘制图表
 * @param dom
 * @param option
 * @returns
 */
export const draw = (dom: HTMLElement, option: ECOption) => {
	const chart = echarts.init(dom, theme.value);
	chart.clear();
	chart.setOption(option);
	window.addEventListener(
		"resize",
		debounce(
			() => {
				chart.resize();
			},
			300,
			true
		)
	);
	return chart;
};
