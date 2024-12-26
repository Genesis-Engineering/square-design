import React from 'react'

export default function Base({
  children,
  className,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="relative inline-block group">
      <div
        className="absolute block
            left-1.5 top-1.5 w-full h-full bg-zinc-300
            transition-all duration-150
            group-hover:left-0 group-hover:top-0 group-hover:bg-black
            group-focus:left-0 group-focus:top-0 group-focus:bg-black
            group-focus-within:left-0 group-focus-within:top-0 
            group-focus-within:bg-black
            dark:bg-zinc-600 dark:group-hover:bg-zinc-300 
            dark:group-focus:bg-zinc-300 dark:group-focus-within:bg-zinc-300
            "
      />
      <div
        className={`
            relative 
            left-0 top-0 w-full h-full 
            border border-2 border-solid border-black
            py-1 px-4
            dark:border-zinc-300
            ${className}`}
      >
        <div
          className="
            font-medium text-black text-center uppercase tracking-widest
            transition-all duration-150
            group-hover:text-zinc-300
            group-focus:text-zinc-300
            group-focus-within:text-zinc-300
            dark:text-zinc-300 dark:group-hover:text-black
            dark:group-focus:text-black dark:group-focus-within:text-black
            "
        >
          {children}
        </div>
      </div>
    </div>
  )
}
