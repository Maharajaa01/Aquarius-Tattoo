'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Star } from 'lucide-react'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import { getRandomTattooImages, TattooImage } from '@/lib/images'

export default function ArtistsPage() {
  const [bgImages, setBgImages] = useState<TattooImage[]>([])

  useEffect(() => {
    getRandomTattooImages(4).then(setBgImages).catch(console.error)
  }, [])
  const artists = [
    {
      name: 'Alex Kumar',
      role: 'Senior Tattoo Artist & Studio Head',
      specialty: 'Realism & Traditional',
      experience: '8 Years',
      designs: 245,
      rating: 4.9,
      bio: 'Alex is our lead artist with expertise in photorealistic work and traditional designs. Known for intricate detail and color blending.',
      certifications: ['Professional Tattoo Certification', 'Safety & Sterilization', 'Advanced Color Theory'],
      specialties: ['Realism', 'Traditional', 'Portrait', 'Custom Artwork'],
    },
    {
      name: 'Maya Patel',
      role: 'Portrait Specialist',
      specialty: 'Portrait & Fine Line',
      experience: '6 Years',
      designs: 189,
      rating: 4.8,
      bio: 'Maya specializes in stunning portrait work with emotional depth. Her clients love her ability to capture likeness and feeling.',
      certifications: ['Portrait Certification', 'Fine Line Specialist', 'Color Harmony'],
      specialties: ['Portrait', 'Fine Line', 'Realism', 'Character Design'],
    },
    {
      name: 'Rahul Singh',
      role: 'Geometric & Minimal Designer',
      specialty: 'Minimal & Geometric',
      experience: '5 Years',
      designs: 198,
      rating: 4.7,
      bio: 'Rahul creates clean, mathematical designs with perfect proportions. His minimalist approach is perfect for those wanting subtle elegance.',
      certifications: ['Geometric Specialist', 'Minimal Art Certification', 'Geometric Patterns'],
      specialties: ['Minimal', 'Geometric', 'Abstract', 'Mandala'],
    },
    {
      name: 'Arjun Desai',
      role: 'Custom Design Specialist',
      specialty: 'Custom & Unique',
      experience: '7 Years',
      designs: 212,
      rating: 4.9,
      bio: 'Arjun excels at bringing unique visions to life. His custom work ranges from complex to minimalist, always personalized.',
      certifications: ['Custom Design', 'Illustrator Certified', 'Advanced Technique'],
      specialties: ['Custom Artwork', 'Illustration', 'Mixed Style', 'Cover-ups'],
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

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-4 text-white">
              OUR ARTISTS
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Meet our team of certified, experienced tattoo artists passionate about bringing your vision to life
            </p>
          </div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artists.map((artist, idx) => (
              <div key={idx} className="relative border border-border hover:border-accent transition-all overflow-hidden group bg-[#0f0f0f]">
                {/* Background Texture Image */}
                {bgImages[idx] && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={bgImages[idx].src}
                      alt="Texture"
                      fill
                      className="object-cover opacity-10 group-hover:opacity-20 transition-all duration-700 grayscale group-hover:grayscale-0"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/80 to-[#0f0f0f] z-0"></div>

                {/* Artist Header */}
                <div className="relative z-10 bg-gradient-to-r from-[#0f0f0f]/90 to-black/90 p-8 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black mb-2 text-white group-hover:text-accent transition-colors">{artist.name}</h3>
                      <p className="text-accent font-bold tracking-wide">{artist.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(artist.rating) ? 'fill-accent text-accent' : 'text-muted'}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-400">{artist.rating}/5.0</p>
                    </div>
                  </div>
                </div>

                {/* Artist Details */}
                <div className="relative z-10 p-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">{artist.bio}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/60 border border-white/10 backdrop-blur-sm group-hover:border-accent/30 transition-colors">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">{artist.experience}</p>
                      <p className="text-xs text-gray-500 tracking-widest mt-1">EXPERIENCE</p>
                    </div>
                    <div className="text-center border-x border-white/10">
                      <p className="text-2xl font-bold text-accent">{artist.designs}</p>
                      <p className="text-xs text-gray-500 tracking-widest mt-1">DESIGNS</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">100%</p>
                      <p className="text-xs text-gray-500 tracking-widest mt-1">SATISFIED</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-accent mb-3 tracking-widest border-b border-white/10 pb-2 inline-block">CERTIFICATIONS</p>
                    <div className="space-y-2 mt-2">
                      {artist.certifications.map((cert, cidx) => (
                        <div key={cidx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-accent rotate-45"></div>
                          <span className="text-sm text-gray-400">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-8">
                    <p className="text-sm font-bold text-accent mb-3 tracking-widest border-b border-white/10 pb-2 inline-block">SPECIALTIES</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {artist.specialties.map((specialty, sidx) => (
                        <span
                          key={sidx}
                          className="px-3 py-1 bg-black/50 border border-white/20 text-xs font-semibold hover:border-accent hover:text-white transition-colors text-gray-300 rounded-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/#contact"
                    className="block w-full px-6 py-4 bg-accent text-black font-black text-center hover:shadow-[0_0_20px_rgba(var(--accent),0.5)] transition-all uppercase tracking-widest"
                  >
                    BOOK WITH {artist.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Process */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">BOOKING PROCESS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'CHOOSE ARTIST',
                  desc: 'Select your preferred artist based on their specialty',
                },
                {
                  step: '2',
                  title: 'CONSULTATION',
                  desc: 'Meet for a personalized design consultation',
                },
                {
                  step: '3',
                  title: 'DESIGN APPROVAL',
                  desc: 'Get custom design mockup and approve details',
                },
                {
                  step: '4',
                  title: 'SESSION',
                  desc: 'Professional tattoo session with expert care',
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 border border-border hover:border-accent transition-colors">
                  <div className="text-4xl font-black text-accent mb-4">{item.step}</div>
                  <h3 className="font-bold mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
