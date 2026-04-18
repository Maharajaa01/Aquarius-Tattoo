'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => setIsOpen(false), 300)
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isVisible ? 'bg-black/50' : 'bg-black/0 pointer-events-none'
      }`}
    >
      <div
        className={`bg-black border-2 border-accent relative w-full max-w-md shadow-2xl transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary transition-colors"
          aria-label="Close"
        >
          <X size={20} className="text-accent" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="mb-4">
            <p className="text-sm tracking-widest uppercase text-accent font-semibold">
              Exclusive Offer
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            20% OFF
          </h2>

          <p className="text-lg text-foreground mb-6">
            Your First Tattoo or Piercing
          </p>

          <div className="bg-secondary border border-border p-4 mb-8">
            <p className="text-sm text-muted-foreground mb-2">Use Code</p>
            <p className="text-2xl font-bold text-accent tracking-widest">
              AQUA20
            </p>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Limited time offer. Valid for new clients only. Cannot be combined with other offers.
          </p>

          <button
            onClick={handleClose}
            className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold tracking-wide hover:bg-opacity-90 transition-all duration-200"
          >
            CLAIM OFFER
          </button>
        </div>
      </div>
    </div>
  )
}
