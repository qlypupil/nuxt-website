<script setup lang="ts">
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="fixed inset-x-0 bottom-0 z-40 border-t bg-white/80 backdrop-blur">
    <div class="mx-auto max-w-5xl px-4 py-3 text-center text-xs text-gray-500">
      {{ t('common.footerCopyright', { year }) }}
    </div>
  </footer>
</template>

<style scoped></style>
