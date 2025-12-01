// src/app/page.tsx
import React from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      name: "Signature Haircut & Style",
      price: "₹1,200",
      desc: "Consultation, precision cut, wash, and blow-dry styling tailored to your face shape.",
      category: "Hair Care"
    },
    {
      name: "Royal Gold Facial",
      price: "₹3,500",
      desc: "Luxurious 24k gold facial treatment for instant glow and anti-aging benefits.",
      category: "Skin & Facials"
    },
    {
      name: "Bridal Makeup HD",
      price: "₹15,000",
      desc: "High-definition bridal makeup with premium international products and trial session.",
      category: "Makeup"
    },
    {
      name: "Gel Manicure & Pedicure",
      price: "₹2,200",
      desc: "Complete hand and foot spa with long-lasting gel polish of your choice.",
      category: "Hands & Feet"
    },
    {
      name: "Keratin Hair Treatment",
      price: "₹6,000+",
      desc: "Smooth, frizz-free hair for up to 4 months. Price varies by hair length.",
      category: "Hair Care"
    },
    {
      name: "Aromatherapy Massage",
      price: "₹2,500",
      desc: "Relaxing full-body massage with essential oils to relieve stress and tension.",
      category: "Body Spa"
    },
  ];

  return (
    <main>
      <div className="container mx-auto px-4">
        <Hero />

        {/* Services Teaser */}
        <section className="py-16 md:py-24">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-bold tracking-wider uppercase">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Premium Services</h2>
            <p className="text-foreground/70 font-medium mt-4 max-w-2xl mx-auto">
              Discover our range of exclusive treatments designed to rejuvenate your body and soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border border-foreground text-foreground rounded-full font-medium hover:bg-foreground hover:text-white transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </section>
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* Gallery Teaser */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">Our Masterpieces</h2>
          </div>
          <Link href="/gallery" className="text-gold hover:text-primary-hover font-medium flex items-center gap-2">
            View All Gallery <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
          <div className="col-span-2 row-span-2 bg-secondary/20 rounded-2xl overflow-hidden relative group">
            {/* Placeholder for large image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white font-serif text-xl">Bridal Elegance</p>
            </div>
          </div>
          <div className="bg-secondary/30 rounded-2xl"></div>
          <div className="bg-secondary/40 rounded-2xl"></div>
          <div className="bg-secondary/50 rounded-2xl"></div>
          <div className="bg-secondary/60 rounded-2xl"></div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />
    </main>
  );
}
