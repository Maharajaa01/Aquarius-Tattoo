'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-background flex items-center justify-center pt-20 overflow-hidden relative"
    >
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtitle */}
        <div className="inline-block mb-6 px-4 py-2 bg-secondary border border-border">
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Premium Tattoo Studio
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight text-balance">
          Ink Your Story
          <br />
          <span className="text-accent">with Precision</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Located in the heart of Jayanagar, Bangalore. Where artistry meets hygiene, and creativity meets professionalism.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="#contact"
            className="px-8 py-4 bg-accent text-accent-foreground font-semibold tracking-wide hover:bg-opacity-90 transition-all duration-200 flex items-center gap-2 group"
          >
            BOOK NOW
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/calculator"
            className="px-8 py-4 bg-transparent border-2 border-foreground text-foreground font-semibold tracking-wide hover:bg-foreground hover:text-background transition-all duration-200"
          >
            GET PRICE ESTIMATE
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center pt-8 border-t border-border">
          <div>
            <p className="text-3xl font-bold text-accent">3000+</p>
            <p className="text-sm text-muted-foreground tracking-wide">TATTOOS DONE</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">5+</p>
            <p className="text-sm text-muted-foreground tracking-wide">CERTIFIED ARTISTS</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">100%</p>
            <p className="text-sm text-muted-foreground tracking-wide">HYGIENIC</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
