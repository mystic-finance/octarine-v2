'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollYRef.current || currentScrollY < 50)
      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="h-16 sm:h-20 flex items-center justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-20 flex items-center justify-between">
          {/* Logo - Always visible */}
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo.png" alt="Octarine" width={24} height={24} />
            <span className="font-semibold text-base sm:text-lg text-black">Octarine</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <a href="https://docs.octarine.finance/" className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">
              Docs
            </a>
            <a href="https://curator-api.mysticfinance.xyz/docs/#/rfq" className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">
              API
            </a>
            <Button className="bg-black text-white hover:bg-gray-700 hover:shadow-lg hover:shadow-black/20 active:scale-95 rounded-lg px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium transition-all duration-200">
              Start Trading
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 text-black transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col gap-3">
            <a
              href="https://docs.octarine.finance/"
              className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </a>
            <a
              href="https://curator-api.mysticfinance.xyz/docs/#/rfq"
              className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </a>
            <Button className="w-full bg-black text-white hover:bg-gray-700 hover:shadow-lg hover:shadow-black/20 active:scale-95 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 mt-2">
              Start Trading
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
