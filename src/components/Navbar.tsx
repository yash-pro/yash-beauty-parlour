// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-secondary/20 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-foreground tracking-wide">
          Yash <span className="text-gold">Beauty Parlour</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-gold transition-colors relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-gold transition-colors relative group">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gold transition-colors relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gold transition-colors relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <ThemeSwitcher />

          <Link
            href="/contact"
            className="px-5 py-2 bg-gold text-white text-sm font-medium rounded-full hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-secondary/20 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="text-sm font-medium hover:text-gold" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" className="text-sm font-medium hover:text-gold" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/about" className="text-sm font-medium hover:text-gold" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gold" onClick={() => setIsOpen(false)}>Contact</Link>

            <div className="py-2">
              <ThemeSwitcher />
            </div>

            <Link
              href="/contact"
              className="px-5 py-2 bg-gold text-white text-sm font-medium rounded-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
