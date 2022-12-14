<br>
<p align="center">
<img src="https://github.com/hfunteam/hfun-ui/blob/publish-hfun-ui/packages/hfun-ui/hfunDocs/docs/public/logo.png?raw=true" alt="hfunui" height="250" width="250">
</p>

<p align="center">
hfunUI ç»ä»¶åºð§âð»ð©âð»ð¨âð»
</p>

<p align="center">
  ä¸­æ | <a href="https://github.com/hfunteam/hfun-ui/blob/publish-hfun-ui/README.en-US.md">English</a>
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

## â¨ ç¹æ§

- âï¸  åºäº Vite å¼åï¼ç´§è·æ¶ä»£
- ð å®æ¹ææ¡£æ¥äº VitePress æ­å»º
- ð ç¨ UnoCss å®ç°åå­å CSS
- ð» åºäº Vitestè¿è¡ååæµè¯
- ð° åºäº Eslint + Prettier + huskyå®æé¡¹ç®è§èå
- ð§® åºäº Github Action è¿è¡ CIãCD
- ð¤ å©ç¨ Monorepo æ¹å¼ç®¡çç»ä»¶åºçæ
- ð¥ ä½¿ç¨ Codecov çææµè¯æ¥å
## ð å®è£

ä½¿ç¨ `pnpm` å®è£

```shell
pnpm add --save-dev hfun-ui-vite
```

ä½¿ç¨ `npm` å®è£

```shell
npm install --save-dev hfun-ui-vite
```

ä½¿ç¨ `yarn` å®è£

```shell
yarn add --save-dev hfun-ui-vite
```

## ð å¿«éä¸æ

### ð å¨éå¯¼å¥
å¨ `main.ts` ä¸­å¼å¥ä¸é¢åå®¹

```
import { createApp } from 'vue'
import App from './App.vue'
import hfunUI from 'hfun-ui-vite'
import 'hfun-ui-vite/style.css'

createApp(App).use(hfunUI).mount('#app')
```

### ð æéå¯¼å¥

```
import { createApp } from 'vue'
import App from './App.vue'

import { HButton } from 'hfun-ui-vite'
import 'hfun-ui-vite/HButton/style.css'
createApp(App).component(HButton.name, HButton).mount('#app')
```

## ð¨ ç¸å³é¾æ¥

- [å®æ¹ææ¡£](https://hfunteam.github.io/)
- [NPM](https://www.npmjs.com/package/hfun-ui-vite)