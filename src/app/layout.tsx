import { Bar } from '../components/titleBar/bar'
import { Nav } from "../components/navigation/nav"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
      <body className={inter.className}>
        <Bar></Bar>
        {children}
        <Nav></Nav>
      </body>
    </html>
  )
}
