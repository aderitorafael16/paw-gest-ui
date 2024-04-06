import { LogOut } from 'lucide-react'
import Link from 'next/link'

import { auth, signOut } from '@/auth'
import { getNameInitials } from '@/utils/get-name-initials'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export async function UserButton() {
  const session = await auth()

  async function handleSignOut() {
    'use server'

    await signOut()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar>
          {session?.user && session.user.image && session.user.name ? (
            <>
              <AvatarImage src={session?.user.image} />
              <AvatarFallback>
                {getNameInitials(session?.user.name)}
              </AvatarFallback>
            </>
          ) : (
            <div className="aspect-square h-full w-full bg-accent" />
          )}
        </Avatar>
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
