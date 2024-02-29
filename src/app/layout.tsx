import { Bar } from '../components/titleBar/bar'
import { Nav } from "../components/navigation/nav"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'classHelper',
  description: 'dodang high school class helper PWA app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#F2F4F6"></meta>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <link rel="manifest" href="/manifest.json"></link>
      <body className={inter.className}>
        <Bar></Bar>
        {children} 
        <Nav></Nav>
      </body>
    </html>
  )
}
