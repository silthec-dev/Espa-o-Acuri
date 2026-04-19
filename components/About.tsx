
import React from 'react';
import { SiteData } from '../types';

interface AboutProps {
  data: SiteData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-emerald-800 text-sm font-bold uppercase tracking-widest">Institucional</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">{data.about.title}</h2>
          </div>
          
          <p className="text-lg text-stone-600 leading-relaxed font-light italic">
            "Transformando sonhos em realidade em meio à exuberância da mata atlântica."
          </p>
          
          <div className="space-y-6 text-stone-700 leading-relaxed">
            <p>{data.about.description}</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {data.about.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-1 text-emerald-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <img src="https://img.lapisdenoiva.com/wp-content/uploads/2016/10/logo-lapis-de-noiva-black.png" alt="Selo Lápis de Noiva" className="h-16 object-contain opacity-60 grayscale hover:grayscale-0 transition-all" />
            <p className="text-xs text-stone-400 mt-2 uppercase tracking-widest">Espaço Selecionado Lápis de Noiva</p>
          </div>
        </div>

        <div className="relative group">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/id/10/800/1000" alt="Vista do Espaço" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-emerald-900 rounded-2xl -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          <div className="absolute -top-8 -right-8 w-48 h-48 border-2 border-amber-200 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
