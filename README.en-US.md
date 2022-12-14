<br>
<p align="center">
<img src="https://github.com/hfunteam/hfun-ui/blob/publish-hfun-ui/packages/hfun-ui/hfunDocs/docs/public/logo.png?raw=true" alt="hfunui" height="250" width="250">
</p>

<p align="center">
hfunUI componentLibrary๐งโ๐ป๐ฉโ๐ป๐จโ๐ป
</p>

<p align="center">
  <a href="https://github.com/hfunteam/hfun-ui/blob/publish-hfun-ui/README.md">Chinese</a> | English
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

## โจ Features

- โ๏ธ  Based on the vite development, follow the era
- ๐ The official documentation based on vitepress structures
- ๐ Use unocss atomization css
- ๐ป Based on vitest unit test
- ๐ฐ Based on eslint, prettier, husky to complete the project standardization
- ๐งฎ Based on making the action of ci, cd
- ๐ค Using the management component library ecological monorepo way
- ๐ฅ Using codecov generate test report
## ๐ Install

Use `pnpm` install

```shell
pnpm add --save-dev hfun-ui-vite
```

Use `npm` install

```shell
npm install --save-dev hfun-ui-vite
```

Use `yarn` install

```shell
yarn add --save-dev hfun-ui-vite
```

## ๐ Quick Start

### ๐ fullAmountOfImport

In ` main.ts ` introduced in the following content

```
import { createApp } from 'vue'
import App from './App.vue'
import hfunUI from 'hfun-ui-vite'
import 'hfun-ui-vite/style.css'

createApp(App).use(hfunUI).mount('#app')
```

### ๐ accordingToTheNeedToImport

```
import { createApp } from 'vue'
import App from './App.vue'

import { HButton } from 'hfun-ui-vite'
import 'hfun-ui-vite/HButton/style.css'
createApp(App).component(HButton.name, HButton).mount('#app')
```


## ๐จ Related links

- [Official documents](https://hfunteam.github.io/)
- [NPM](https://www.npmjs.com/package/hfun-ui-vite)