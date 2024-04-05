import './globals.css'

import type { Metadata } from 'next'
import { Roboto_Flex as FontSans } from 'next/font/google'

import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'

import Providers from './providers'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Paw Gest',
  description: 'Software de Gestão escolar.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-pt" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-effects font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
