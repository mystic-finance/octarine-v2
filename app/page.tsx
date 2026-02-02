import Header from '@/components/header'
import Hero from '@/components/hero'
import RedeemInstantly from '@/components/redeem-instantly'
import LiquidationFallbacks from '@/components/liquidation-fallbacks'
import BridgesSection from '@/components/bridges-section'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative">
        {/* Background image extends from navbar through hero */}
        <div className="absolute inset-0 top-0 w-full h-screen z-0">
          <img
            src="/images/hero-cityscape.png"
            alt="Lisbon cityscape"
            className="w-full h-full object-fill"
          />
        </div>
        {/* Content on top of background */}
        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </div>
      <RedeemInstantly />
      <LiquidationFallbacks />
      <FAQ />
      <BridgesSection />
      <Footer />
    </main>
  )
}
