import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import HfunUI from './../../../../src/entry'
import 'element-plus/dist/index.css'

export function registerComponents(app) {
  app.use(HfunUI)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
