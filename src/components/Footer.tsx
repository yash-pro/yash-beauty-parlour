// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-foreground text-secondary py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">Yash Beauty Parlour</h3>
            <div className="space-y-2 text-sm">
              <p>📍 Jain Mandir Road, M75</p>
              <p>Shiv Nagar Main Rd, Damoh Naka</p>
              <p>Jabalpur, Madhya Pradesh 482002</p>
              <p>📧 yashparlourjbp@gmail.com</p>
              <p>📞 +91 94249 27200</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-medium text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary/80">
              <li><Link href="/services" className="hover:text-white transition-colors">Services Menu</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif font-medium text-gold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-secondary/80">
              <li>Monday - Saturday</li>
              <li>10:00 AM - 8:00 PM</li>
              <li className="mt-4">Sunday</li>
              <li>11:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8 text-center text-xs text-secondary/60">
          <p>© {new Date().getFullYear()} Yash Beauty Parlour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
