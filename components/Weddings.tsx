
import React from 'react';
import { SiteData } from '../types';

interface WeddingsProps {
  data: SiteData;
}

const Weddings: React.FC<WeddingsProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <span className="text-emerald-800 text-sm font-bold uppercase tracking-widest">O Grande Dia</span>
        <h2 className="text-4xl md:text-6xl font-serif text-stone-900">{data.weddings.title}</h2>
        <p className="text-stone-600 text-lg font-light leading-relaxed">{data.weddings.description}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1 space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            {data.weddings.features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-emerald-100 group">
                <div className="w-12 h-12 flex-shrink-0 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold mb-1">{feature.split(' ')[0]}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{feature}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a
            href={data.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-8 py-4 bg-stone-900 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-emerald-900 transition-all shadow-lg"
          >
            {data.weddings.cta}
          </a>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4 order-1 lg:order-2">
          <img src="https://picsum.photos/id/103/600/800" alt="Cerimônia" className="w-full h-[500px] object-cover rounded-3xl shadow-lg" />
          <div className="flex flex-col gap-4">
            <img src="https://picsum.photos/id/102/600/400" alt="Salão" className="w-full h-1/2 object-cover rounded-3xl shadow-lg" />
            <img src="https://picsum.photos/id/104/600/400" alt="Detalhes" className="w-full h-1/2 object-cover rounded-3xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weddings;
