import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId: number;

        const toggleVisibility = () => {
            if (timeoutId) return;

            timeoutId = window.setTimeout(() => {
                if (window.scrollY > 300) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
                timeoutId = 0;
            }, 100);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 text-white shadow-lg transition-all duration-300 hover:bg-zinc-800 hover:scale-110 hover:border-zinc-500 z-50 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Back to top"
        >
            <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
    );
}
