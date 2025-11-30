// src/components/Testimonials.tsx
'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Regular Customer",
        content: "The best parlour experience I've had in Jabalpur. The staff is incredibly professional and the ambience is so relaxing. Loved my hair spa!",
        rating: 5
    },
    {
        id: 2,
        name: "Anjali Desai",
        role: "Bridal Package",
        content: "Booked them for my wedding and I couldn't be happier. The makeup was natural yet glamorous, exactly what I wanted. Highly recommend!",
        rating: 5
    },
    {
        id: 3,
        name: "Meera Patel",
        role: "Skin Care",
        content: "Their facials are magic. My skin feels so rejuvenated. The products they use are top-notch and the hygiene is impeccable.",
        rating: 5
    }
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-secondary/20 animate-fade-in-up delay-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-gold text-sm font-semibold tracking-wider uppercase">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">What Our Clients Say</h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${active * 100}%)` }}
                        >
                            {testimonials.map((t) => (
                                <div key={t.id} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm text-center">
                                        <div className="flex justify-center gap-1 mb-6">
                                            {[...Array(t.rating)].map((_, i) => (
                                                <span key={i} className="text-gold text-xl">★</span>
                                            ))}
                                        </div>
                                        <p className="text-lg md:text-xl text-foreground/80 italic mb-8 leading-relaxed">"{t.content}"</p>
                                        <div>
                                            <h4 className="font-serif font-bold text-lg">{t.name}</h4>
                                            <p className="text-sm text-secondary/80">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-3 h-3 rounded-full transition-all ${active === i ? 'bg-gold w-6' : 'bg-secondary/40 hover:bg-gold/50'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
