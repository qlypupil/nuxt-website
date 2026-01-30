<template>
  <section class="flex min-h-[60vh] items-center justify-center">
    <h1 class="text-4xl font-semibold tracking-tight text-gray-900">
      {{ t('pages.home.title') }}
    </h1>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('pages.home.title')} - ${t('common.siteName')}`,
  description: () => t('pages.home.description'),
  keywords: () => t('pages.home.keywords'),
})
</script>

<style scoped></style>
