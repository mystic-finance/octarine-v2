'use client'

import Link from "next/link"

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function LiquidationFallbacks() {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-20 lg:py-28">
      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-6 sm:gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-black leading-tight mb-4 sm:mb-6">
              Custom liquidation fallbacks<br />for RWAs
            </h2>
            <p className="font-inter font-normal text-sm sm:text-base lg:text-[18px] leading-[1.4] text-black mb-6 sm:mb-8">
              Octarine backstops RWA liquidations in lending markets and enables custom liquidation flows for them, such as dutch auctions and soft liquidations. Reach out to know more.
            </p>
            <Link href="mailto:hello@mysticfinance.xyz">
              <Button className="bg-black text-white hover:bg-gray-700 hover:shadow-lg hover:shadow-black/20 active:scale-95 rounded-lg px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200">
                Contact us
              </Button>
            </Link>
          </div>

          {/* Image Content */}
          <div className="flex-1 flex justify-center w-full lg:w-auto">
            <Image 
              src="/images/liquidation-visualization.png" 
              alt="Liquidation Network Visualization" 
              width={400} 
              height={400}
              className="w-full max-w-xs sm:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
