/* eslint-disable @typescript-eslint/no-use-before-define */
import i_menu from '@interface/menu'
import React, { useState } from 'react'
import { all_menu } from '../../menu'

function MenuNavigation({ child }: { child: i_menu }) {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <li>
      <button
        type="button"
        className="
          outline-none w-full p-4 flex justify-between items-center 
          text-white uppercase text-xs text-left
          hover:bg-slate-300 hover:text-slate-600 
          focus:bg-slate-300 focus:text-slate-600"
        onClick={() => (child.children ? setOpen(!open) : null)}
      >
        <span>{child.label}</span>
        {child.children && <span className="text-lg">{open ? '-' : '+'}</span>}
      </button>
      {open && <BottomMenuNavigation children_menu={child.children} />}
    </li>
  )
}

function BottomMenuNavigation({
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
        return <MenuNavigation child={child} />
      })}
    </ul>
  )
}

BottomMenuNavigation.defaultProps = {
  children_menu: [],
  className: '',
}

export default function BottomNavigation() {
  return (
    <div className="flex">
      <div className="bg-black gap-8 flex">
        <span
          className="
          px-8 py-4 font-bold text-white text-3xl uppercase leading-none
          "
        >
          squ[ ]re
        </span>
        <div className="flex pr-4">
          {all_menu.map((menu: i_menu) => {
            return (
              <div className="relative group">
                <button
                  type="button"
                  className="
                    w-auto h-[64px] outline-none cursor-pointer 
                    inline-block px-4 align-middle
                    transition-all duration-500
                    group-hover:bg-slate-600 
                    group-focus-within:bg-slate-600
                  "
                >
                  <span
                    className={`${menu.icon} text-white text-xl 
                  inline-block align-middle`}
                  />
                  <span
                    className="
                    transition-all duration-500
                    max-w-[0px] inline-block overflow-hidden whitespace-nowrap
                    text-white font-medium uppercase align-middle
                    group-hover:max-w-[100vw] group-hover:ml-4
                    group-focus-within:max-w-[100vw] group-focus-within:ml-4"
                  >
                    {menu.label}
                  </span>
                </button>
                <div
                  className="
                  absolute left-0 bottom-[64px] bg-slate-600 
                  max-h-0 inline-block overflow-y-auto w-full
                  transition-all duration-500
                  group-hover:max-h-[60vh] 
                  group-focus-within:max-h-[60vh]
                  "
                >
                  <BottomMenuNavigation
                    children_menu={menu.children}
                    className="-ml-4"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
