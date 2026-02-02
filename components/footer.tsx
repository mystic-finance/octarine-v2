'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8 sm:py-12 lg:py-16 border-t border-foreground/20">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-20">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Image src="/images/logo.png" alt="Octarine" width={24} height={24} />
                <span className="font-bold text-base sm:text-lg">Octarine</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground/70 mb-3 sm:mb-4">
                © 2026 Octarine. All rights reserved.
              </p>
              <Link href="https://x.com/octarinefi" target="_blank" rel="noopener noreferrer" className="inline-block text-foreground hover:text-foreground/70 transition-colors">
                <Image src="/images/x.png" alt="X (Twitter)" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>

            <div className="flex gap-16 sm:gap-20">
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Resources</h4>
                <nav className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm">
                  <Link href="https://docs.octarine.finance/" className="text-foreground/70 hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                  <Link href="https://curator-api.mysticfinance.xyz/docs/#/rfq" className="text-foreground/70 hover:text-foreground transition-colors">
                    API Reference
                  </Link>
                </nav>
              </div>

              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Protocol</h4>
                <nav className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm">
                  <Link href="mailto:hello@mysticfinance.xyz" className="text-foreground/70 hover:text-foreground transition-colors">
                    Contact
                  </Link>
                  <Link href="https://docs.octarine.finance/useful-links/terms-of-use" className="text-foreground/70 hover:text-foreground transition-colors">
                    Terms of Use
                  </Link>
                  <Link href="https://docs.octarine.finance/useful-links/privacy-policy" className="text-foreground/70 hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
