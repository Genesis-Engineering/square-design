import Popover from '@components/popover'
import PopoverContent from '@components/popover/content'
import PopoverDescription from '@components/popover/description'
import PopoverHeading from '@components/popover/heading'
import PopoverTrigger from '@components/popover/trigger'
import React from 'react'

export default function NotificationButton() {
  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <span className="icon-notifications" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeading>Notifications</PopoverHeading>
        <PopoverDescription>
          <ul>
            <li>Someone ping you</li>
            <li>Someone make an order</li>
            <li>Order x arrived</li>
          </ul>
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  )
}
