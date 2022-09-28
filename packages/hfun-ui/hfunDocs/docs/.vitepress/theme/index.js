import DefaultTheme from "vitepress/theme"
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    registerComponents(app)
  },
}