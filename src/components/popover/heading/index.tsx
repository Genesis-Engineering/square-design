import { useId } from '@floating-ui/react'
import React from 'react'
import { usePopoverContext } from '../context'

const PopoverHeading = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLProps<HTMLHeadingElement>
>(function PopoverHeading(props, ref) {
  const { setLabelId } = usePopoverContext()
  const id = useId()

  // Only sets `aria-labelledby` on the Popover root element
  // if this component is mounted inside it.
  React.useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <h2
      {...props}
      ref={ref}
      id={id}
      className="border-b-2 border-black py-2 px-4 text-sm"
    >
      {props.children}
    </h2>
  )
})

export default PopoverHeading
