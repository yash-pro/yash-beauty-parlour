"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const themes = [
        { id: 'default', name: 'Gold (Default)', color: '#B8860B' },
        { id: 'rose', name: 'Rose', color: '#D81B60' },
        { id: 'ocean', name: 'Ocean', color: '#0077B6' },
        { id: 'dark', name: 'Dark', color: '#1A1816' },
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-secondary/20 transition-colors flex items-center gap-2"
                aria-label="Select Theme"
            >
                <span
                    className="w-5 h-5 rounded-full border border-secondary/50"
                    style={{ backgroundColor: themes.find(t => t.id === theme)?.color }}
                ></span>
                <span className="text-sm font-medium hidden md:block">Theme</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-background border border-secondary/20 rounded-xl shadow-lg py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => {
                                setTheme(t.id as any);
                                setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary/10 flex items-center gap-3 transition-colors ${theme === t.id ? 'text-gold font-medium' : 'text-foreground'
                                }`}
                        >
                            <span
                                className="w-4 h-4 rounded-full border border-secondary/50"
                                style={{ backgroundColor: t.color }}
                            ></span>
                            {t.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
