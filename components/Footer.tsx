
import React from 'react';
import { SiteData } from '../types';

interface FooterProps {
  data: SiteData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const handleExportJson = (e: React.MouseEvent) => {
    e.preventDefault();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "espaco-acuri-elementor-data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-stone-800 pb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-white">Espaço Acuri</h2>
            <p className="text-sm leading-relaxed">
              Um refúgio de sofisticação e natureza em Jacareí - SP. Especializado em transformar sonhos em momentos eternos.
            </p>
            <div className="flex gap-4">
               <a href={data.company.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Menu</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#inicio" className="hover:text-emerald-400 transition-colors">Início</a></li>
              <li><a href="#o-espaco" className="hover:text-emerald-400 transition-colors">O Espaço</a></li>
              <li><a href="#casamentos" className="hover:text-emerald-400 transition-colors">Casamentos</a></li>
              <li><a href="#eventos" className="hover:text-emerald-400 transition-colors">Eventos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Informações</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#estrutura" className="hover:text-emerald-400 transition-colors">Estrutura</a></li>
              <li><a href="#galeria" className="hover:text-emerald-400 transition-colors">Galeria</a></li>
              <li><a href="#localizacao" className="hover:text-emerald-400 transition-colors">Localização</a></li>
              <li><a href="#contato" className="hover:text-emerald-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contato</h4>
            <p className="text-sm">{data.company.address}</p>
            <p className="text-sm font-bold text-emerald-400">{data.company.whatsapp}</p>
            <button 
              onClick={handleExportJson}
              className="text-[10px] uppercase tracking-widest border border-stone-700 px-3 py-1 rounded hover:bg-stone-800 transition-colors"
            >
              Exportar Dados (JSON)
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 Espaço Acuri. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
