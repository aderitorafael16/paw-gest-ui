'use client'

import { Menu } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'

export function MenuButton() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function handleShowMenu() {
    const params = new URLSearchParams(searchParams)
    params.set('isMenuOpen', 'true')

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <Button
      className="md:hidden"
      onClick={handleShowMenu}
      variant={'outline'}
      size={'icon'}
    >
      <Menu className="h-4 w-4" />
    </Button>
  )
}
