
import React, { useState } from 'react';
import { SiteData } from '../types';

interface GalleryProps {
  data: SiteData;
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(data.gallery.categories[0]);

  // Mock images for demonstration based on the categories
  const images = [
    { id: 1, category: "Casamentos", url: "https://picsum.photos/id/111/800/600" },
    { id: 2, category: "Casamentos", url: "https://picsum.photos/id/112/800/600" },
    { id: 3, category: "Área Externa", url: "https://picsum.photos/id/113/800/600" },
    { id: 4, category: "Área Externa", url: "https://picsum.photos/id/114/800/600" },
    { id: 5, category: "Área Interna", url: "https://picsum.photos/id/115/800/600" },
    { id: 6, category: "Arquitetura", url: "https://picsum.photos/id/116/800/600" },
    { id: 7, category: "Área Interna", url: "https://picsum.photos/id/117/800/600" },
    { id: 8, category: "Arquitetura", url: "https://picsum.photos/id/118/800/600" },
  ];

  const filteredImages = images.filter(img => img.category === activeCategory);

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-12 space-y-6">
        <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Galeria de Inspirações</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {data.gallery.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-emerald-800 text-white shadow-lg' : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredImages.map((img) => (
          <div key={img.id} className="relative group overflow-hidden rounded-2xl aspect-square shadow-md">
            <img
              src={img.url}
              alt={img.category}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <a href={data.company.instagram} target="_blank" rel="noopener noreferrer" className="text-white p-3 border border-white rounded-full hover:bg-white hover:text-emerald-900 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={data.company.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-stone-600 hover:text-emerald-800 font-medium transition-all"
        >
          Ver mais fotos no Instagram
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  );
};

export default Gallery;
