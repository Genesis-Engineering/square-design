/* eslint-disable react/jsx-props-no-spreading */
import Base from '@components/base'
import { useMergeRefs } from '@floating-ui/react'
import React from 'react'
import i_popover_trigger_props from './interface'
import { usePopoverContext } from '../context'

const PopoverTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & i_popover_trigger_props
>(function PopoverTrigger(
  { children, asChild = false, className, ...props },
  propRef
) {
  const context = usePopoverContext()
  const childrenRef = (children as any).ref
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      })
    )
  }

  return (
    <button
      ref={ref}
      type="button"
      className={`${className} outline-none group`}
      // The user can style the trigger based on the state
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      <Base>{children}</Base>
    </button>
  )
})

export default PopoverTrigger
