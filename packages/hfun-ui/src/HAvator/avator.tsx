import { defineComponent, PropType } from "vue";
import "uno.css";

// 形状
export type IShape = "circle" | "square";

// 大小
export type ISize = "large" | "default" | "small";

export const props = {
  // 新增
  size: {
    type: String as PropType<ISize>,
    default: "default",
  },

  shape: {
    type: String as PropType<IShape>,
    default: "circle",
  },

  icon: {
    type: String,
    default: "",
  },
} as const;

export default defineComponent({
  name: "HAvator",
  props,
  setup(props) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      default: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };

    return () => (
      <div
        class={`
          py-${size[props.size].y}
          px-${size[props.size].x}
          border-solid
          mx-1
        `}
      >
        11111
      </div>
    );
  },
});
