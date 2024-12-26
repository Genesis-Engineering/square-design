import BottomNavigationList from '@internal_components/bottom_navigation_list'
import React from 'react'
import i_menu from '../../i_menu'

import { all_menu } from '../../menu'

export default function BottomNavigation() {
  return (
    <div className="flex bg-black md:bg-transparent">
      <div
        className="
        md:bg-black 
        flex flex-col-reverse md:flex-row md:gap-8 
        w-full md:w-auto"
      >
        <span
          className="
            px-8 py-4 
            font-bold text-white text-3xl uppercase leading-none
            text-center
          "
        >
          squ[ ]re
        </span>
        <div className="flex md:pr-4 justify-center">
          {all_menu.map((menu: i_menu) => {
            return (
              <div className="relative group" key={menu.label}>
                <button
                  type="button"
                  className="
                    w-auto h-[64px] outline-none cursor-pointer 
                    inline-block px-4 align-middle
                    transition-all duration-500
                    group-hover:bg-zinc-600 
                    group-focus-within:bg-zinc-600
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
                    text-white font-medium text-xs uppercase align-middle
                    group-hover:max-w-[100vw] group-hover:ml-4
                    group-focus-within:max-w-[100vw] group-focus-within:ml-4"
                  >
                    {menu.label}
                  </span>
                </button>
                <div
                  className="
                  absolute left-0 bottom-[64px] bg-zinc-600 
                  max-h-0 inline-block overflow-y-auto w-full
                  transition-all duration-500
                  group-hover:max-h-[60vh] 
                  group-focus-within:max-h-[60vh]
                  "
                >
                  <BottomNavigationList
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
