// src/components/ContactSection.tsx
import React from 'react';

export default function ContactSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-gold text-sm font-bold tracking-wider uppercase">Get in Touch</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mt-2 mb-6">Book Your Appointment</h2>
                        <p className="text-black font-medium mb-8 leading-relaxed">
                            Ready to transform your look? Fill out the form below or give us a call. We recommend booking 2-3 days in advance for weekends.
                        </p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg border border-secondary/30 text-black placeholder:text-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded-lg border border-secondary/30 text-black placeholder:text-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                />
                            </div>
                            <select className="w-full px-4 py-3 rounded-lg border border-secondary/30 text-black focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all">
                                <option value="">Select Service</option>
                                <option value="hair">Hair Styling & Cut</option>
                                <option value="skin">Facial & Skin Care</option>
                                <option value="nails">Manicure & Pedicure</option>
                                <option value="bridal">Bridal Package</option>
                            </select>
                            <textarea
                                rows={4}
                                placeholder="Preferred Date & Time / Special Requests"
                                className="w-full px-4 py-3 rounded-lg border border-secondary/30 text-black placeholder:text-gray-500 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                            />
                            <button
                                type="submit"
                                className="w-full py-4 bg-foreground text-white rounded-lg font-medium hover:bg-foreground/90 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Request Appointment
                            </button>
                        </form>
                    </div>

                    <div className="h-[500px] bg-secondary/10 rounded-2xl overflow-hidden relative">
                        {/* Map Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400.63512951020823!2d79.92050202998388!3d23.18766838603332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae27d6f8ed83%3A0x101a84dce3c33fc!2sYash%20Beauty%20Parlour!5e0!3m2!1sen!2sin!4v1764529064447!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Salon Location"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        />

                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <h4 className="font-bold text-foreground">Yash Beauty Parlour</h4>
                                    <p className="text-sm text-foreground/70">Jain Mandir Road, M75, Shiv Nagar Main Rd, Damoh Naka, Jabalpur, MP 482002</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
