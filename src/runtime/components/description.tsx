import type { SetupContext } from "vue";
import { prefixCls } from "../constant";

export const Description = (
  props: Record<string, unknown>,
  { slots }: SetupContext,
) => (
  <div class={`${prefixCls}-description`}>
    {slots.default ? slots.default() : ""}
  </div>
);
