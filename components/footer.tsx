'use client'

import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-primary font-bold text-sm">AQ</span>
              </div>
              <span className="text-lg font-bold tracking-tight">AQUARIUS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium tattoo and piercing studio in the heart of Jayanagar, Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold text-sm mb-4 tracking-wide">QUICK LINKS</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#home" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-accent transition-colors">
                  Price Calculator
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-semibold text-sm mb-4 tracking-wide">SERVICES</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Tattoos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Piercings
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Custom Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold text-sm mb-4 tracking-wide">FOLLOW US</p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="p-2 border border-border hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>
              &copy; 2024 Aquarius Tattoo Studio. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
