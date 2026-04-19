
import React from 'react';
import { SiteData } from '../types';

interface HeroProps {
  data: SiteData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/id/111/1920/1080"
          alt="Espaço Acuri Paisagem"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Jacareí • SP
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight">
            {data.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
            {data.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href={data.company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-emerald-800 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-emerald-900 transition-all hover:scale-105 shadow-xl"
            >
              {data.hero.ctaWhatsapp}
            </a>
            <a
              href="#contato"
              className="w-full sm:w-auto px-10 py-4 bg-white text-stone-900 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-stone-100 transition-all hover:scale-105 shadow-xl"
            >
              {data.hero.ctaBudget}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#o-espaco" className="text-white opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7 13 5 5 5-5M7 6l5 5 5-5"/></svg>
        </a>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
