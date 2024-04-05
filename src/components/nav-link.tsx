'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

type LinkProps = ComponentProps<typeof Link>

export function NavLink({ ...props }: LinkProps) {
  const pathname = usePathname()

  const current = pathname === props.href

  return (
    <Link
      {...props}
      className={cn(
        'px-3 text-zinc-800 dark:text-zinc-400',
        current
          ? 'border-b-2 border-violet-800 text-zinc-950 dark:text-zinc-50 '
          : '',
      )}
    />
  )
}
