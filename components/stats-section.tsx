'use client'

export default function StatsSection() {
  const stats = [
    {
      number: '3000+',
      label: 'Tattoos Done',
      description: 'From intricate designs to bold statements',
    },
    {
      number: '5+',
      label: 'Certified Artists',
      description: 'Masters of their craft',
    },
    {
      number: '100%',
      label: 'Safe & Hygienic',
      description: 'Studio-grade sterilization',
    },
    {
      number: '7/7',
      label: 'Available',
      description: 'Open 7 days a week for you',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background border-t border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:text-foreground transition-colors">
                {stat.number}
              </p>
              <p className="text-sm font-semibold tracking-widest uppercase mb-2">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
