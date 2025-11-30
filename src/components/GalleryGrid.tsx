// src/components/GalleryGrid.tsx
import Image from 'next/image';
import React from 'react';

export default function GalleryGrid({ images }: { images: { url: string; alt?: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {images.map((img, i) => (
        <div key={i} className="overflow-hidden rounded-lg bg-slate-100" style={{ aspectRatio: '4/3' }}>
          <Image src={img.url} alt={img.alt || 'Gallery image'} width={800} height={600} sizes="(max-width: 640px) 100vw, 33vw" />
        </div>
      ))}
    </div>
  );
}
