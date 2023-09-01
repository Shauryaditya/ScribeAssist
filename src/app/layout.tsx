import './globals.css'
import type { Metadata } from 'next'

import {Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:['100','200','300','400','500','600','800','700','900'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
