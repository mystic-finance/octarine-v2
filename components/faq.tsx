'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is Octarine?',
      answer: 'Octarine is a liquidity layer aggregating off-chain and on-chain liquidity sources which facilitate instant RWA redemptions while giving you a seamless DEX experience.',
    },
    {
      question: 'How does Octarine source liquidity?',
      answer: 'We partner with institutional liquidity providers and auction every trade with them, to give you the best prices in the market.',
    },
    {
      question: 'How is pricing calculated?',
      answer: 'Your slippage is based on the redemption time that Solvers will wait when redeeming your RWA, meaning slippage is proportional to the asset\'s illiquidity. Octarine is the first DEX whose pricing is based on duration risk.',
    },
    {
      question: 'Do I need to KYC or KYB?',
      answer: 'We integrate with issuer whitelists so you don\'t need to KYC/KYB if you\'ve already done so with them. All Solvers need to KYC/KYB so we only match them with trades they are eligible to fill.',
    },
  ]

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-background">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-8 lg:px-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-3 sm:mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-accent/20 rounded-lg overflow-hidden bg-accent/5 hover:border-accent/50 transition-colors"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-muted/20 transition-colors cursor-pointer"
                >
                  <h3 className="font-semibold text-xs sm:text-sm text-foreground">{faq.question}</h3>
                  <ChevronDown
                    className={`w-4 h-4 text-accent transition-transform duration-200 flex-shrink-0 ml-2 sm:ml-4 ${
                      expandedIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                  </button>

                  {expandedIndex === index && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 pt-2 border-t border-border bg-muted/10">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
