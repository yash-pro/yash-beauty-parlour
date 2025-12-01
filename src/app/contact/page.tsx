// src/app/contact/page.tsx
import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
    title: 'Contact Us | Yash Beauty Parlour',
    description: 'Book your appointment or visit us at our Jabalpur parlour. We are open 7 days a week.',
};

export default function ContactPage() {
    return (
        <main>
            <div className="bg-secondary/10 py-12 md:py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
                    <p className="text-foreground/70 max-w-xl mx-auto">
                        We'd love to hear from you. Reach out to us for appointments, queries, or feedback.
                    </p>
                </div>
            </div>

            <ContactSection />

            <div className="container mx-auto px-4 py-12 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 border border-secondary/20 rounded-xl">
                        <div className="text-4xl mb-4">📞</div>
                        <h3 className="font-serif font-bold text-lg mb-2">Phone</h3>
                        <p className="text-foreground/70">
                            <a href="tel:+919424927200" className="hover:text-gold transition-colors">+91 94249 27200</a>
                        </p>
                        <p className="text-foreground/70">
                            <a href="tel:+919424927200" className="hover:text-gold transition-colors">+91 94249 27200</a>
                        </p>
                    </div>
                    <div className="p-6 border border-secondary/20 rounded-xl">
                        <div className="text-4xl mb-4">✉️</div>
                        <h3 className="font-serif font-bold text-lg mb-2">Email</h3>
                        <p className="text-foreground/70">
                            <a href="mailto:yashparlourjbp@gmail.com" className="hover:text-gold transition-colors">yashparlourjbp@gmail.com</a>
                        </p>
                        <p className="text-foreground/70">
                            <a href="mailto:yashparlourjbp@gmail.com" className="hover:text-gold transition-colors">yashparlourjbp@gmail.com</a>
                        </p>
                    </div>
                    <div className="p-6 border border-secondary/20 rounded-xl">
                        <div className="text-4xl mb-4">⏰</div>
                        <h3 className="font-serif font-bold text-lg mb-2">Hours</h3>
                        <p className="text-foreground/70">Mon - Sun: 10:00 AM - 8:00 PM</p>
                        <p className="text-gold text-sm mt-2 font-medium">Open on Public Holidays</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
