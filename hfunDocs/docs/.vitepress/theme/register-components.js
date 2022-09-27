import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import SmartyUI from '../../../../src/entry'
export function registerComponents(app) {
  app.use(SmartyUI)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
