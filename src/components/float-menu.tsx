'use client'

import { BarChartBig, Files, Landmark, Settings, User, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { z } from 'zod'

import { cn } from '@/lib/utils'

import { AsideLink } from './aside-link'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { ThemeSwitcher } from './ui/theme-switcher'
import { UserButton } from './user-button'

export function FloatMenu() {
  const searchParams = useSearchParams()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  setIsMenuOpen(z.coerce.boolean().parse(searchParams.get('isMenuOpen')))

  function handleShowMenu(isMenuOpen: string) {
    const params = new URLSearchParams(searchParams)
    if (isMenuOpen) {
      params.set('isMenuOpen', isMenuOpen)
    }
  }
  return (
    <aside
      className={cn('hidden', isMenuOpen ? 'absolute min-h-screen w-full' : '')}
    >
      <div className="flex flex-col items-center gap-2">
        <UserButton />
        <Button
          onClick={() => handleShowMenu('false')}
          variant={'outline'}
          size={'icon'}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <nav className="w-full">
        <AsideLink href="/dashboard" text="/dashboard">
          <BarChartBig className="size-7" />
          <span>Dashboard</span>
        </AsideLink>

        <Separator />

        <AsideLink href="/students" text="/students">
          <User className="size-7" />
          <span>Estudantes</span>
        </AsideLink>

        <Separator />

        <AsideLink href="/payments" text="/payments">
          <Landmark className="size-7" />
          <span>Pagamentos</span>
        </AsideLink>

        <Separator />

        <AsideLink href="/resumes" text="/resumes">
          <Files className="size-7" />
          <span>Relatórios</span>
        </AsideLink>

        <Separator />

        <AsideLink href="/settings" text="/settings">
          <Settings className="size-7" />
          <span>Definições</span>
        </AsideLink>
      </nav>

      <div className="inline-flex items-center gap-2">
        <span className="text-sm">Mudar tema</span>
        <ThemeSwitcher />
      </div>
    </aside>
  )
}
