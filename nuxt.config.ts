// https://nuxt.com/docs/api/configuration/nuxt-config
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import pkg from './package.json';
import postcssConfig from './postcssConfig';

console.table([
  {
    version: pkg.version,
    mode: process.env.NODE_ENV,
  },
]);

const {
  NUXT_PUBLIC_COOKIE_DOMAIN,
  NUXT_PUBLIC_COOKIE_PATH,
  NUXT_PUBLIC_COOKIE_SAMESITE,
  NUXT_PUBLIC_DELETE_CONSOLE,
  NUXT_PUBLIC_TITLE,
  NUXT_PUBLIC_API_CLIENT_BASEURL,
  NUXT_PUBLIC_API_SERVER_BASEURL,
} = import.meta.env;

console.table({
  NUXT_PUBLIC_COOKIE_DOMAIN,
  NUXT_PUBLIC_COOKIE_PATH,
  NUXT_PUBLIC_COOKIE_SAMESITE,
  NUXT_PUBLIC_DELETE_CONSOLE,
  NUXT_PUBLIC_TITLE,
  NUXT_PUBLIC_API_CLIENT_BASEURL,
  NUXT_PUBLIC_API_SERVER_BASEURL,
});

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: { strict: false, shim: false },
  imports: { dirs: ['types', 'stores', 'api'] },
  postcss: postcssConfig,
  app: {
    head: {
      title: import.meta.env.NUXT_PUBLIC_TITLE,
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
        { name: 'keywords', content: '' },
        {
          name: 'description',
          content: '',
        },
        { name: 'format-detection', content: 'telephone=no' },
        // pc 等比例缩放
        // { name: 'viewport', content: 'user-scalable=yes' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // <p class="ql-editor" v-html="info.content"></p>
        // { rel: 'stylesheet', href: '//cdn.quilljs.com/1.3.6/quill.core.css' },
        // { rel: 'stylesheet', href: '//cdn.quilljs.com/1.3.6/quill.snow.css' },
        // { rel: 'stylesheet', href: '//cdn.quilljs.com/1.3.6/quill.bubble.css' },
      ],
      style: [],
      script: [
        // { src: '//cdn.jsdelivr.net/npm/eruda', type: 'text/javascript' },
        // { children: 'eruda.init();', type: 'text/javascript' }
      ],
      noscript: [{ children: 'JavaScript is required' }],
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    'dayjs-nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
    '@element-plus/nuxt',
  ],
  dayjs: {
    plugins: ['duration', 'relativeTime'],
    locales: ['en', 'zh-cn'],
    defaultLocale: [
      'zh-cn',
      {
        relativeTime: {
          future: '刚刚',
          past: '%s前',
          s: '几秒',
          m: '1 分钟',
          mm: '%d 分钟',
          h: '1 小时',
          hh: '%d 小时',
          d: '1 天',
          dd: '%d 天',
          M: '1 个月',
          MM: '%d 个月',
          y: '1 年',
          yy: '%d 年',
        },
      },
    ],
  },
  build: { transpile: [/echarts/] },
  unocss: {
    nuxtLayers: true,
  },
  css: [
    '@unocss/reset/normalize.css',
    '@unocss/reset/sanitize/sanitize.css',
    '@unocss/reset/sanitize/assets.css',
    '~/assets/scss/element/main.scss',
    '~/assets/scss/index.scss',
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/element/index.scss" as element;`,
        },
      },
    },

    build: {
      // chunkSizeWarningLimit: 2000,
      commonjsOptions: { transformMixedEsModules: true },
    },

    esbuild: {
      drop: import.meta.env.NUXT_PUBLIC_DELETE_CONSOLE === 'true' ? ['console', 'debugger'] : [],
    },
  },
  piniaPersistedstate: {
    cookieOptions: {
      domain: NUXT_PUBLIC_COOKIE_DOMAIN,
      path: NUXT_PUBLIC_COOKIE_PATH,
      sameSite: NUXT_PUBLIC_COOKIE_SAMESITE,
    },
  },
  runtimeConfig: {
    version: pkg.version,
    serverBaseUrl: NUXT_PUBLIC_API_SERVER_BASEURL,
    public: {
      version: pkg.version,
      title: NUXT_PUBLIC_TITLE,
      clientBaseUrl: NUXT_PUBLIC_API_CLIENT_BASEURL,
    },
  },
  devServer: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key'), 'utf-8'),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'), 'utf-8')
    // }
  },
  nitro: {
    // devProxy: {
    //   [NUXT_PUBLIC_API_CLIENT_BASEURL]: {
    //     target: NUXT_PUBLIC_API_SERVER_BASEURL,
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //     prependPath: true,
    //   },
    // },
    // routeRules: { //配置服务端代理转发 3.2中不生效了
    //   [`${NUXT_PUBLIC_API_CLIENT_BASEURL}/**`]: {
    //     proxy: `${NUXT_PUBLIC_API_BASEURL}/**`,
    //   },
    // },
  },
});
