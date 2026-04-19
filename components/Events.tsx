
import React from 'react';
import { SiteData } from '../types';

interface EventsProps {
  data: SiteData;
}

const Events: React.FC<EventsProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="text-emerald-500 text-sm font-bold uppercase tracking-widest">Multi-eventos</span>
          <h2 className="text-4xl md:text-5xl font-serif">{data.events.title}</h2>
          <p className="text-stone-400 text-lg leading-relaxed font-light">{data.events.description}</p>
          
          <div className="grid sm:grid-cols-2 gap-8 pt-6">
            {data.events.types.map((type, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-emerald-800 pl-6 group">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{type.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <a href="#contato" className="inline-flex items-center gap-3 text-emerald-400 hover:text-emerald-300 font-bold uppercase text-xs tracking-widest transition-all">
              Consultar disponibilidade
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img src="https://picsum.photos/id/42/400/600" alt="Evento Social" className="rounded-2xl w-full h-[400px] object-cover" />
            <img src="https://picsum.photos/id/43/400/300" alt="Confraternização" className="rounded-2xl w-full h-[200px] object-cover" />
          </div>
          <div className="space-y-4 pt-12">
            <img src="https://picsum.photos/id/44/400/300" alt="Formatura" className="rounded-2xl w-full h-[200px] object-cover" />
            <img src="https://picsum.photos/id/45/400/600" alt="Acampamento" className="rounded-2xl w-full h-[400px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
