import BottomNavigation from '@internal_components/bottom_navigation'
import TopNavigation from '@internal_components/top_navigation'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthenticatedLayout() {
  return (
    <div
      className="
        flex flex-col justify-between gap-8 
        h-dvh px-8 
        bg-white dark:bg-zinc-900"
    >
      <TopNavigation />
      <div className="flex flex-1 overflow-x-hidden overflow-y-auto">
        <Outlet />
      </div>
      <BottomNavigation />
    </div>
  )
}
