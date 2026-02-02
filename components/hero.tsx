'use client'

import Link from "next/link"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const phrases = ['Real-World Assets', 'US Treasuries', 'Tokenized Funds', 'Private Credit']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length)
        setIsAnimating(false)
      }, 400)
    }, 3000)

    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #ffffff 40%, oklch(0.8 0.06 175) 100%)'
      }}
    >
      {/* Text Content - Centered */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-20 flex flex-col items-center text-center pt-12 sm:pt-20 lg:pt-24">
        <div className="w-full max-w-4xl">
          {/* Headline */}
          <h1 className="font-alexandria font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.1] text-black mb-4 sm:mb-6">
            Instant Liquidity For <br />
            <span 
              className="inline-block min-w-[140px] sm:min-w-[200px] md:min-w-[280px] lg:min-w-[360px] transition-all duration-[400ms] ease-in-out"
              style={{
                opacity: isAnimating ? 0 : 1,
                transform: isAnimating ? 'translateY(8px)' : 'translateY(0)',
                filter: isAnimating ? 'blur(4px)' : 'blur(0px)',
              }}
            >
              {phrases[currentIndex]}
            </span>
          </h1>

          {/* Description */}
          <p className="font-inter font-normal text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.4] text-black mb-8 sm:mb-16">
            Instant RWA-stablecoin swaps based on a NAV-aware<br className="hidden sm:block" />
            RFQ process. No slippage, 24/7 atomic execution.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button disabled className="bg-gray-400 text-white cursor-not-allowed rounded-lg px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200">
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
