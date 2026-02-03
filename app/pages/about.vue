<script setup lang="ts">
const { t } = useI18n()
usePageSeo('about')
</script>

<template>
  <section class="flex min-h-[60vh] items-center justify-center">
    <h1 class="text-4xl font-semibold tracking-tight text-neutral-900">
      {{ t('pages.about.title') }}
    </h1>
  </section>
</template>

<style scoped></style>
