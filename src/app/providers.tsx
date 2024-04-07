'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { ReactNode, useState } from 'react'

import { TooltipProvider } from '@/components/ui/tooltip'

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => {
    return new QueryClient()
  })

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
