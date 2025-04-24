import type { SetupContext } from "vue";
import { prefixCls } from "../constant";

export const ImgTitle = (props: Record<string, unknown>, { slots }: SetupContext) => (
  <div class={`${prefixCls}-img-title`}>
    {slots.default ? slots.default() : ""}
  </div>
);
