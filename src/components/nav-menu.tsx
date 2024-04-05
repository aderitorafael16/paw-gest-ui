import { BarChartBig, Files, Landmark, Settings, User, X } from 'lucide-react'

import { cn } from '@/lib/utils'

import { AsideLink } from './aside-link'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { ThemeSwitcher } from './ui/theme-switcher'
import { UserButton } from './user-button'

type NavMenuProps = {
  showMenu: boolean
  handleShowMenu(): void
}

export function NavMenu({ handleShowMenu, showMenu }: NavMenuProps) {
  return (
    <>
      <aside
        className={cn(
          'fixed hidden min-h-screen w-16 flex-col items-center justify-between overflow-visible bg-zinc-50 py-12 shadow  dark:bg-zinc-950 md:flex',
          showMenu
            ? 'z-10 flex min-h-screen w-full overscroll-none px-4 md:w-16'
            : '',
        )}
      >
        <div
          className={cn(
            'flex flex-col items-center gap-2',
            showMenu ? 'w-full flex-row justify-between' : '',
          )}
        >
          <UserButton showMenu={showMenu} />
          <Button
            className="md:hidden"
            onClick={handleShowMenu}
            variant={'outline'}
            size={'icon'}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="w-full md:hidden">
          <AsideLink
            onClick={handleShowMenu}
            href="/dashboard"
            text="/dashboard"
          >
            <BarChartBig className="size-7" />
            <span
              className={cn(
                'hidden data-[show=true]:flex',
                showMenu ? 'flex' : '',
              )}
            >
              Dashboard
            </span>
          </AsideLink>

          <Separator />

          <AsideLink onClick={handleShowMenu} href="/students" text="/students">
            <User className="size-7" />
            <span
              className={cn(
                'hidden data-[show=true]:flex',
                showMenu ? 'flex' : '',
              )}
            >
              Estudantes
            </span>
          </AsideLink>

          <Separator />

          <AsideLink onClick={handleShowMenu} href="/payments" text="/payments">
            <Landmark className="size-7" />
            <span
              className={cn(
                'hidden data-[show=true]:flex',
                showMenu ? 'flex' : '',
              )}
            >
              Pagamentos
            </span>
          </AsideLink>

          <Separator />

          <AsideLink onClick={handleShowMenu} href="/resumes" text="/resumes">
            <Files className="size-7" />
            <span
              className={cn(
                'hidden data-[show=true]:flex',
                showMenu ? 'flex' : '',
              )}
            >
              Relatórios
            </span>
          </AsideLink>

          <Separator />

          <AsideLink onClick={handleShowMenu} href="/settings" text="/settings">
            <Settings className="size-7" />
            <span
              className={cn(
                'hidden data-[show=true]:flex',
                showMenu ? 'flex' : '',
              )}
            >
              Definições
            </span>
          </AsideLink>
        </div>

        <nav className="hidden w-full flex-col items-center md:flex">
          <AsideLink href="/dashboard" text="/dashboard">
            <BarChartBig className="flex size-7" />
            <span className={cn('hidden data-[show=true]:flex')}>
              Dashboard
            </span>
          </AsideLink>

          <Separator />

          <AsideLink href="/students" text="/students">
            <User className="size-7" />
            <span className={cn('md:hidden')}>Estudantes</span>
          </AsideLink>

          <Separator />

          <AsideLink href="/payments" text="/payments">
            <Landmark className="size-7" />
            <span className={cn('md:hidden')}>Pagamentos</span>
          </AsideLink>

          <Separator />

          <AsideLink href="/resumes" text="/resumes">
            <Files className="size-7" />
            <span className={cn('md:hidden')}>Relatórios</span>
          </AsideLink>

          <Separator />

          <AsideLink href="/settings" text="/settings">
            <Settings className="size-7" />
            <span className={cn('md:hidden')}>Definições</span>
          </AsideLink>
        </nav>

        <div className="inline-flex items-center gap-2">
          <span className={cn('text-sm md:hidden')}>Mudar tema</span>
          <ThemeSwitcher />
        </div>
      </aside>
    </>
  )
}
