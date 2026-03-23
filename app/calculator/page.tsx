'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import { ArrowLeft } from 'lucide-react'

export default function CalculatorPage() {
  const [type, setType] = useState<'tattoo' | 'piercing'>('tattoo')
  const [length, setLength] = useState(1)
  const [width, setWidth] = useState(1)
  const [offer, setOffer] = useState('standard')

  const calculatePrice = () => {
    if (type === 'piercing') {
      return { min: 1500, max: 2500 }
    }

    const area = length * width
    if (area < 4) {
      return { min: 1500, max: 1500 }
    }

    const minPrice = area * 399
    const maxPrice = area * 499

    return { min: minPrice, max: maxPrice }
  }

  const { min, max } = calculatePrice()
  const area = length * width

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation isScrolled={true} />

      <div className="pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
            Price Calculator
          </h1>
          <p className="text-muted-foreground mb-12">
            Get an estimated price for your tattoo or piercing
          </p>

          {/* Card Container */}
          <div className="border border-border p-8 md:p-12 bg-secondary">
            {/* Type Toggle */}
            <div className="mb-8">
              <p className="text-sm font-semibold tracking-wide uppercase mb-4">
                Service Type
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setType('tattoo')}
                  className={`flex-1 py-3 px-4 font-semibold tracking-wide transition-all ${
                    type === 'tattoo'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-background border border-border hover:border-accent'
                  }`}
                >
                  TATTOO
                </button>
                <button
                  onClick={() => setType('piercing')}
                  className={`flex-1 py-3 px-4 font-semibold tracking-wide transition-all ${
                    type === 'piercing'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-background border border-border hover:border-accent'
                  }`}
                >
                  PIERCING
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-8"></div>

            {/* Input Section */}
            {type === 'tattoo' ? (
              <>
                {/* Length */}
                <div className="mb-8">
                  <label className="text-sm font-semibold tracking-wide uppercase mb-3 block">
                    Length (inches)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0.5"
                      max="12"
                      step="0.5"
                      value={length}
                      onChange={(e) => setLength(parseFloat(e.target.value))}
                      className="flex-1 h-2 bg-border cursor-pointer accent-accent"
                    />
                    <span className="text-2xl font-bold text-accent w-16 text-right">
                      {length}"
                    </span>
                  </div>
                </div>

                {/* Width */}
                <div className="mb-8">
                  <label className="text-sm font-semibold tracking-wide uppercase mb-3 block">
                    Width (inches)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="0.5"
                      max="12"
                      step="0.5"
                      value={width}
                      onChange={(e) => setWidth(parseFloat(e.target.value))}
                      className="flex-1 h-2 bg-border cursor-pointer accent-accent"
                    />
                    <span className="text-2xl font-bold text-accent w-16 text-right">
                      {width}"
                    </span>
                  </div>
                </div>

                {/* Area Display */}
                <div className="mb-8 p-4 bg-background border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Total Area</p>
                  <p className="text-3xl font-bold">
                    {area.toFixed(2)} sq in
                  </p>
                </div>
              </>
            ) : (
              <div className="mb-8 p-4 bg-background border border-border text-center">
                <p className="text-muted-foreground mb-2">Standard Piercing Price</p>
                <p className="text-lg font-semibold">₹{min} - ₹{max}</p>
              </div>
            )}

            {/* Offer Dropdown */}
            <div className="mb-8">
              <label className="text-sm font-semibold tracking-wide uppercase mb-3 block">
                Offer / Package
              </label>
              <select
                value={offer}
                onChange={(e) => setOffer(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors cursor-pointer"
              >
                <option value="standard">Standard</option>
                <option value="custom">Custom Design</option>
                <option value="cover-up">Cover-up</option>
              </select>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-8"></div>

            {/* Price Display */}
            <div className="mb-8 p-6 bg-background border-2 border-accent">
              <p className="text-sm text-muted-foreground mb-2 tracking-wide">
                ESTIMATED PRICE
              </p>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-4">
                ₹{min.toLocaleString('en-IN')} - ₹{max.toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-muted-foreground italic">
                * Final price depends on design complexity and artist selection
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/#contact"
                className="px-6 py-4 bg-accent text-accent-foreground font-semibold tracking-wide hover:bg-opacity-90 transition-all text-center"
              >
                BOOK NOW
              </Link>
              <Link
                href="/#services"
                className="px-6 py-4 bg-transparent border-2 border-foreground text-foreground font-semibold tracking-wide hover:bg-foreground hover:text-background transition-all text-center"
              >
                KNOW MORE
              </Link>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border p-6">
              <h3 className="text-lg font-bold mb-3">About Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Our pricing is based on the size and complexity of your design. Larger pieces and intricate details may require adjustment. We offer competitive rates and flexible payment options.
              </p>
            </div>
            <div className="border border-border p-6">
              <h3 className="text-lg font-bold mb-3">Additional Services</h3>
              <p className="text-sm text-muted-foreground">
                Piercings include jewelry and sterilization. Training and custom artwork are available at special rates. Contact us for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
