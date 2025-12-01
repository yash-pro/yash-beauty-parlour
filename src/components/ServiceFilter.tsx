import React from 'react';

interface ServiceFilterProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function ServiceFilter({ categories, activeCategory, onSelectCategory }: ServiceFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
                onClick={() => onSelectCategory('All')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'All'
                        ? 'bg-gold text-white shadow-md'
                        : 'bg-white text-foreground border border-secondary/20 hover:border-gold hover:text-gold'
                    }`}
            >
                All Services
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                            ? 'bg-gold text-white shadow-md'
                            : 'bg-white text-foreground border border-secondary/20 hover:border-gold hover:text-gold'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
