# 企业官网

基于 Nuxt 4 + Vue 3 + Tailwind CSS 构建的企业官方网站，支持中英文国际化、SEO 优化、TypeScript 类型安全。

## 技术栈

| 类别     | 技术                                                                                                                                                                                           |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 框架     | [Nuxt 4](https://nuxt.com/) + [Vue 3](https://vuejs.org/)                                                                                                                                      |
| 样式     | [Tailwind CSS](https://tailwindcss.com/) + [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) + [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) |
| 国际化   | [@nuxtjs/i18n](https://i18n.nuxtjs.org/)                                                                                                                                                       |
| 图片优化 | [@nuxt/image](https://image.nuxt.com/)                                                                                                                                                         |
| 代码规范 | ESLint + Prettier                                                                                                                                                                              |
| 提交规范 | Husky + lint-staged + commitlint + cz-git                                                                                                                                                      |
| 类型检查 | TypeScript + vue-tsc                                                                                                                                                                           |

## 目录结构

```text
├── .github/workflows/     # GitHub Actions CI 配置
├── .husky/                # Git hooks
├── .vscode/               # VSCode 配置 & 推荐扩展
├── app/
│   ├── components/        # 公共组件
│   │   ├── AppHeader.vue  # 顶部导航栏
│   │   └── AppFooter.vue  # 底部版权栏
│   ├── composables/       # 组合式函数
│   │   └── useApiBase.ts  # API 基础 URL
│   ├── layouts/           # 布局组件
│   │   └── default.vue    # 默认布局
│   ├── pages/             # 页面路由
│   │   ├── index.vue      # 首页 /
│   │   ├── news.vue       # 新闻 /news
│   │   └── about.vue      # 关于我们 /about
│   └── app.vue            # 根组件
├── i18n/
│   └── locales/           # 多语言文件
│       ├── zh.json        # 简体中文
│       └── en.json        # English
├── public/                # 静态资源
│   ├── favicon.ico
│   └── robots.txt
├── nuxt.config.ts         # Nuxt 配置
├── tailwind.config.ts     # Tailwind 配置
├── eslint.config.mjs      # ESLint 配置
├── commitlint.config.mjs  # Commitlint 配置
└── package.json
```

## 环境要求

- Node.js >= 20
- npm >= 10（或 pnpm / yarn）

## 环境变量

复制 `.env.example` 为 `.env.local` 并填写：

```bash
cp .env.example .env.local
```

| 变量名                 | 说明                     | 示例                      |
| ---------------------- | ------------------------ | ------------------------- |
| `NUXT_PUBLIC_API_BASE` | 后端接口基础 URL         | `https://api.example.com` |
| `NUXT_PUBLIC_SITE_URL` | 站点公开 URL（用于 SEO） | `https://www.example.com` |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:4000)
npm run dev

# 类型检查
npm run typecheck

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 构建与部署

### SSR 模式（推荐）

```bash
# 构建
npm run build

# 本地预览
npm run preview
```

构建产物位于 `.output/` 目录，部署时运行 `node .output/server/index.mjs`。

### 静态生成（SSG）

适用于纯静态内容，可部署到任意静态托管服务：

```bash
# 生成静态文件
npm run generate
```

产物位于 `.output/public/` 目录。

### 部署平台

- **Vercel**: 直接连接 Git 仓库，自动识别 Nuxt 项目
- **Netlify**: 同上，或手动设置 `npm run generate` 输出 `.output/public`
- **Cloudflare Pages**: 支持 SSR（Workers）或静态部署
- **Docker**: 可自行编写 Dockerfile 容器化部署

## 代码规范

### 提交信息

项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 交互式提交（推荐）
npm run cm

# AI 辅助生成提交信息
npm run cm:ai
```

提交类型：

| 类型       | 说明                   |
| ---------- | ---------------------- |
| `feat`     | 新增功能               |
| `fix`      | 修复缺陷               |
| `docs`     | 文档更新               |
| `style`    | 代码格式（不影响逻辑） |
| `refactor` | 代码重构               |
| `perf`     | 性能优化               |
| `test`     | 测试相关               |
| `build`    | 构建相关               |
| `ci`       | CI 配置                |
| `chore`    | 其他杂项               |
| `revert`   | 回退代码               |

### Pre-commit 钩子

提交前自动运行：

1. `eslint --fix` - 修复可自动修复的问题
2. `prettier --write` - 格式化代码

### 代码风格

- 缩进：2 空格
- 引号：单引号
- 分号：不加
- 尾逗号：全部添加
- 行尾：LF

详见 `.prettierrc` 和 `.editorconfig`。

## 国际化

### 路由策略

采用 `prefix_except_default` 策略：

| 语言         | 路由示例                       |
| ------------ | ------------------------------ |
| 中文（默认） | `/`、`/news`、`/about`         |
| English      | `/en`、`/en/news`、`/en/about` |

### 添加翻译

编辑 `i18n/locales/` 下的 JSON 文件：

```json
// zh.json
{
  "pages": {
    "home": {
      "title": "首页",
      "description": "...",
      "keywords": "..."
    }
  }
}
```

### 页面中使用

```vue
<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => `${t('pages.home.title')} - ${t('common.siteName')}`,
  description: () => t('pages.home.description'),
  keywords: () => t('pages.home.keywords'),
})
</script>

<template>
  <h1>{{ t('pages.home.title') }}</h1>
</template>
```

### 语言切换

```vue
<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
  <NuxtLink :to="switchLocalePath('zh')">中文</NuxtLink>
</template>
```

## 可用脚本

| 命令                   | 说明                |
| ---------------------- | ------------------- |
| `npm run dev`          | 启动开发服务器      |
| `npm run build`        | SSR 构建            |
| `npm run generate`     | 静态生成            |
| `npm run preview`      | 预览构建结果        |
| `npm run lint`         | ESLint 检查         |
| `npm run lint:fix`     | ESLint 自动修复     |
| `npm run format`       | Prettier 格式化     |
| `npm run format:check` | Prettier 检查       |
| `npm run typecheck`    | TypeScript 类型检查 |
| `npm run cm`           | 交互式提交          |
| `npm run cm:ai`        | AI 辅助提交         |

## 推荐 VSCode 扩展

项目已在 `.vscode/extensions.json` 中配置推荐扩展，打开项目时 VSCode 会提示安装：

- [Vue - Official (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)

## License

[MIT](./LICENSE)
