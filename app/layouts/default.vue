<script setup lang="ts">
const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: i18nHead.value.link,
  meta: i18nHead.value.meta,
}))
</script>

<template>
  <div class="min-h-screen bg-neutral-50">
    <AppHeader />
    <main class="mx-auto max-w-5xl px-4 pt-20 pb-16">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
