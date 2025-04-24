import { prefixCls } from '../constant'
import { SetupContext } from 'vue'

export const Description = (
  props: Record<string, unknown>,
  { slots }: SetupContext
) => (
  <div class={`${prefixCls}-description`}>
    {slots.default ? slots.default() : ''}
  </div>
)
