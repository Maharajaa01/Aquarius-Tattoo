'use client'

import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import Navigation from '@/components/navigation'

export default function TattoosPage() {
  const benefits = [
    'Professional certified artists with 5+ years experience',
    'Custom design consultation included',
    'Premium sterilized equipment',
    '100% hygienic and safe environment',
    'Lifetime touch-up support',
    'Competitive pricing starting from ₹1,500',
  ]

  const styles = [
    { name: 'Realism', description: 'Photorealistic portraits and images' },
    { name: 'Portrait', description: 'Detailed face and character portraits' },
    { name: 'Minimal', description: 'Simple, elegant minimalist designs' },
    { name: 'Traditional', description: 'Classic bold-line tattoos' },
    { name: 'Geometric', description: 'Mathematical patterns and shapes' },
    { name: 'Custom', description: 'Fully personalized original designs' },
  ]

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'Meet with our artists to discuss your vision and ideas',
    },
    {
      step: '2',
      title: 'Design',
      description: 'We create a custom design mockup for your approval',
    },
    {
      step: '3',
      title: 'Preparation',
      description: 'We prepare all sterilized equipment and materials',
    },
    {
      step: '4',
      title: 'Tattoo Session',
      description: 'Professional application with expert precision',
    },
    {
      step: '5',
      title: 'Aftercare',
      description: 'Complete guidance on healing and maintenance',
    },
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
              PREMIUM TATTOOS
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Transform your vision into permanent art with our award-winning tattoo artists. From bold statement pieces to intricate designs, we bring your stories to life.
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

          {/* Styles Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">TATTOO STYLES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {styles.map((style, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-secondary border border-border hover:border-accent transition-all group cursor-pointer"
                >
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {style.name.toUpperCase()}
                  </h3>
                  <p className="text-muted-foreground text-sm">{style.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">OUR PROCESS</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="p-6 bg-secondary border border-border text-center">
                    <div className="w-12 h-12 bg-accent text-black rounded-full flex items-center justify-center font-black text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {idx < process.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-6 text-accent font-bold text-2xl">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 bg-gradient-to-r from-black to-secondary border border-accent">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Get Inked?</h3>
                <p className="text-muted-foreground">Book a consultation with our expert artists today</p>
              </div>
              <Link
                href="/#contact"
                className="px-8 py-4 bg-accent text-black font-bold tracking-widest hover:shadow-2xl hover:shadow-accent/50 transition-all whitespace-nowrap"
              >
                BOOK NOW
              </Link>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="mt-12 p-6 bg-secondary border border-border">
            <h3 className="text-xl font-bold mb-4">PRICING</h3>
            <p className="text-muted-foreground mb-4">
              Tattoo pricing is based on size, complexity, and design. Minimum booking is ₹1,500 for small pieces.
            </p>
            <Link
              href="/calculator"
              className="inline-block px-6 py-3 bg-accent text-black font-semibold hover:bg-opacity-90 transition-all"
            >
              USE PRICE CALCULATOR
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
