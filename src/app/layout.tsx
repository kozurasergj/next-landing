import type { Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import './globals.css'
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'My version',
  description: 'Unity',
}


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${montserrat.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
