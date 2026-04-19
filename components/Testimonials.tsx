
import React from 'react';
import { SiteData } from '../types';

interface TestimonialsProps {
  data: SiteData;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <span className="text-emerald-800 text-sm font-bold uppercase tracking-widest">Depoimentos</span>
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900">{data.testimonials.title}</h2>
        <p className="text-stone-600 text-lg font-light">{data.testimonials.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {data.testimonials.items.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="flex gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-stone-100 font-serif pointer-events-none group-hover:text-emerald-50 transition-colors">“</span>
                <p className="text-stone-600 leading-relaxed italic relative z-10">
                  {item.text}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-100">
              <h4 className="text-stone-900 font-bold font-serif text-xl">{item.couple}</h4>
              <p className="text-emerald-800 text-xs font-bold uppercase tracking-widest mt-1">{item.event}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <div className="flex items-center gap-4 text-stone-400">
          <div className="h-px w-12 bg-stone-200"></div>
          <p className="text-xs uppercase tracking-[0.3em]">Momentos Eternizados</p>
          <div className="h-px w-12 bg-stone-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
