'use client'

import Link from 'next/link'
import {
  Paintbrush2,
  Hand,
  Gem,
  BookOpen,
  Shirt,
  Frame,
  Sparkles,
} from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Paintbrush2,
      name: 'Permanent Tattoos',
      description: 'Professional custom tattoo designs executed by certified artists',
      link: '/services/tattoos',
    },
    {
      icon: Hand,
      name: 'Temporary Tattoos',
      description: 'Hand poking techniques for experimental or temporary designs',
      link: '#contact',
    },
    {
      icon: Gem,
      name: 'Body Piercing',
      description: 'Safe and hygienic piercing services with premium jewelry options',
      link: '/services/piercings',
    },
    {
      icon: BookOpen,
      name: 'Tattoo Training',
      description: 'Learn professional tattoo techniques from certified masters',
      link: '/services/training',
    },
    {
      icon: Shirt,
      name: 'Clothing Art',
      description: 'Custom designs on t-shirts, shoes, and wearable art',
      link: '#contact',
    },
    {
      icon: Sparkles,
      name: 'Canvas & Gallery',
      description: 'Original artwork, prints, and exclusive gallery collections',
      link: '/gallery',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive artistic solutions for all your creative needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href={service.link}
                className="group p-8 border border-border hover:border-accent bg-background transition-all duration-300 block"
              >
                <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/calculator"
            className="px-8 py-4 bg-accent text-accent-foreground font-semibold tracking-wide hover:bg-opacity-90 transition-all inline-block"
          >
            CALCULATE PRICE
          </Link>
        </div>
      </div>
    </section>
  )
}
