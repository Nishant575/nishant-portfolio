'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = {
  '/': { name: 'Home' },
  '/projects': { name: 'Projects' },
  '/experiences': { name: 'Experience' },
  '/contact': { name: 'Contact' },
}


export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="glass-card rounded-2xl px-6 py-4 animate-fade-in">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-gradient hover:scale-105 transition-transform">
            ND
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                  pathname === path
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'hover:bg-white/10 text-neutral-300 hover:text-white'
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 animate-slide-up">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all duration-300 mb-2 ${
                  pathname === path
                    ? 'bg-white/20 text-white'
                    : 'hover:bg-white/10 text-neutral-300 hover:text-white'
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
