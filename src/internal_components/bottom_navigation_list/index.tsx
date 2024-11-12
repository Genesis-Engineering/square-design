/* eslint-disable max-len */
import i_menu from '@interface/menu'
import BottomNavigationListItem from '@internal_components/bottom_navigation_list_item'
import React from 'react'

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
        return <BottomNavigationListItem child={child} />
      })}
    </ul>
  )
}

BottomNavigationList.defaultProps = {
  children_menu: [],
  className: '',
}

export default BottomNavigationList
