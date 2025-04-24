import type { SetupContext } from "vue";
import { prefixCls } from "../constant";

export const Title = (
  props: Record<string, unknown>,
  { slots }: SetupContext,
) => (
  <div class={`${prefixCls}-title`}>{slots.default ? slots.default() : ""}</div>
);
