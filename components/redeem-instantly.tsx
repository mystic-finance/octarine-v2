'use client'

import Image from 'next/image'

export default function RedeemInstantly() {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-background">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-20">
          {/* Main Teal Card */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md mb-6 sm:mb-8">
            {/* Background - Light Green */}
            <div className="bg-accent/10 border border-accent/20 p-6 sm:p-12 lg:p-16">
              <div className="max-w-md">
                <div className="inline-flex items-center bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 w-fit mb-4 sm:mb-8">
                  <span className="text-xs sm:text-sm text-gray-600 font-semibold">{"The First RWA DEX"}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-6">{"Redeem RWAs Instantly"}</h2>
                <p className="text-sm sm:text-base text-gray-600">Octarine is the first RWA DEX of its kind. Atomic swaps,<br />based on NAV and fully built for institutions. Welcome to<br />the future of markets.</p>
              </div>
            </div>

            {/* My Coins Screenshot Overlay - hidden on mobile */}
            <div className="hidden lg:block absolute top-20 right-8 bg-white rounded-2xl p-8 w-96 shadow-lg" style={{maxHeight: '500px', overflow: 'hidden'}}>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg text-black">My Assets</h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>

              <div className="space-y-4">
                {/* TBILL */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src="/images/tbill-logo.png" alt="TBILL" width={40} height={40} />
                    <div>
                      <p className="font-semibold text-black text-sm">TBILL</p>
                      <p className="text-xs text-gray-500">TBILL</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-purple-500 text-sm">1,500,760 TBILL</p>
                    <p className="text-xs text-gray-500">$1,696,359</p>
                  </div>
                </div>

                {/* BUIDL */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src="/images/buidl-logo.png" alt="BUIDL" width={40} height={40} />
                    <div>
                      <p className="font-semibold text-black text-sm">BUIDL</p>
                      <p className="text-xs text-gray-500">BUIDL</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-purple-500 text-sm">550,000 BUIDL</p>
                    <p className="text-xs text-gray-500">$550,000</p>
                  </div>
                </div>

                {/* ACRED */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src="/images/acred-logo.png" alt="ACRED" width={40} height={40} />
                    <div>
                      <p className="font-semibold text-black text-sm">ACRED</p>
                      <p className="text-xs text-gray-500">APOLLO</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-purple-500 text-sm">3,670,450 ACRED</p>
                    <p className="text-xs text-gray-500">$4,025,533</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid - Responsive proportional sizing with gap compensation */}
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 mb-4">
            {/* Left section - Two feature cards */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto" style={{flex: '0 0 calc(77% - 8px)'}}>
              {/* Swap Card - 50% */}
              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-200 flex flex-col justify-between" style={{backgroundColor: '#F2F2F7', flex: '1', minHeight: '240px', height: 'auto'}}>
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 w-fit">
                  <Image src="/images/compare-icon.png" alt="NAV-Based" width={16} height={16} />
                  <h3 className="font-semibold text-black text-xs sm:text-sm">NAV-based</h3>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">Precise pricing based on NAV</h4>
                  <p className="text-xs sm:text-sm text-gray-700">All quotes are based on the RWA's NAV<br className="hidden sm:block" />at the time of the swap, to get you the<br className="hidden sm:block" />most precise pricing.</p>
                </div>
              </div>

              {/* Compliance Card - 50% */}
              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-200 flex flex-col justify-between" style={{backgroundColor: '#F2F2F7', flex: '1', minHeight: '240px', height: 'auto'}}>
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 w-fit">
                  <Image src="/images/lock-icon.png" alt="No Slippage" width={16} height={16} />
                  <h3 className="font-semibold text-black text-xs sm:text-sm">No Slippage</h3>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">The Best Prices in the Market</h4>
                  <p className="text-xs sm:text-sm text-gray-700">We aggregate on and off-chain liquidity to<br className="hidden sm:block" />get you the best prices in the market<br className="hidden sm:block" />with no slippage.</p>
                </div>
              </div>
            </div>

            {/* Logo Card - Right aligned */}
            <div className="hidden lg:flex bg-white rounded-2xl border border-gray-200 flex-col justify-center items-center" style={{flex: '0 0 calc(23% - 8px)', minHeight: '240px'}}>
              <Image src="/images/octarine-logo.png" alt="Octarine Logo" width={80} height={80} />
            </div>
          </div>

          {/* Bottom Feature Cards */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Compliance Card */}
            <div className="bg-accent/10 border border-accent/20 rounded-xl sm:rounded-2xl p-4 sm:p-8 flex flex-col justify-between w-full sm:w-1/2" style={{minHeight: '240px', height: 'auto'}}>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 w-fit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h3 className="font-semibold text-black text-xs sm:text-sm">Full Regulatory Assurance</h3>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">Compliance-first</h4>
                <p className="text-xs sm:text-sm text-gray-700">Only eligible parties can fill and request swaps on<br className="hidden sm:block" />Octarine. We run whitelist checks on all participants<br className="hidden sm:block" />and run trades by license-holders when relevant.</p>
              </div>
            </div>

            {/* Atomic Card */}
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-8 border border-gray-200 flex flex-col justify-between w-full sm:w-1/2" style={{backgroundColor: '#F2F2F7', minHeight: '240px', height: 'auto'}}>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 w-fit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
                <h3 className="font-semibold text-black text-xs sm:text-sm">Atomic</h3>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">Atomic, lightning-fast execution</h4>
                <p className="text-xs sm:text-sm text-gray-700">All swaps are atomic, so you risk nothing. And<br className="hidden sm:block" />we execute the swaps in seconds, not<br className="hidden sm:block" />minutes. No waiting around.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
