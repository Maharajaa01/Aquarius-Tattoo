'use client'

import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import Navigation from '@/components/navigation'

export default function PiercingsPage() {
  const benefits = [
    'Certified piercing professionals with sterile equipment',
    'Jewelry options included in package',
    'Medical-grade sterilization procedures',
    'Safe healing guidance and support',
    'Wide selection of jewelry styles',
    'Competitive pricing from ₹1,500',
  ]

  const piercingTypes = [
    { name: 'Ear Piercings', description: 'Lobe, helix, tragus, daith and more' },
    { name: 'Nose Piercing', description: 'Septum, nostril, and bridge options' },
    { name: 'Lip Piercing', description: 'Labret, vertical labret, and medusa styles' },
    { name: 'Navel Piercing', description: 'Classic belly button and orbital styles' },
    { name: 'Body Piercings', description: 'Surface, dermal, and industrial piercings' },
    { name: 'Stretching', description: 'Safe stretching and gauging services' },
  ]

  const jewelry = [
    'Surgical Steel',
    'Titanium (Hypoallergenic)',
    'Gold Plated',
    'Sterling Silver',
    'Implant Grade Options',
  ]

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-6 text-white">
              BODY PIERCINGS
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Express yourself with professional body piercings. We offer safe, sterile procedures with premium jewelry options and expert aftercare guidance.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">WHY CHOOSE US</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-border hover:border-accent transition-colors">
                  <Check size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Piercing Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">PIERCING TYPES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {piercingTypes.map((piercing, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-secondary border border-border hover:border-accent transition-all group cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {piercing.name.toUpperCase()}
                  </h3>
                  <p className="text-muted-foreground text-sm">{piercing.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Jewelry Selection */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">JEWELRY MATERIALS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {jewelry.map((material, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-secondary border border-border text-center hover:border-accent hover:bg-black transition-all"
                >
                  <p className="font-bold text-sm">{material}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Aftercare Info */}
          <div className="mb-16 p-8 bg-gradient-to-r from-secondary to-black border border-border">
            <h2 className="text-2xl font-bold mb-6">PIERCING AFTERCARE</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-3 text-accent">CLEANING</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Clean with saline solution 2x daily</li>
                  <li>• Use sterile cotton pads</li>
                  <li>• Avoid alcohol-based products</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-accent">HEALING TIME</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Ear: 6-12 weeks</li>
                  <li>• Nose: 4-6 weeks</li>
                  <li>• Navel: 3-6 months</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-accent">AVOID</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Swimming during healing</li>
                  <li>• Touching with dirty hands</li>
                  <li>• Removing jewelry early</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16 p-6 bg-secondary border border-border">
            <h3 className="text-xl font-bold mb-2">PRICING</h3>
            <p className="text-muted-foreground mb-4">
              Standard piercings start from ₹1,500 including jewelry and sterilization.
            </p>
            <Link
              href="/calculator"
              className="inline-block px-6 py-3 bg-accent text-black font-semibold hover:bg-opacity-90 transition-all"
            >
              GET QUOTE
            </Link>
          </div>

          {/* CTA Section */}
          <div className="p-8 bg-gradient-to-r from-black to-secondary border border-accent">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Express Yourself?</h3>
                <p className="text-muted-foreground">Book your piercing appointment today</p>
              </div>
              <Link
                href="/#contact"
                className="px-8 py-4 bg-accent text-black font-bold tracking-widest hover:shadow-2xl hover:shadow-accent/50 transition-all whitespace-nowrap"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
