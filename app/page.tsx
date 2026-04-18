'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import OfferPopup from '@/components/offer-popup'
import TattooShowcase from '@/components/tattoo-showcase'
import StatsSection from '@/components/stats-section'
import StylesSection from '@/components/styles-section'
import ServicesSection from '@/components/services-section'
import TestimonialsSection from '@/components/testimonials-section'
import FAQSection from '@/components/faq-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'
import FloatingBookButton from '@/components/floating-book-button'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background text-foreground">
      <Navigation isScrolled={isScrolled} />
      <OfferPopup />
      <HeroSection />
      <TattooShowcase />
      <StatsSection />
      <StylesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingBookButton />
    </div>
  )
}
