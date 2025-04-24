import { defineComponent } from "vue";
import { prefixCls } from "../constant";

export const SvgIcon = defineComponent({
  name: "SvgIcon",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return () => (
      <svg class={`${prefixCls}-icon icon`} aria-hidden="true">
        <use xlinkHref={`#icon-${props.type}`}></use>
      </svg>
    );
  },
});
