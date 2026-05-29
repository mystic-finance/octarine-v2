import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Alexandria, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _alexandria = Alexandria({ subsets: ["latin"], variable: "--font-alexandria" });
const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Octarine - Instant Liquidity for Real-World Assets",
  description:
    "Trade tokenized securities like Private Credit, Treasuries, Commodities, and any RWA with instant onchain settlement and zero slippage.",
  generator: 'v0.app',
  icons: {
    icon: '/images/octarine-logo.svg',
    apple: '/images/octarine-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_alexandria.variable} ${_inter.variable}`}>
      <body className={`font-sans antialiased bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
