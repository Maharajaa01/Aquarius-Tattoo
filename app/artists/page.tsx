'use client'

import Link from 'next/link'
import { ArrowLeft, Star } from 'lucide-react'
import Navigation from '@/components/navigation'

export default function ArtistsPage() {
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
              <div key={idx} className="border border-border hover:border-accent transition-all overflow-hidden group">
                {/* Artist Header */}
                <div className="bg-gradient-to-r from-secondary to-black p-8 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-black mb-2">{artist.name}</h3>
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
                      <p className="text-sm text-muted-foreground">{artist.rating}/5.0</p>
                    </div>
                  </div>
                </div>

                {/* Artist Details */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6">{artist.bio}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-secondary border border-border">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">{artist.experience}</p>
                      <p className="text-xs text-muted-foreground tracking-widest">EXPERIENCE</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">{artist.designs}</p>
                      <p className="text-xs text-muted-foreground tracking-widest">DESIGNS</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">100%</p>
                      <p className="text-xs text-muted-foreground tracking-widest">SATISFIED</p>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-accent mb-3 tracking-widest">CERTIFICATIONS</p>
                    <div className="space-y-2">
                      {artist.certifications.map((cert, cidx) => (
                        <div key={cidx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-accent mb-3 tracking-widest">SPECIALTIES</p>
                    <div className="flex flex-wrap gap-2">
                      {artist.specialties.map((specialty, sidx) => (
                        <span
                          key={sidx}
                          className="px-3 py-1 bg-secondary border border-border text-xs font-semibold hover:border-accent transition-colors"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/#contact"
                    className="block w-full px-6 py-3 bg-accent text-black font-bold text-center hover:bg-opacity-90 transition-all"
                  >
                    BOOK WITH {artist.name.toUpperCase()}
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
