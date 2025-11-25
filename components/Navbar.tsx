import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="text-2xl font-display font-black uppercase tracking-tighter text-white">
            ДЕКОР<span className="text-accent group-hover:text-white transition-colors">СТИЛ</span>
          </div>
          <div className="h-2 w-2 bg-accent rounded-full group-hover:bg-white transition-colors"></div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-concrete-300 hover:text-accent transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 text-xs font-bold uppercase tracking-widest border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300"
          >
            Оферта
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white shadow-2xl py-8 px-6 flex flex-col gap-6 animate-fade-in-down border-t border-white/10 h-[calc(100vh-100%)] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-2xl font-display font-bold uppercase tracking-tighter hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-4 text-concrete-400 text-sm border-t border-white/10 pt-8 pb-8">
            <p className="flex items-center gap-3"><Phone size={18} className="text-accent" /> {COMPANY_INFO.phone}</p>
            <p className="text-lg">{COMPANY_INFO.email}</p>
            <a
              href="#contact"
              className="mt-4 text-center px-6 py-4 text-sm font-bold uppercase tracking-widest bg-accent text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Поискай Оферта
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;