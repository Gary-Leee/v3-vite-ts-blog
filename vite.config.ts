import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
//

import path from 'path';
import { prismjsPlugin } from 'vite-plugin-prismjs';
import { removeConsole } from './vitePlugins/removeConsole';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue',
  build: {
    rollupOptions: {
      output: {
        // manualChunks(id, { getModuleInfo, getModuleIds }) {
        //   // if (id.includes('node_modules')) return 'vendor';
        //   if (id.includes('node_modules')) {
        //     let a = id.toString().split('node_modules/')[2].split('/')[0];
        //     // console.log(a);
        //     return a;
        //   };
        //   return 'js/[name].[hash].js';
        // },
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          prismjs: ['prismjs'],
          threejs: ['three']
        },
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames(assetInfo) {
          if (assetInfo.name?.endsWith('css')) {
            return 'css/[name]-[hash].css';
          }
          const imgExts = ['png', 'jpg', 'svg'];
          if (imgExts.some((ext) => assetInfo.name?.endsWith(ext))) {
            return 'imgs/[name]-[hash].[ext]';
          }
          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  },
  plugins: [
    removeConsole(),
    vue(),
    AutoImport(),
    // {resolvers: [ElementPlusResolver()],}
    Components(),
    // {resolvers: [ElementPlusResolver()],}
    prismjsPlugin({
      languages: ['css','javascript'], // 语言
      plugins: ['line-numbers', 'copy-to-clipboard', 'show-language'], //官网有其他功能,这里开启行数和复制按钮功能
      theme: 'okaidia', // 主题
      css: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
