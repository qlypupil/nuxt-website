<script setup lang="ts">
const { t } = useI18n()
usePageSeo('home')
</script>

<template>
  <section class="flex min-h-[60vh] items-center justify-center">
    <h1 class="text-4xl font-semibold tracking-tight text-neutral-900">
      {{ t('pages.home.title') }}
    </h1>
  </section>
</template>

<style scoped></style>
