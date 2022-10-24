<br>
<p align="center">
<img src="https://github.com/hfunteam/hfun-ui/blob/publish-hfun-ui/packages/hfun-ui/hfunDocs/docs/public/logo.png?raw=true" alt="hfunui" height="250" width="250">
</p>

<p align="center">
hfunUI 组件库🧑‍💻👩‍💻👨‍💻
</p>

<p align="center">
  中文 | <a href="https://github.com/hfunteam/hfun-ui/blob/publish-hfun-ui/README.en-US.md">English</a>
</p>

<p align="center">
<img src="https://img.shields.io/github/license/hfunteam/hfun-ui"/>
<img src="https://img.shields.io/github/package-json/v/hfunteam/hfun-ui"/>
<img src="https://img.shields.io/github/last-commit/hfunteam/hfun-ui"/>
<img src="https://img.shields.io/npm/v/hfun-ui-vite"/>
<a href="https://codecov.io/gh/hfunteam/hfun-ui" > 
 <img src="https://codecov.io/gh/hfunteam/hfun-ui/branch/master/graph/badge.svg?token=Z33NZJF0EH"/> 
 </a>
<img src="https://img.shields.io/github/stars/hfunteam"/>

## ✨ 特性

- ✈️  基于 Vite 开发，紧跟时代
- 📝 官方文档急于 VitePress 搭建
- 🌈 用 UnoCss 实现原子化 CSS
- 💻 基于 Vitest进行单元测试
- 📰 基于 Eslint + Prettier + husky完成项目规范化
- 🧮 基于 Github Action 进行 CI、CD
- 📤 利用 Monorepo 方式管理组件库生态
- 🔥 使用 Codecov 生成测试报告
## 🔑 安装

使用 `pnpm` 安装

```shell
pnpm add --save-dev hfun-ui-vite
```

使用 `npm` 安装

```shell
npm install --save-dev hfun-ui-vite
```

使用 `yarn` 安装

```shell
yarn add --save-dev hfun-ui-vite
```

## 🎉 快速上手

### 📈 全量导入
在 `main.ts` 中引入下面内容

```
import { createApp } from 'vue'
import App from './App.vue'
import hfunUI from 'hfun-ui-vite'
import 'hfun-ui-vite/style.css'

createApp(App).use(hfunUI).mount('#app')
```

### 😄 按需导入

```
import { createApp } from 'vue'
import App from './App.vue'

import { HButton } from 'hfun-ui-vite'
import 'hfun-ui-vite/HButton/style.css'
createApp(App).component(HButton.name, HButton).mount('#app')
```

## 🎨 相关链接

- [官方文档](https://hfunteam.github.io/)
- [NPM](https://www.npmjs.com/package/hfun-ui-vite)