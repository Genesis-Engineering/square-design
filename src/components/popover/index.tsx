import * as React from 'react'
import { PopoverContext } from './context'
import usePopover from './hook'
import i_popover_option from './interface'

function Popover({
  children,
  modal = false,
  ...restOptions
}: {
  children: React.ReactNode
} & i_popover_option) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover({ modal, ...restOptions })
  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  )
}

export default Popover
