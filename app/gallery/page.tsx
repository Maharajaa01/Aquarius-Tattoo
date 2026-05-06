'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Navigation from '@/components/navigation'
import Image from 'next/image'
import { getTattooImages, TattooImage } from '@/lib/images'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [categories, setCategories] = useState<{id: string, label: string}[]>([{ id: 'all', label: 'All Designs' }])
  const [gallery, setGallery] = useState<TattooImage[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  useEffect(() => {
    getTattooImages().then(({ categories: fetchedCategories, allImages }) => {
      setCategories([{ id: 'all', label: 'All Designs' }, ...fetchedCategories.map(c => ({ id: c, label: c.toUpperCase() }))])
      setGallery(allImages)
    }).catch(console.error)
  }, [])

  const filteredGallery = selectedCategory === 'all'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory)

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredGallery.length)
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredGallery.length) % filteredGallery.length)
    }
  }

  return (
    <div className="bg-[#0f0f0f] text-foreground min-h-screen">
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
          <div className="mb-12">
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight mb-4 text-white">
              DESIGN GALLERY
            </h1>
            <p className="text-xl text-gray-300">
              Explore our portfolio of stunning tattoo designs across different styles and techniques
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 font-bold tracking-wide transition-all ${
                    selectedCategory === category.id
                      ? 'bg-accent text-black'
                      : 'bg-secondary border border-border hover:border-accent'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid (Masonry approach using columns) */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 mb-16 space-y-4 md:space-y-6">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-sm break-inside-avoid border border-white/5 hover:border-accent hover:shadow-[0_0_20px_rgba(var(--accent),0.2)] transition-all"
              >
                <div className="relative w-full">
                  <Image
                    src={item.src}
                    alt={`${item.category} tattoo`}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-center">
                      <span className="px-3 py-1 bg-accent font-bold text-black text-xs uppercase tracking-widest rounded-sm mb-2 inline-block">
                        {item.category}
                      </span>
                      <p className="text-white font-semibold">View Design</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fullscreen Preview Modal */}
          {selectedIndex !== null && (
            <div
              className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 transition-opacity"
              onClick={() => setSelectedIndex(null)}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-[60] bg-black/50 p-2 rounded-full"
                aria-label="Close preview"
              >
                <X size={32} />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-[60] p-2 bg-black/50 rounded-full"
                aria-label="Previous"
              >
                <ChevronLeft size={48} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-[60] p-2 bg-black/50 rounded-full"
                aria-label="Next"
              >
                <ChevronRight size={48} />
              </button>

              <div className="w-full max-w-5xl animate-scale-in flex flex-col items-center" onClick={e => e.stopPropagation()}>
                <div className="relative w-full h-[60vh] md:h-[80vh] rounded shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden">
                  <Image
                    src={filteredGallery[selectedIndex].src}
                    alt={`${filteredGallery[selectedIndex].category} fullscreen preview`}
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                  />
                </div>
                <div className="text-center mt-6">
                  <span className="px-4 py-2 bg-accent/90 text-black font-bold uppercase tracking-widest text-sm rounded">
                    {filteredGallery[selectedIndex].category}
                  </span>
                  <p className="text-gray-400 mt-4 text-sm tracking-wide">
                    {selectedIndex + 1} of {filteredGallery.length}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Artists Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 tracking-tight">OUR ARTISTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { name: 'Alex Kumar', specialty: 'Realism & Traditional', designs: 45 },
                { name: 'Maya Patel', specialty: 'Portrait & Realism', designs: 38 },
                { name: 'Rahul Singh', specialty: 'Minimal & Geometric', designs: 52 },
                { name: 'Arjun Desai', specialty: 'Custom & Portrait', designs: 41 },
              ].map((artist, idx) => (
                <div key={idx} className="border border-border p-6 text-center hover:border-accent transition-colors">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-transparent rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg mb-2">{artist.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{artist.specialty}</p>
                  <p className="text-accent font-bold">{artist.designs} Designs</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
