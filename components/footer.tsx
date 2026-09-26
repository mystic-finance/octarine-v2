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
              <div className="flex items-center mb-3 sm:mb-4">
                <Image src="/images/octarine-lockup.svg" alt="Octarine by Mystic" width={235} height={60} className="h-7 w-auto sm:h-9" />
              </div>
              <p className="text-xs sm:text-sm text-foreground/70 mb-3 sm:mb-4">
                © 2026 Octarine. All rights reserved.
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <Link href="https://x.com/octarinefi" target="_blank" rel="noopener noreferrer" className="inline-block text-foreground hover:text-foreground/70 transition-colors">
                  <Image src="/images/x.png" alt="X (Twitter)" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="https://discord.gg/yAXfgMS8zg" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="inline-block text-foreground hover:text-foreground/70 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                </Link>
              </div>
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
