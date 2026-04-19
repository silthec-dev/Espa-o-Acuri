
import React, { useState } from 'react';
import { SiteData } from '../types';

interface ContactProps {
  data: SiteData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: 'Casamento',
    data: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo contato! Nossa equipe retornará em breve.");
    console.log("Formulário enviado:", formData);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Info Side */}
        <div className="lg:w-2/5 bg-emerald-900 p-12 lg:p-16 text-white flex flex-col justify-between">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif">Vamos conversar?</h2>
            <p className="text-emerald-100 font-light text-lg">Estamos ansiosos para conhecer a sua história e ajudar a planejar o seu evento perfeito.</p>
            
            <div className="space-y-6 pt-8">
              <a href={data.company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-emerald-900 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-emerald-300 font-bold">WhatsApp</p>
                  <p className="text-lg font-medium">{data.company.whatsapp}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-emerald-300 font-bold">E-mail</p>
                  <p className="text-lg font-medium">contato@espacoacuri.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 font-bold mb-4">Siga-nos</p>
            <div className="flex gap-4">
               <a href={data.company.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-emerald-900 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </a>
            </div>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="lg:w-3/5 p-12 lg:p-16">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Nome Completo</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-800 transition-colors"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">E-mail</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-800 transition-colors"
                  placeholder="exemplo@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Telefone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-800 transition-colors"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Data Pretendida</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-800 transition-colors"
                  value={formData.data}
                  onChange={(e) => setFormData({...formData, data: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Tipo de Evento</label>
              <select
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-800 transition-colors"
                value={formData.tipo}
                onChange={(e) => setFormData({...formData, tipo: e.target.value})}
              >
                <option>Casamento</option>
                <option>Aniversário / 15 Anos</option>
                <option>Formatura</option>
                <option>Corporativo</option>
                <option>Acampamento / Outros</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-400">Sua Mensagem</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-800 transition-colors resize-none"
                placeholder="Conte-nos um pouco sobre o seu sonho..."
                value={formData.mensagem}
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-emerald-800 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-emerald-900 transition-all shadow-xl hover:scale-[1.02] active:scale-95"
            >
              Enviar Solicitação de Orçamento
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
