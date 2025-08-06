'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import { PostHogProvider } from './posthog-provider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider>
      <ThemeProvider
        enableSystem
        attribute='class'
        defaultTheme='system'
        disableTransitionOnChange
      >
        {children}
        <ToasterProvider />
      </ThemeProvider>
    </PostHogProvider>
  )
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}