# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## 环境变量

多环境（开发/测试/生产）配置详见 [docs/ENV.md](./docs/ENV.md)。本地开发可复制 `.env.example` 为 `.env` 或 `.env.local` 后填写。

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:4000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

**多环境脚本**：`dev:staging`（开发连测试环境）、`build:staging`（构建测试版）、`build:prod`（构建生产版）、`preview:staging`。详见 [docs/ENV.md](./docs/ENV.md)。

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
