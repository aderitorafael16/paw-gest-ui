import { ReactNode, Suspense } from 'react'

import { NavItemsProps } from '@/@types/nav-items'
import Loading from '@/app/loading'
import { NavLink } from '@/components/nav-link'

const NavItems: NavItemsProps[] = [
  {
    href: '/students',
    text: 'Cadastro',
  },
  {
    href: '/students/list',
    text: 'Listagem',
  },
  {
    href: '/students/team',
    text: 'Turmas',
  },
]

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-min w-full space-y-4">
      <div className="z-10 h-24 w-full space-y-3">
        <h1 className="text-2xl font-bold">Estudantes</h1>
        <nav className="flex w-fit gap-1 rounded-lg p-2">
          {NavItems.map((item, index) => (
            <NavLink key={index} href={item.href}>
              {item.text}
            </NavLink>
          ))}
        </nav>
      </div>
      <section>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </section>
    </main>
  )
}
