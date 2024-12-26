import { Placement } from '@floating-ui/react'

export default interface i_popover_option {
  initialOpen?: boolean
  placement?: Placement
  modal?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
