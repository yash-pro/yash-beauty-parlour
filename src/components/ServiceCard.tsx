import React from 'react';

interface ServiceItem {
  name: string;
  price: string;
  desc: string;
  category: string;
}

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-secondary/20 shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-gold transition-colors">
          {service.name}
        </h3>
        <span className="font-semibold text-gold whitespace-nowrap ml-4">
          {service.price}
        </span>
      </div>
      <p className="text-sm text-secondary/80 mb-3 line-clamp-2">
        {service.desc}
      </p>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-secondary/10">
        <span className="text-xs font-medium px-2 py-1 bg-secondary/10 rounded-full text-secondary/80">
          {service.category}
        </span>
        <button className="text-xs font-medium text-gold hover:text-primary-hover transition-colors">
          Book Now →
        </button>
      </div>
    </div>
  );
}
