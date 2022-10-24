import Avator from "./avator";
import { App } from "vue";

// 导出Avator组件
export { Avator };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(Avator.name, Avator);
  },
};
