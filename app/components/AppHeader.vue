<script setup lang="ts">
type LocaleCode = 'zh' | 'en'

const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

function switchLocale(code: LocaleCode) {
  if (locale.value === code) return
  const path = switchLocalePath(code)
  if (path) {
    navigateTo(path)
  }
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur">
    <nav class="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
      <div class="text-lg font-semibold text-gray-900">
        {{ t('common.siteName') }}
      </div>
      <div class="flex items-center gap-6">
        <ul class="flex items-center gap-4 text-sm font-medium">
          <li>
            <NuxtLink :to="localePath('index')" class="nav-link">
              {{ t('common.home') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('news')" class="nav-link">
              {{ t('common.news') }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('about')" class="nav-link">
              {{ t('common.about') }}
            </NuxtLink>
          </li>
        </ul>
        <div class="flex items-center gap-2 text-xs font-medium">
          <button
            type="button"
            class="lang-chip"
            :class="{ 'lang-chip--active': locale === 'zh' }"
            @click="switchLocale('zh')"
          >
            中文
          </button>
          <button
            type="button"
            class="lang-chip"
            :class="{ 'lang-chip--active': locale === 'en' }"
            @click="switchLocale('en')"
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-link {
  @apply text-gray-600 transition-colors hover:text-blue-600;
}

.router-link-active.nav-link {
  @apply text-blue-600;
}

.lang-chip {
  @apply rounded-full border border-gray-300 px-2 py-0.5 text-gray-600 transition-colors hover:border-blue-500 hover:text-blue-600;
}

.lang-chip--active {
  @apply border-blue-600 bg-blue-50 text-blue-700;
}
</style>
