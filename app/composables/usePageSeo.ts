import { computed } from 'vue'
import { useI18n, useRequestURL, useRuntimeConfig, useSeoMeta } from '#imports'

type PageKey = 'home' | 'about' | 'news'

/**
 * 为页面设置 SEO 与 Open Graph 元数据（title、description、keywords、ogTitle、ogDescription、ogImage）
 */
export function usePageSeo(pageKey: PageKey) {
  const { t } = useI18n()
  const config = useRuntimeConfig()
  const url = useRequestURL()

  const title = computed(() => `${t(`pages.${pageKey}.title`)} - ${t('common.siteName')}`)
  const description = computed(() => t(`pages.${pageKey}.description`))
  const ogImage = `${config.public.siteUrl}/og-image.png`

  useSeoMeta({
    title: () => title.value,
    description: () => description.value,
    keywords: () => t(`pages.${pageKey}.keywords`),
    ogTitle: () => title.value,
    ogDescription: () => description.value,
    ogImage,
    ogUrl: () => url.href,
    ogType: 'website',
  })
}
