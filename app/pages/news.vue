<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('pages.news.title')} - ${t('common.siteName')}`,
  description: () => t('pages.news.description'),
  keywords: () => t('pages.news.keywords'),
})
</script>

<template>
  <section class="flex min-h-[60vh] items-center justify-center">
    <h1 class="text-4xl font-semibold tracking-tight text-neutral-900">
      {{ t('pages.news.title') }}
    </h1>
  </section>
</template>

<style scoped></style>
