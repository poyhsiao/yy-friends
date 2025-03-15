import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Inspect from 'vite-plugin-inspect';
import Unocss from 'unocss/vite';

const pathSrc = path.resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          alias: {
            msi: 'material-symbols-light',
          },
          prefix: 'Icon',
          enabledCollections: ['ep', 'mdi', 'msi', 'ic'],
        }),
      ],

      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          alias: {
            msi: 'material-symbols-light',
          },
          prefix: 'Icon',
          enabledCollections: ['ep', 'mdi', 'msi', 'ic'],
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
      ],

      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
    Icons({
      compiler: 'vue3',
      alias: {
        msi: 'material-symbols-light',
      },
      autoInstall: true,
    }),
    Inspect(),
    Unocss(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/style/element/index.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@': pathSrc,
    },
  },
});
