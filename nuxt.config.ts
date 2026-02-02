// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    host: '', // 空字符串：监听所有网卡，终端 Local 显示为 localhost
    port: 4000,
  },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  typescript: {
    typeCheck: true,
  },
  runtimeConfig: {
    public: {
      /** 接口 base URL，通过环境变量 NUXT_PUBLIC_API_BASE 覆盖 */
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:4000',
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
  i18n: {
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'zh', language: 'zh-CN', name: '简体中文', file: 'zh.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:4000',
  },
})
