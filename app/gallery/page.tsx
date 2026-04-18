'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navigation from '@/components/navigation'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'realism', label: 'Realism' },
    { id: 'portrait', label: 'Portrait' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'traditional', label: 'Traditional' },
  ]

  const gallery = [
    {
      category: 'realism',
      title: 'Photorealistic Rose',
      artist: 'Alex Kumar',
      description: 'Intricate detail and color blending showcase the mastery of realism technique.',
    },
    {
      category: 'portrait',
      title: 'Portrait Study',
      artist: 'Maya Patel',
      description: 'Detailed facial features with expressive eyes and perfect shading.',
    },
    {
      category: 'minimal',
      title: 'Minimalist Moon',
      artist: 'Rahul Singh',
      description: 'Simple yet elegant single-line moon design with subtle shading.',
    },
    {
      category: 'traditional',
      title: 'Bold Traditional',
      artist: 'Alex Kumar',
      description: 'Classic bold-line design with vibrant color application.',
    },
    {
      category: 'realism',
      title: 'Wildlife Realism',
      artist: 'Maya Patel',
      description: 'Stunning animal portrait with hyper-realistic fur and eye detail.',
    },
    {
      category: 'portrait',
      title: 'Celebrity Portrait',
      artist: 'Arjun Desai',
      description: 'Professional-grade portrait capturing likeness and emotion.',
    },
    {
      category: 'minimal',
      title: 'Geometric Pattern',
      artist: 'Rahul Singh',
      description: 'Perfect geometric shapes forming an abstract composition.',
    },
    {
      category: 'traditional',
      title: 'Dragon Traditional',
      artist: 'Alex Kumar',
      description: 'Iconic traditional dragon design with flowing lines.',
    },
  ]

  const filteredGallery = selectedCategory === 'all'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory)

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

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                className="group cursor-pointer border border-border hover:border-accent transition-all overflow-hidden"
              >
                {/* Placeholder for image */}
                <div className="w-full aspect-square bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-foreground font-bold text-lg">View Design</p>
                  </div>
                </div>
                
                {/* Design Info */}
                <div className="p-4 bg-secondary border-t border-border">
                  <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <p className="text-xs text-accent">Artist: {item.artist}</p>
                </div>
              </div>
            ))}
          </div>

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
