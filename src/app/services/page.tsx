// src/app/services/page.tsx
'use client';

import React, { useState } from 'react';
import ServiceCard from '@/components/ServiceCard';

// Enhanced Data Structure with Subcategories
const servicesData = [
    // Hair Care
    { name: "Signature Haircut & Style", price: "₹1,200", desc: "Consultation, wash, cut & blow-dry", category: "Hair Care", subCategory: "Cuts & Styling" },
    { name: "Men's Haircut", price: "₹500", desc: "Classic cut & styling", category: "Hair Care", subCategory: "Cuts & Styling" },
    { name: "Root Touch Up", price: "₹2,500", desc: "Ammonia-free color application", category: "Hair Care", subCategory: "Coloring" },
    { name: "Global Hair Color", price: "₹5,000+", desc: "Full head color transformation", category: "Hair Care", subCategory: "Coloring" },
    { name: "Highlights / Balayage", price: "₹6,500+", desc: "Customized dimensional color", category: "Hair Care", subCategory: "Coloring" },
    { name: "Keratin Treatment", price: "₹6,000+", desc: "Frizz control & smoothing", category: "Hair Care", subCategory: "Treatments" },
    { name: "Hair Spa Ritual", price: "₹2,000", desc: "Deep conditioning & massage", category: "Hair Care", subCategory: "Treatments" },
    { name: "Botox Hair Treatment", price: "₹7,000+", desc: "Deep repair & shine", category: "Hair Care", subCategory: "Treatments" },

    // Skin & Facials
    { name: "Clean Up", price: "₹1,000", desc: "Basic cleansing & hydration", category: "Skin & Facials", subCategory: "Essentials" },
    { name: "Fruit Facial", price: "₹1,800", desc: "Natural glow for all skin types", category: "Skin & Facials", subCategory: "Essentials" },
    { name: "Gold Radiance Facial", price: "₹3,500", desc: "Anti-aging & brightening", category: "Skin & Facials", subCategory: "Premium" },
    { name: "O3+ Whitening Facial", price: "₹4,500", desc: "Deep tan removal & glow", category: "Skin & Facials", subCategory: "Premium" },
    { name: "HydraFacial", price: "₹6,000", desc: "Deep exfoliation & hydration", category: "Skin & Facials", subCategory: "Luxury" },

    // Hands & Feet
    { name: "Classic Manicure", price: "₹800", desc: "Cut, file, cuticle work & polish", category: "Hands & Feet", subCategory: "Manicure" },
    { name: "Spa Manicure", price: "₹1,200", desc: "With scrub & massage", category: "Hands & Feet", subCategory: "Manicure" },
    { name: "Classic Pedicure", price: "₹1,000", desc: "Cut, file, cuticle work & polish", category: "Hands & Feet", subCategory: "Pedicure" },
    { name: "Spa Pedicure", price: "₹1,500", desc: "Exfoliation, massage & mask", category: "Hands & Feet", subCategory: "Pedicure" },
    { name: "Gel Polish (Hands)", price: "₹1,000", desc: "Long-lasting shine", category: "Hands & Feet", subCategory: "Nail Art" },
    { name: "Nail Art (Per Finger)", price: "₹150", desc: "Custom designs", category: "Hands & Feet", subCategory: "Nail Art" },
    { name: "Acrylic Extensions", price: "₹2,500+", desc: "Full set extensions", category: "Hands & Feet", subCategory: "Nail Art" },

    // Makeup
    { name: "Party Makeup", price: "₹3,500", desc: "Glamorous look for special occasions", category: "Makeup", subCategory: "Occasion" },
    { name: "Engagement Makeup", price: "₹8,000", desc: "Subtle yet stunning look", category: "Makeup", subCategory: "Occasion" },
    { name: "Bridal Makeup (HD)", price: "₹15,000", desc: "High definition flawless finish", category: "Makeup", subCategory: "Bridal" },
    { name: "Bridal Makeup (Airbrush)", price: "₹20,000", desc: "Long-lasting lightweight finish", category: "Makeup", subCategory: "Bridal" },
];

const categories = ["All", "Hair Care", "Skin & Facials", "Hands & Feet", "Makeup"];

export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter logic
    const filteredServices = servicesData.filter(service => {
        const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
        const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Group by subcategory for better display
    const groupedServices = filteredServices.reduce((acc, service) => {
        const key = service.subCategory;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(service);
        return acc;
    }, {} as Record<string, typeof servicesData>);

    return (
        <main className="py-12 md:py-20 bg-background min-h-screen transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Services Menu</h1>
                    <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
                        Explore our wide range of premium beauty treatments designed just for you.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative mb-8">
                        <input
                            type="text"
                            placeholder="Search for a service..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-3 rounded-full border border-secondary/30 bg-white text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none shadow-sm transition-all"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    </div>
                </div>

                {/* Category Filter (Scrollable on mobile) */}
                <div className="flex overflow-x-auto pb-4 mb-8 gap-3 md:justify-center no-scrollbar">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === category
                                    ? 'bg-gold text-white shadow-md scale-105'
                                    : 'bg-white text-foreground border border-secondary/20 hover:border-gold hover:text-gold'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="max-w-5xl mx-auto space-y-12">
                    {Object.entries(groupedServices).map(([subCategory, services]) => (
                        <div key={subCategory} className="animate-fade-in-up">
                            <h3 className="text-2xl font-serif font-bold text-gold mb-6 border-b border-secondary/20 pb-2 inline-block pr-8">
                                {subCategory}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {services.map((service) => (
                                    <ServiceCard key={service.name} service={service} />
                                ))}
                            </div>
                        </div>
                    ))}

                    {filteredServices.length === 0 && (
                        <div className="text-center py-12 text-foreground/60">
                            <p>No services found matching your criteria.</p>
                            <button
                                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                                className="mt-4 text-gold hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center bg-secondary/10 py-12 rounded-2xl max-w-4xl mx-auto">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Ready to pamper yourself?</h3>
                    <p className="text-foreground/70 mb-8">Book your appointment today and experience the difference.</p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-gold text-white rounded-full font-medium hover:bg-primary-hover transition-all shadow-lg hover:-translate-y-1"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </main>
    );
}
