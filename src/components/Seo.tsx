import Head from 'next/head';
import React from 'react';


type Props = {
title?: string;
description?: string;
canonical?: string;
image?: string;
url?: string;
};


export default function Seo({ title = 'Bloom Beauty Salon', description = 'Full-service beauty salon — hair, nails, skin. Located in your city.', canonical, image, url }: Props) {
const siteName = 'Bloom Beauty Salon';
const fullTitle = title === siteName ? siteName : `${title} — ${siteName}`;


const jsonLd = {
'@context': 'https://schema.org',
'@type': 'BeautySalon',
name: siteName,
description,
url: url || canonical || 'https://yourdomain.com',
telephone: '+91-XXXXXXXXXX'
} as any;


return (
<Head>
<title>{fullTitle}</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonical || url || 'https://yourdomain.com'} />


{/* Open Graph */}
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={description} />
{image && <meta property="og:image" content={image} />}
<meta property="og:type" content="website" />


{/* Twitter */}
<meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />


{/* JSON-LD */}
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
</Head>
);
}