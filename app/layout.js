import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

import ThemeSwitch from "components/ThemeSwitch";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dave and Jerri',
  description: 'Our wedding website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={"bg-gradient-to-br from-rgb-75-0-130 to-rgb-147-112-219 dark:bg-gradient-to-br from-rgb-44-62-80 to-rgb-26-43-61"}>
        <Providers>
          {children}
          <ThemeSwitch />
        </Providers>
      </body>
    </html>
  )
}
