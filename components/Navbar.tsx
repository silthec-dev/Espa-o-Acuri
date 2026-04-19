
import React, { useState, useEffect } from 'react';
import { SiteData } from '../types';

interface NavbarProps {
  data: SiteData;
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'O Espaço', href: '#o-espaco' },
    { label: 'Casamentos', href: '#casamentos' },
    { label: 'Eventos', href: '#eventos' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-emerald-900' : 'text-white'}`}>
          Espaço Acuri
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-wider hover:opacity-70 transition-all ${isScrolled ? 'text-stone-800' : 'text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={data.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${isScrolled ? 'bg-emerald-800 text-white hover:bg-emerald-900' : 'bg-white text-emerald-900 hover:bg-stone-100'}`}
          >
            Agende sua visita
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-stone-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-stone-800' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-stone-800' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-stone-800' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-serif font-bold text-emerald-900">Espaço Acuri</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-stone-900 text-3xl">&times;</button>
          </div>
          <div className="flex flex-col space-y-6 text-center">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-stone-800 hover:text-emerald-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={data.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-emerald-800 text-white py-4 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Agende sua visita
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
