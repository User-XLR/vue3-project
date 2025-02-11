import { createApp } from "vue";
import "./styles/style.scss";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { pinia } from "@/hooks/pinia";
import App from "./App.vue";
import router from "./hooks/router";
import i18n from "./hooks/i18n";
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/dark/css-vars.css";
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app.use(router).use(i18n).use(pinia).mount("#app");
