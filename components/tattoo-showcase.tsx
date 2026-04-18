'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

const showcaseTattoos = [
  {
    id: 1,
    title: 'Realistic Lion',
    artist: 'Raj Kumar',
    image: '/hero-tattoo.jpg',
  },
  {
    id: 2,
    title: 'Black & Grey Portrait',
    artist: 'Priya Sharma',
    image: '/hero-tattoo.jpg',
  },
  {
    id: 3,
    title: 'Minimalist Design',
    artist: 'Arjun Patel',
    image: '/hero-tattoo.jpg',
  },
  {
    id: 4,
    title: 'Traditional Dragon',
    artist: 'Kavya Singh',
    image: '/hero-tattoo.jpg',
  },
  {
    id: 5,
    title: 'Abstract Art',
    artist: 'Vikram Das',
    image: '/hero-tattoo.jpg',
  },
]

export default function TattooShowcase() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 text-center tracking-tight">
          FEATURED WORK
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore our latest tattoo designs and artistry
        </p>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 md:gap-6 pb-4 md:pb-6 min-w-min">
              {showcaseTattoos.map((tattoo) => (
                <div
                  key={tattoo.id}
                  onClick={() => setSelectedId(tattoo.id)}
                  className="flex-shrink-0 w-64 md:w-72 group cursor-pointer transition-all duration-300"
                >
                  <div className="relative h-80 md:h-96 overflow-hidden bg-gray-900 border border-gray-800 group-hover:border-accent">
                    <Image
                      src={tattoo.image}
                      alt={tattoo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                      loading="lazy"
                      quality={75}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <h3 className="text-white font-bold tracking-wide">{tattoo.title}</h3>
                        <p className="text-gray-300 text-sm">By {tattoo.artist}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient fade on sides for visual effect */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Fullscreen preview modal */}
      {selectedId !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedId(null)}
        >
          <button
            onClick={() => setSelectedId(null)}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-51"
            aria-label="Close preview"
          >
            <X size={32} />
          </button>

          {showcaseTattoos.find((t) => t.id === selectedId) && (
            <div className="w-full max-w-2xl animate-scale-in">
              <div className="relative h-96 md:h-screen max-h-[80vh] overflow-hidden">
                <Image
                  src={showcaseTattoos.find((t) => t.id === selectedId)!.image}
                  alt="Fullscreen preview"
                  fill
                  className="object-contain"
                  quality={90}
                />
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {showcaseTattoos.find((t) => t.id === selectedId)!.title}
                </h3>
                <p className="text-gray-400">
                  By {showcaseTattoos.find((t) => t.id === selectedId)!.artist}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
