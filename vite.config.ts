import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { prismjsPlugin } from 'vite-plugin-prismjs';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport(
      // {resolvers: [ElementPlusResolver()],}
      ),
    Components(
      // {resolvers: [ElementPlusResolver()],}
    ),
    prismjsPlugin({
      languages: 'all', // 语言
      plugins: ['line-numbers', 'copy-to-clipboard', 'show-language'], //官网有其他功能,这里开启行数和复制按钮功能
      theme: 'okaidia', // 主题
      css: true,
    })
  ],
})
