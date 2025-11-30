import React from 'react';
import Image from 'next/image';

export const metadata = {
    title: 'Gallery - Yash Beauty Parlour',
    description: 'Explore our portfolio of bridal makeup, hair styling, and skin treatments at Yash Beauty Parlour, Jabalpur.',
};

export default function GalleryPage() {
    // Placeholder data for gallery images
    const categories = [
        { name: 'All', id: 'all' },
        { name: 'Hair', id: 'hair' },
        { name: 'Makeup', id: 'makeup' },
        { name: 'Skin', id: 'skin' },
        { name: 'Nails', id: 'nails' },
    ];

    const galleryItems = [
        { id: 1, category: 'makeup', title: 'Bridal Glow', size: 'large' },
        { id: 2, category: 'hair', title: 'Creative Cut', size: 'small' },
        { id: 3, category: 'skin', title: 'Gold Facial', size: 'small' },
        { id: 4, category: 'nails', title: 'Gel Art', size: 'medium' },
        { id: 5, category: 'makeup', title: 'Party Look', size: 'small' },
        { id: 6, category: 'hair', title: 'Color Transformation', size: 'medium' },
    ];

    return (
        <main className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in-up">
                    <span className="text-gold text-sm font-bold tracking-wider uppercase">Our Portfolio</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-black mt-3 mb-6">
                        Moments of <span className="text-gold italic">Beauty</span>
                    </h1>
                    <p className="text-black font-medium max-w-2xl mx-auto">
                        Browse through our collection of transformations. From stunning bridal makeovers to precision haircuts, see the art we create every day.
                    </p>
                </div>

                {/* Filter Tabs (Visual only for now) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-100">
                    {categories.map((cat, idx) => (
                        <button
                            key={cat.id}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${idx === 0
                                    ? 'bg-gold text-white shadow-lg'
                                    : 'bg-white border border-secondary/30 text-black hover:border-gold hover:text-gold'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
                    {galleryItems.map((item, idx) => (
                        <div
                            key={item.id}
                            className={`group relative overflow-hidden rounded-2xl bg-secondary/20 hover:shadow-xl transition-all duration-500 cursor-pointer ${item.size === 'large' ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
                                }`}
                        >
                            {/* Placeholder Gradient/Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 group-hover:scale-105 transition-transform duration-700" />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-1">
                                        {item.category}
                                    </span>
                                    <h3 className="text-white font-serif text-xl font-bold">{item.title}</h3>
                                </div>
                            </div>

                            {/* Center Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                <span className="text-white text-xl">↗</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
