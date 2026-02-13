import React, { useState, useEffect } from 'react';
import { Menu, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4`}>
      <nav 
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg border border-white/20' 
            : 'bg-white/70 backdrop-blur-md border border-white/30'
        }`}
      >
        <div className="flex items-center">
          <span className="text-2xl font-bold font-display text-primary tracking-tight">VIPSUL</span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-slate-800">
          <a href="#destinos" className="hover:text-primary transition-colors">DESTINOS</a>
          <a href="#sobre" className="hover:text-primary transition-colors">SOBRE</a>
          <a href="#clientes" className="hover:text-primary transition-colors">CLIENTES</a>
          <a href="#contato" className="hover:text-primary transition-colors">CONTATO</a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="hidden lg:flex items-center text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
            BRASIL 🇧🇷 | NZ 🇳🇿
          </span>
          <button className="text-slate-700 hover:text-primary transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;