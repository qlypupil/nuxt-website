<template>
  <footer class="fixed inset-x-0 bottom-0 z-40 border-t bg-white/80 backdrop-blur">
    <div class="mx-auto max-w-5xl px-4 py-3 text-center text-xs text-gray-500">
      © {{ year }} 公司名称 · 保留所有权利
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped></style>
