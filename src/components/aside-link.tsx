'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type LinkProps = ComponentProps<typeof Link> & {
  text: string
}

export function AsideLink({ text, ...props }: LinkProps) {
  const current = usePathname().startsWith(text)

  return (
    <Link
      {...props}
      className={cn(
        'z-10 inline-flex w-full items-center gap-2 rounded py-3 pl-5 text-sm text-zinc-800 hover:text-zinc-600  dark:text-zinc-300 dark:hover:text-zinc-100 md:w-[4.5rem]',
        current
          ? 'bg-violet-800 text-zinc-50 shadow-md hover:bg-violet-600'
          : '',
      )}
    />
  )
}
