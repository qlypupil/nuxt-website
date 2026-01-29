/**
 * 获取接口 base URL，用于请求接口时拼接。
 * 值来自 nuxt.config runtimeConfig.public.apiBase，可由环境变量 NUXT_PUBLIC_API_BASE 覆盖。
 */
export function useApiBase(): string {
  const config = useRuntimeConfig()
  return config.public.apiBase || ''
}
