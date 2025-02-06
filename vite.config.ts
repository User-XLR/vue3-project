import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import removeConsole from "vite-plugin-remove-console";
import Pages from "vite-plugin-pages";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	const prodPlugins = [];
	if (env.VITE_BUILD_TYPE === "prod") {
		prodPlugins.push(removeConsole());
	}
	return {
		plugins: [
			...prodPlugins,
			vue(),
			Pages({
				dirs: "./src/views", // 指定生成路由的目录
				extensions: ["vue"] // 文件后缀
				// exclude: ['**/src/*.vue'], // 可以排除指定目录
			}),
			AutoImport({
				imports: ["vue", "vue-router", "vue-i18n"], // 自动导入Vue和Vue Router的方法
				dts: "src/types/auto-imports.d.ts", // 自动生成.d.ts声明文件以支持TypeScript
				eslintrc: {
					enabled: false, // 如果需要生成.eslintrc-auto-import.json用于ESLint，则设为true
					filepath: "./src/types/.eslintrc-auto-import.json",
					globalsPropValue: true
				}
			}),
			Components({
				resolvers: [ElementPlusResolver()],
				dts: "src/types/components.d.ts"
			})
		],
		base: "./",
		build: {
			chunkSizeWarningLimit: 1000,
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes("node_modules")) {
							return "vendor";
						}
					}
				}
			}
		},
		resolve: {
			alias: {
				"@": resolve(__dirname, "src")
			},
			extensions: [".js", ".ts", ".jsx", ".tsx", ".json"]
		},
		server: {
			host: true,
			port: 8080
		}
	};
});
