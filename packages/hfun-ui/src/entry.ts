import { App } from "vue";
import Button from "./Button/button";
import Avator from "./Avator/avator";
import "uno.css";

// 导出单独组件
export { Avator, Button };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(Button.name, Button);
    app.component(Avator.name, Avator);
  },
};
