import { App } from "vue";
import HButton from "./HButton/button";
import HAvator from "./HAvator/avator";
import "uno.css";

// 导出单独组件
export { HAvator, HButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(HButton.name, HButton);
    app.component(HAvator.name, HAvator);
  },
};
