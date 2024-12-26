import BottomNavigationList from '@internal_components/bottom_navigation_list'
import React, { useState } from 'react'
import i_menu from '../../i_menu'

export default function BottomNavigationListItem({ child }: { child: i_menu }) {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <li>
      <button
        type="button"
        className="
            outline-none w-full p-4 flex justify-between items-center 
            text-white uppercase text-xs text-left
            hover:bg-zinc-300 hover:text-zinc-600 
            focus:bg-zinc-300 focus:text-zinc-600"
        onClick={() => (child.children ? setOpen(!open) : null)}
      >
        <span>{child.label}</span>
        {child.children && <span className="text-lg">{open ? '-' : '+'}</span>}
      </button>
      {open && <BottomNavigationList children_menu={child.children} />}
    </li>
  )
}
