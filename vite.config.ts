import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import removeConsole from 'vite-plugin-remove-console'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const prodPlugins = []
  if (env.VITE_BUILD_TYPE === 'prod') {
    prodPlugins.push(removeConsole())
  }
  return {
    plugins: [
      ...prodPlugins,
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
        dts: 'src/types/auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'src/types/components.d.ts',
      }),
    ],
    base: './',
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // eslint-disable-next-line consistent-return
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    server: {
      host: true,
      port: 8080,
    },
  }
})
