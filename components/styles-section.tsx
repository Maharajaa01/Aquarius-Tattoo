'use client'

import Image from 'next/image'

export default function StylesSection() {
  const styles = [
    {
      name: 'Realism',
      description: 'Photo-realistic detailed art',
      color: 'from-gray-800 to-gray-900',
    },
    {
      name: 'Portrait',
      description: 'Detailed face and character work',
      color: 'from-gray-700 to-gray-800',
    },
    {
      name: 'Minimal',
      description: 'Clean lines, minimalist designs',
      color: 'from-gray-900 to-black',
    },
    {
      name: 'Traditional',
      description: 'Classic bold line work',
      color: 'from-gray-800 to-gray-700',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Tattoo Styles We Master
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From intricate realism to bold traditional designs, our certified artists specialize in all major tattoo styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {styles.map((style, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-40`}
              ></div>

              {/* Content */}
              <div className="relative h-64 flex flex-col items-center justify-center text-center p-6 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">{style.name}</h3>
                <p className="text-sm text-muted-foreground">{style.description}</p>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
