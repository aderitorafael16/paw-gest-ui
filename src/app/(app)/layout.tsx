'use client'

import { Bell, Menu } from 'lucide-react'
import { Suspense, useState } from 'react'

import { NavLink } from '@/components/nav-link'
import { NavMenu } from '@/components/nav-menu'
import { Button } from '@/components/ui/button'

import Loading from '../loading'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState(false)

  function handleShowMenu() {
    setShowMenu((previewShowMenu) => !previewShowMenu)
  }

  return (
    <div className="flex min-h-screen w-full overscroll-none">
      <NavMenu showMenu={showMenu} handleShowMenu={handleShowMenu} />

      <main className="flex w-full flex-1 flex-col gap-2 bg-zinc-200 bg-effects bg-center p-6 dark:bg-zinc-900 md:ml-16 ">
        <div className="flex items-start justify-between md:justify-end">
          <Button
            className="md:hidden"
            onClick={handleShowMenu}
            variant={'outline'}
            size={'icon'}
          >
            <Menu className="h-4 w-4" />
          </Button>
          <nav className="rounded-md bg-zinc-100 p-1 dark:bg-zinc-800">
            <NavLink href="/notification"> Notificações</NavLink>
          </nav>
          <button>
            <Bell className="size-4" />9
          </button>
        </div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </div>
  )
}
