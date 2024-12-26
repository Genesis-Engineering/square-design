import React from 'react'
import { useMatches } from 'react-router-dom'
import NotificationButton from './notification_button'
import ThemeButton from './theme_button'
import i_route_hande from '../../i_route_handle'

export default function TopNavigation() {
  const matches = useMatches()
  const handle = matches.find((match) => Boolean(match.handle))?.handle
  const { page_title, page_description } = handle as unknown as i_route_hande

  return (
    <nav
      className="
      py-4 border-b-2 border-b-black 
      gap-8 flex flex-col justify-between md:flex-row
      dark:border-b-zinc-300"
    >
      <div className="flex flex-col gap-2 md:gap-0 dark:text-zinc-300">
        <span className="font-semibold text-3xl uppercase">{page_title}</span>
        <p className="text-sm md:max-w-[50vw] text-slate-600">
          {page_description}
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <ThemeButton />
        <NotificationButton />
      </div>
    </nav>
  )
}
