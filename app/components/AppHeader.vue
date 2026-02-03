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
      <div class="text-lg font-semibold text-neutral-900">
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
@reference "../assets/css/main.css";

.nav-link {
  @apply hover:text-primary-600 text-neutral-600 transition-colors;
}

.router-link-active.nav-link {
  @apply text-primary-600;
}

.lang-chip {
  @apply hover:border-primary-500 hover:text-primary-600 rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-600 transition-colors;
}

.lang-chip--active {
  @apply border-primary-600 bg-primary-50 text-primary-700;
}
</style>
