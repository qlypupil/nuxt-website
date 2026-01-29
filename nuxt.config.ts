// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    host: '', // 空字符串：监听所有网卡，终端 Local 显示为 localhost
    port: 4000,
  },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      /** 接口 base URL，通过环境变量 NUXT_PUBLIC_API_BASE 覆盖 */
      apiBase: '',
    },
  },
  app: {
    head: {
      title: '官网',
      titleTemplate: '%s | 官网',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '官网' },
      ],
    },
  },
})
