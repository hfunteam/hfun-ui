import { App } from "vue";
import MyButton from "./button/Button";
import "uno.css";

// 导出单独组件
export { MyButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
  },
};
