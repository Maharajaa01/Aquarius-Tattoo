'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getTattooImages, TattooImage } from '@/lib/images'

export default function StylesSection() {
  const [categories, setCategories] = useState<{name: string, cover: string}[]>([])

  useEffect(() => {
    getTattooImages().then(({ categories: fetchedCategories, allImages }) => {
      // Find the first image for each category
      const mapped = fetchedCategories.map(cat => {
        const coverImage = allImages.find(img => img.category === cat) || { src: '/hero-tattoo.jpg' }
        return { name: cat, cover: coverImage.src }
      })
      setCategories(mapped)
    }).catch(console.error)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Tattoo Styles We Master
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From intricate realism to bold traditional designs, our certified artists specialize in all major tattoo styles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((style, index) => (
            <div
              key={index}
              className="group relative h-72 overflow-hidden bg-black cursor-pointer rounded-sm border border-white/10 hover:border-accent transition-colors"
            >
              {/* Background Image */}
              <Image
                src={style.cover}
                alt={`${style.name} tattoo style`}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
                quality={75}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8 transition-transform duration-300">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-white group-hover:-translate-y-2 transition-transform duration-300">{style.name}</h3>
                
                {/* Glow Line */}
                <div className="h-[2px] w-0 bg-accent mt-2 group-hover:w-16 transition-all duration-500 shadow-[0_0_10px_rgba(var(--accent),0.8)]"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 border-[3px] border-accent/0 group-hover:border-accent/40 scale-95 group-hover:scale-100 transition-all duration-300 rounded-sm pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
