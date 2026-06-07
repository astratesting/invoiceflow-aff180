import './globals.css'
import type { Metadata } from 'next'
import { Manrope, Source_Sans_3 } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'InvoiceFlow - Automated Collections & Negotiation Engine',
  description: 'Get paid faster with automated follow-ups, built-in negotiation, and real-time analytics for freelancers and SMBs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sourceSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
