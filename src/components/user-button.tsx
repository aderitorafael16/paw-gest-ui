import { LogOut } from 'lucide-react'
import Link from 'next/link'

import { auth, signOut } from '@/auth'
import { cn } from '@/lib/utils'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export async function UserButton({ showMenu }: { showMenu: boolean }) {
  const session = await auth()

  async function handleSignOut() {
    await signOut()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="inline-flex items-center gap-2 rounded-full bg-violet-800 p-1 ">
          <Avatar>
            {session?.user && session.user.image && session.user.name ? (
              <div className="h-full w-full">
                <AvatarImage
                  src={session?.user.image}
                  alt={session?.user.name}
                />
                <AvatarFallback>{session?.user.name}</AvatarFallback>
              </div>
            ) : (
              <div className="aspect-square h-full w-full bg-accent" />
            )}
          </Avatar>
          <span className={cn('md:hidden ', showMenu ? 'flex' : '')}>
            Adérito Rafael
            {session?.user.name}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuItem>
          <Link href="profile">Perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <form action={handleSignOut}>
          <DropdownMenuItem className="flex items-center gap-2" asChild>
            <button type="submit" className="w-full ">
              <LogOut className="size-4 text-red-400 hover:text-red-400" />
              Sair
            </button>
          </DropdownMenuItem>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
