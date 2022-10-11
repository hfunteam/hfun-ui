import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import HfunUI from '../../../../../hfun-ui/src/entry'
export function registerComponents(app) {
  app.use(HfunUI)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
