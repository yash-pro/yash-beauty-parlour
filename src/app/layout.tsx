// src/app/layout.tsx
import './globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Yash Beauty Parlour | Premium Hair & Skin Services in Jabalpur',
  description: 'Experience luxury beauty services at Yash Beauty Parlour in Jabalpur. Expert hair styling, facials, and bridal makeup in a relaxing ambience. Book your appointment today.',
  keywords: ['beauty salon', 'hair salon', 'facial', 'bridal makeup', 'manicure', 'pedicure', 'salon near me', 'India'],
  openGraph: {
    title: 'Yash Beauty Parlour | Premium Hair & Skin Services in Jabalpur',
    description: 'Experience luxury beauty services at Yash Beauty Parlour. Expert hair styling, facials, and bridal makeup.',
    images: ['/og-image.jpg'],
    siteName: 'Yash Beauty Parlour',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Yash Beauty Parlour",
    "image": "https://bloombeauty.in/images/salon-interior.jpg",
    "description": "Premium beauty parlour offering hair styling, skin treatments, and bridal makeup in Jabalpur",
    "url": "https://yashbeautyparlour.com",
    "telephone": "+919424927200",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jain Mandir Road, M75, Shiv Nagar Main Rd, Damoh Naka",
      "addressLocality": "Jabalpur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "482002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.18768292997931,
      "longitude": 79.92052898606968
    },
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "20:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
