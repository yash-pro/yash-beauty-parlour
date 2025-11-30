// src/components/ServiceCard.tsx
import React from 'react';

type Service = {
  title: string;
  duration?: string;
  price?: string;
  description?: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group p-6 bg-white border border-secondary/20 rounded-xl hover:shadow-2xl hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-serif font-bold text-black group-hover:text-gold transition-colors">{service.title}</h3>
        <span className="text-gold font-bold text-lg">{service.price}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-black font-bold mb-4 uppercase tracking-wider">
        <span>⏱ {service.duration}</span>
      </div>
      <p className="text-black font-medium text-sm leading-relaxed">{service.description}</p>
    </article>
  );
}
