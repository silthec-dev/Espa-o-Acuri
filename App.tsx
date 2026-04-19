
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Weddings from './components/Weddings.tsx';
import Testimonials from './components/Testimonials.tsx';
import Events from './components/Events.tsx';
import Structure from './components/Structure.tsx';
import Gallery from './components/Gallery.tsx';
import Location from './components/Location.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import dataContent from './siteContent.ts';
import { SiteData } from './types.ts';

const App: React.FC = () => {
  const [data] = useState<SiteData>(dataContent);

  return (
    <div className="relative min-h-screen">
      <Navbar data={data} />
      
      <main>
        <section id="inicio">
          <Hero data={data} />
        </section>
        
        <section id="o-espaco" className="py-20 md:py-32 bg-white">
          <About data={data} />
        </section>
        
        <section id="casamentos" className="py-20 md:py-32 bg-stone-50">
          <Weddings data={data} />
        </section>

        <section id="depoimentos" className="py-20 md:py-32 bg-white overflow-hidden">
          <Testimonials data={data} />
        </section>
        
        <section id="eventos" className="py-20 md:py-32 bg-stone-900 text-white">
          <Events data={data} />
        </section>
        
        <section id="estrutura" className="py-20 md:py-32 bg-white">
          <Structure data={data} />
        </section>
        
        <section id="galeria" className="py-20 md:py-32 bg-stone-50">
          <Gallery data={data} />
        </section>
        
        <section id="localizacao" className="py-20 md:py-32 bg-white">
          <Location data={data} />
        </section>
        
        <section id="contato" className="py-20 md:py-32 bg-stone-100">
          <Contact data={data} />
        </section>
      </main>
      
      <Footer data={data} />

      {/* Floating WhatsApp Button */}
      <a
        href={data.company.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group"
        aria-label="Falar no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-stone-900 px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
          Fale conosco
        </span>
      </a>
    </div>
  );
};

export default App;
