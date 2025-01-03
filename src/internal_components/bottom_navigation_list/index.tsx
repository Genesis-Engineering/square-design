/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import BottomNavigationListItem from '@internal_components/bottom_navigation_list_item'
import React from 'react'
import i_menu from '../../i_menu'

function BottomNavigationList({
  children_menu,
  className,
}: {
  children_menu?: Array<i_menu>
  className?: string
}) {
  if (!children_menu) return null
  return (
    <ul className={`pl-4 ${className}`}>
      {children_menu?.map((child) => {
        return <BottomNavigationListItem key={child.label} child={child} />
      })}
    </ul>
  )
}

export default BottomNavigationList
