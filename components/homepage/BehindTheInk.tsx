'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const stories = [
  {
    id: 1,
    title: "A Tribute to Mother",
    description: "Abhishek's eternal memory beautifully captured in a realism portrait.",
    image: "/placeholder.jpg",
    link: "/gallery"
  },
  {
    id: 2,
    title: "The Phoenix Coverup",
    description: "Rising from the ashes: A massive back coverup symbolizing resilience.",
    image: "/placeholder.jpg",
    link: "/gallery"
  },
  {
    id: 3,
    title: "Spiritual Awakening",
    description: "A full sleeve combining geometric patterns with Lord Shiva elements.",
    image: "/placeholder.jpg",
    link: "/gallery"
  }
]

export default function BehindTheInk() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4 uppercase">
            Behind The Ink
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every tattoo has a story. Discover the profound meanings, emotional journeys, and artistic triumphs of our clients.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden bg-black border border-white/5 hover:border-accent transition-all duration-500 cursor-pointer rounded-sm"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {story.description}
                </p>
                <Link 
                  href={story.link}
                  className="text-accent font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 flex items-center gap-2"
                >
                  Read Story <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
