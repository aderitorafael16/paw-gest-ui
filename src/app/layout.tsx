import './globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'

import Providers from './providers'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: {
    template: '%s | Paw Gest',
    absolute: 'Paw Gest',
  },
  description: 'The all-in-one management school solution for all devices.',
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
