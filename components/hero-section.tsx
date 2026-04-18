'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Fullscreen tattoo background image with zoom animation */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-tattoo.jpg"
          alt="Premium tattoo artwork"
          fill
          className={`object-cover transition-transform duration-[3000ms] ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
          priority
          quality={85}
        />
      </div>

      {/* Dark overlay with gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50 z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 z-1"></div>

      {/* Content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left md:text-center relative z-10 py-20">
        {/* Premium tag with animation */}
        <div className={`inline-block mb-6 md:mb-8 px-4 md:px-6 py-2 border border-accent/60 backdrop-blur-sm transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xs tracking-widest uppercase text-accent font-semibold">
            AQUARIUS TATTOO STUDIO
          </p>
        </div>

        {/* Main Heading - Cinematic style */}
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-tight text-white transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          NOT JUST INK
          <br />
          <span className="relative inline-block">
            <span className="text-accent">IT&apos;S YOUR IDENTITY</span>
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-accent"></span>
          </span>
        </h1>

        {/* Subheading */}
        <p className={`text-base md:text-lg lg:text-xl text-gray-200 mb-8 md:mb-12 max-w-2xl md:mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Professional tattoo and piercing services in Jayanagar, Bangalore. Where artistry meets hygiene, creativity meets professionalism, and your vision becomes immortal art.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-start md:justify-center items-start md:items-center mb-12 md:mb-16 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-accent text-black font-bold tracking-widest uppercase text-sm hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
          >
            BOOK APPOINTMENT
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/calculator"
            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            GET ESTIMATE
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className={`grid grid-cols-3 gap-4 md:gap-8 max-w-2xl md:mx-auto text-center md:text-center pt-8 md:pt-12 border-t border-gray-700 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="group cursor-pointer">
            <p className="text-2xl md:text-4xl font-black text-accent mb-1 md:mb-2 group-hover:scale-110 transition-transform">
              3000+
            </p>
            <p className="text-xs md:text-xs text-gray-300 tracking-widest uppercase">TATTOOS</p>
          </div>
          <div className="group cursor-pointer">
            <p className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform">
              5+
            </p>
            <p className="text-xs md:text-xs text-gray-300 tracking-widest uppercase">ARTISTS</p>
          </div>
          <div className="group cursor-pointer">
            <p className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2 group-hover:scale-110 transition-transform">
              100%
            </p>
            <p className="text-xs md:text-xs text-gray-300 tracking-widest uppercase">HYGIENIC</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:flex">
        <div className="w-6 h-10 border-2 border-accent/60 rounded-full flex justify-center items-center">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
