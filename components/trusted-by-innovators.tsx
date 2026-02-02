'use client'

export default function TrustedByInnovators() {
  const testimonials = [
    {
      name: 'Kathryn Murphy',
      title: 'Co-founder',
      quote: 'AI streamlines international client coordination by scheduling emails for optimal inbox timing.',
      featured: true,
    },
    {
      name: 'Eleanor Pena',
      title: 'Co-founder',
      quote: 'AI streamlines international client coordination by scheduling emails for optimal inbox timing.',
      featured: true,
    },
    {
      name: 'Darrell Stewart',
      title: 'Co-founder',
      quote: 'AI streamlines international client coordination by scheduling emails for optimal inbox timing.',
      featured: true,
    },
    {
      name: 'Bessie Cooper',
      title: 'Co-founder',
      quote: 'AI streamlines international client coordination by scheduling emails for optimal inbox timing.',
      featured: true,
    },
    {
      name: 'Unnamed',
      title: 'Co-founder',
      quote: 'AI streamlines international client coordination by scheduling emails for optimal inbox timing.',
      featured: false,
    },
    {
      name: 'Unnamed',
      title: 'Co-founder',
      quote: 'AI streamlines international client coordination by scheduling emails for optimal inbox timing.',
      featured: false,
    },
    {
      name: 'Unnamed',
      title: 'Co-founder',
      quote: 'AI streamlines international client coordination by scheduling emails for optimal inbox timing.',
      featured: false,
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted By Innovators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your digital assets with the peace of mind that comes from knowing you are protected by the best technology in the blockchain space.
          </p>
        </div>

        {/* Featured testimonials - larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <div
              key={index}
              className="bg-accent/5 border border-accent/20 rounded-2xl p-6"
            >
              <p className="text-foreground text-sm leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted" />
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional testimonials - smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(4).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <p className="text-foreground text-sm leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted" />
                <div>
                  <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
