import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

// Components
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Science & Technology Club',
  description: 'This is the official site of SnT Club SKIT, Jaipur RJ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
