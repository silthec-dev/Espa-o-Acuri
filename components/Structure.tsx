
import React from 'react';
import { SiteData } from '../types';

interface StructureProps {
  data: SiteData;
}

const Structure: React.FC<StructureProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-emerald-800 text-sm font-bold uppercase tracking-widest">Diferenciais</span>
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mt-2">{data.structure.title}</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.structure.items.map((item, idx) => (
          <div key={idx} className="p-8 bg-stone-50 rounded-2xl hover:bg-emerald-50 border border-stone-200 hover:border-emerald-200 transition-all group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-emerald-800 shadow-sm mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20l1-4h14l1 4M12 4v12M8 8l4-4 4 4"/></svg>
            </div>
            <h4 className="text-lg font-bold text-stone-900 mb-2">{item.split(' ')[0]} {item.split(' ')[1] || ''}</h4>
            <p className="text-sm text-stone-500 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-emerald-900 rounded-[2rem] p-12 relative overflow-hidden">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif">Localização Estratégica</h3>
            <p className="text-stone-300 font-light text-lg">Localizado em Jacareí, estamos a apenas 50 minutos de São Paulo. O equilíbrio perfeito entre a facilidade urbana e a paz do interior.</p>
            <div className="flex items-center gap-4 text-emerald-400">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               <span className="font-bold uppercase tracking-widest text-xs">Fácil acesso pavimentado</span>
            </div>
          </div>
          <div className="flex justify-end">
            <a
              href="#localizacao"
              className="px-10 py-5 bg-white text-emerald-900 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-stone-100 transition-all shadow-xl"
            >
              Ver no Mapa
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default Structure;
