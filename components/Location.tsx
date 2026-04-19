
import React from 'react';
import { SiteData } from '../types';

interface LocationProps {
  data: SiteData;
}

const Location: React.FC<LocationProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-emerald-800 text-sm font-bold uppercase tracking-widest">Localização</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Onde estamos</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-stone-100 rounded-full flex items-center justify-center text-emerald-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 className="text-stone-900 font-bold mb-1">Endereço Completo</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{data.company.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 flex-shrink-0 bg-stone-100 rounded-full flex items-center justify-center text-emerald-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h4 className="text-stone-900 font-bold mb-1">Tempo Estimado</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{data.company.location}</p>
              </div>
            </div>
          </div>

          <p className="text-stone-600 leading-relaxed max-w-md">
            O Espaço Acuri está localizado dentro do Condomínio Lagoinha, garantindo ainda mais segurança e exclusividade para os seus convidados. O acesso é facilitado e totalmente pavimentado.
          </p>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.company.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-stone-900 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-emerald-900 transition-all shadow-lg"
          >
            Abrir no Google Maps
          </a>
        </div>

        <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-stone-200 border-8 border-white">
           <iframe
            title="Mapa Espaço Acuri"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_API_KEY&q=${encodeURIComponent(data.company.address)}`}
            // Use static placeholder if key not available
            srcDoc={`<div style="width:100%;height:100%;background:#f5f5f4;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#78716c;text-align:center;padding:40px"><div><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:16px"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><br/><b>Mapa Interativo</b><br/><br/>${data.company.address}</div></div>`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
