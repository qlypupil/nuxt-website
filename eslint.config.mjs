// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier'
import withNuxt from './.nuxt/eslint.config.mjs'

// 使用 Nuxt 官方生成的 flat config，并追加 Prettier 关闭规则冲突
export default withNuxt(eslintConfigPrettier)
