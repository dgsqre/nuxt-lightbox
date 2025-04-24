import { prefixCls } from '../constant'
import { SetupContext } from 'vue'

export const Title = (
  props: Record<string, unknown>,
  { slots }: SetupContext
) => (
  <div class={`${prefixCls}-title`}>{slots.default ? slots.default() : ''}</div>
)
