// src/app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/header'
import FloatingActionButton from '@/components/floating-action-button'
import { Providers } from '@/components/providers'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gradient-to-br from-gradient-from to-gradient-to min-h-screen text-foreground`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1 w-full flex flex-col items-center mx-auto px-4 md:px-6 pt-24 pb-16">
            <div className="w-full max-w-7xl px-4">
            {children}
          </div>
          </main>
          <Footer/>
          <FloatingActionButton />
        
        </Providers>
      </body>
    </html>
  )
}
