import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import { cn } from '@/lib/utils'

import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'Ziad Tamim – AI Portfolio & Blog',
  description: 'Personal portfolio and lessons I learned while teaching myself to code.',
  keywords: ['Ziad Tamim', 'AI Engineer Portfolio', 'Machine Learning Blog', 'Deep Learning Projects', 'SaaS Developer'],
  authors: [{ name: 'Ziad Tamim' }],
  openGraph: {
    title: 'Ziad Tamim – AI Portfolio & Blog',
    description: 'AI projects and technical insights by Ziad Tamim.',
    url: 'https://www.ziadtamim.com/',
    siteName: 'Ziad Tamim Portfolio',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}