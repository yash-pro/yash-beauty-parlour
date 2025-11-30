// src/components/Hero.tsx
import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-secondary/30 my-6 animate-fade-in-up">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10 stagger-children">
          <span className="inline-block py-1 px-3 rounded-full bg-gold/10 text-gold text-xs font-bold tracking-wider mb-4 uppercase">
            Premium Parlour in Jabalpur
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
            Reveal Your Inner <span className="text-gold italic">Radiance</span>
          </h1>
          <p className="text-lg text-black mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
            Experience world-class hair, skin, and nail treatments tailored to your unique style.
            Luxury meets comfort at Yash Beauty Parlour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/contact"
              className="px-8 py-3 bg-foreground text-white rounded-full font-bold hover:bg-black transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-white border-2 border-secondary text-foreground rounded-full font-bold hover:bg-secondary/20 transition-all hover:-translate-y-1 hover:scale-105 active:scale-95"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-md md:max-w-none">
          {/* Abstract decorative elements since we don't have images yet */}
          <div className="relative aspect-square rounded-full bg-gradient-to-tr from-gold/20 to-secondary/40 animate-pulse-slow">
            <div className="absolute inset-4 rounded-full border border-white/50" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-bl from-secondary to-white/80 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="text-gold/20 text-9xl font-serif italic">B</div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-secondary/20 hidden md:block">
            <div className="flex items-center gap-2">
              <div className="text-gold text-2xl">★★★★★</div>
              <div className="text-sm font-medium">
                <div className="text-foreground">4.9/5 Rating</div>
                <div className="text-foreground/60">Based on 500+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent -z-10" />
    </section>
  );
}
