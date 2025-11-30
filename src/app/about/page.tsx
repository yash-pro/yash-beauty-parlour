// src/app/about/page.tsx
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Yash Beauty Parlour',
    description: 'Learn about our story and meet the team at Yash Beauty Parlour in Jabalpur.',
};

export default function AboutPage() {
    return (
        <main className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                {/* Story Section */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
                    <div className="flex-1">
                        <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Story</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">Redefining Beauty in Jabalpur</h1>
                        <div className="space-y-4 text-foreground/80 leading-relaxed">
                            <p>
                                Founded in 2015, Yash Beauty Parlour began with a simple mission: to provide world-class beauty services in a warm, welcoming environment. We believed that luxury shouldn't feel intimidating.
                            </p>
                            <p>
                                Located in the heart of Jabalpur, we have grown from a small studio to a full-service parlour catering to hundreds of happy clients every month. Our philosophy is rooted in personalization — we don't just follow trends; we adapt them to suit your unique style and personality.
                            </p>
                            <p>
                                Whether you're visiting for a quick trim or a complete bridal makeover, our promise remains the same: you will leave feeling refreshed, confident, and radiant.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 h-96 bg-secondary/20 rounded-2xl w-full relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-gold/20 font-serif text-9xl italic">
                            Y
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Meet Our Experts</h2>
                        <p className="text-foreground/60 mt-4">The talented hands behind your transformation.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Sarah Khan", role: "Creative Director", exp: "10+ Years" },
                            { name: "Rahul Verma", role: "Senior Hair Stylist", exp: "8 Years" },
                            { name: "Pooja Singh", role: "Skin Specialist", exp: "6 Years" },
                            { name: "Amit Patel", role: "Makeup Artist", exp: "5 Years" },
                        ].map((member) => (
                            <div key={member.name} className="group text-center">
                                <div className="h-64 bg-secondary/30 rounded-xl mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-foreground">{member.name}</h3>
                                <p className="text-gold font-medium text-sm">{member.role}</p>
                                <p className="text-xs text-secondary/60 mt-1">{member.exp} Experience</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
