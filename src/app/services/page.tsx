// src/app/services/page.tsx
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services & Pricing | Yash Beauty Parlour',
    description: 'Explore our comprehensive beauty services menu with transparent INR pricing for hair, skin, nails, and bridal packages.',
};

const categories = [
    {
        name: "Hair Care",
        items: [
            { name: "Signature Haircut & Style", price: "₹1,200", desc: "Consultation, wash, cut & blow-dry" },
            { name: "Root Touch Up", price: "₹2,500", desc: "Ammonia-free color application" },
            { name: "Global Hair Color", price: "₹5,000+", desc: "Full head color transformation" },
            { name: "Keratin Treatment", price: "₹6,000+", desc: "Frizz control & smoothing" },
            { name: "Hair Spa Ritual", price: "₹2,000", desc: "Deep conditioning & massage" },
        ]
    },
    {
        name: "Skin & Facials",
        items: [
            { name: "Clean Up", price: "₹1,000", desc: "Basic cleansing & hydration" },
            { name: "Fruit Facial", price: "₹1,800", desc: "Natural glow for all skin types" },
            { name: "Gold Radiance Facial", price: "₹3,500", desc: "Anti-aging & brightening" },
            { name: "O3+ Whitening Facial", price: "₹4,500", desc: "Deep tan removal & glow" },
        ]
    },
    {
        name: "Hands & Feet",
        items: [
            { name: "Classic Manicure", price: "₹800", desc: "Cut, file, cuticle work & polish" },
            { name: "Spa Pedicure", price: "₹1,200", desc: "Exfoliation, massage & mask" },
            { name: "Gel Polish (Hands)", price: "₹1,000", desc: "Long-lasting shine" },
            { name: "Nail Art (Per Finger)", price: "₹150", desc: "Custom designs" },
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Services Menu</h1>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        We use only premium international products like L'Oréal Professional, O3+, and Dyson tools to ensure the best results for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {categories.map((category) => (
                        <div key={category.name} className="bg-white p-8 rounded-2xl border border-secondary/20 shadow-sm">
                            <h2 className="text-2xl font-serif font-bold text-gold mb-6 pb-2 border-b border-secondary/20">
                                {category.name}
                            </h2>
                            <div className="space-y-6">
                                {category.items.map((item) => (
                                    <div key={item.name} className="flex justify-between items-start group">
                                        <div>
                                            <h3 className="font-medium text-foreground group-hover:text-gold transition-colors">{item.name}</h3>
                                            <p className="text-sm text-secondary/80 mt-1">{item.desc}</p>
                                        </div>
                                        <span className="font-semibold text-foreground whitespace-nowrap ml-4">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center bg-secondary/10 py-12 rounded-2xl max-w-4xl mx-auto">
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Ready to pamper yourself?</h3>
                    <p className="text-foreground/70 mb-8">Book your appointment today and experience the difference.</p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 bg-gold text-white rounded-full font-medium hover:bg-primary-hover transition-all shadow-lg"
                    >
                        Book Appointment
                    </a>
                </div>
            </div>
        </main>
    );
}
