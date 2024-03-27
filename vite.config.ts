import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import analyze from 'rollup-plugin-visualizer'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') }
  const dev = mode === 'development'
  const plugins = []
  if (mode === 'production') {
    plugins.push(
      analyze({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }
  return {
    server: {
      // cors: true,
      port: 9527
    },
    envPrefix: 'V_',
    esbuild: {
      drop: dev ? [] : ['console', 'debugger']
    },
    build: {},
    plugins: [
      ...plugins,
      Vue({
        template: { transformAssetUrls }
      }),
      quasar({
        sassVariables: 'src/assets/scss/quasar-variables.sass'
      }),

      !process.env.VITEST ? checker({ vueTsc: true }) : undefined
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
