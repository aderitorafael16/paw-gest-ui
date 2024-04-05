import { ArrowRightIcon } from '@radix-ui/react-icons'
import { PawPrint } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Access denied',
}

export default function AccessDenied() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-[350px] flex-col justify-center space-y-6">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="flex items-center justify-center rounded-full bg-zinc-900 p-4 text-xl ">
            <PawPrint className="mr-2 h-6 w-6 text-violet-600" />
            <code>Paw Gest</code>
          </h1>

          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access denied!
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              It looks like an error has ocurred while you were trying to
              authenticate.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Only <strong>invited members</strong> can sign in to Paw Gest.
            </p>
          </div>
          <Button asChild variant="outline" type="button" className="w-full">
            <Link href="/auth/sign-in">
              Try again
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
