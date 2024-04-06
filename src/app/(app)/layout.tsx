import { Bell } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

import { NavMenu } from '@/components/nav-menu'
import { Separator } from '@/components/ui/separator'
import { UserButton } from '@/components/user-button'

import { MenuButton } from '../../components/menu-button'
import Loading from '../loading'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full overscroll-none">
      <NavMenu />

      <main className="flex w-full flex-1 flex-col gap-2 bg-zinc-200 bg-effects bg-center p-6 dark:bg-zinc-900 md:ml-16 ">
        <div className="flex items-start justify-between md:justify-end">
          <MenuButton />

          <div className="flex h-fit items-center gap-2">
            <UserButton />
            <Separator orientation="vertical" />
            <Link
              className="flex items-center justify-center gap-1 rounded-xl bg-zinc-100 px-2 py-1 dark:bg-zinc-800"
              href="/notification"
            >
              {' '}
              <Bell className="size-4" />9
            </Link>
          </div>
        </div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </div>
  )
}
