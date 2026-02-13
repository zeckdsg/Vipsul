import React from 'react';
import { ChevronDown } from 'lucide-react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.HERO_BG} 
          alt="Travel Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-white space-y-8 mt-10 lg:mt-0">
          <div className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md rounded-full border border-white/20 text-xs font-bold tracking-widest uppercase">
            Premium Travel Agency
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-light font-display leading-[1.1]">
            Viver começa<br /> quando você<br /> decide <span className="font-bold italic font-display">ir.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-white/90 max-w-lg font-light leading-relaxed">
            Transformamos destinos em experiências reais e memoráveis. Atendimento especializado em Brasil e New Zealand.
          </p>

          <div className="flex items-center space-x-4 pt-4">
            <div className="flex -space-x-3">
              {IMAGES.AVATARS.map((avatar, i) => (
                <img 
                  key={i}
                  src={avatar} 
                  alt="Traveler" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-white/90">+5.000 viajantes satisfeitos</span>
          </div>
        </div>

        {/* Lead Form Card */}
        <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/40 shadow-2xl max-w-md mx-auto lg:ml-auto w-full">
          <h3 className="text-2xl font-semibold mb-6 text-slate-800 font-display">Inicie seu roteiro</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase tracking-wider">Nome Completo</label>
              <input 
                type="text" 
                placeholder="Seu nome" 
                className="w-full bg-white/60 border border-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 placeholder-slate-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase tracking-wider">WhatsApp</label>
              <input 
                type="tel" 
                placeholder="+55 00 00000-0000" 
                className="w-full bg-white/60 border border-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 placeholder-slate-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase tracking-wider">Destino</label>
                <select className="w-full bg-white/60 border border-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 appearance-none cursor-pointer">
                  <option>New Zealand</option>
                  <option>Brasil</option>
                  <option>Austrália</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1 ml-1 uppercase tracking-wider">Data Prevista</label>
                <input 
                  type="date" 
                  className="w-full bg-white/60 border border-white/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800"
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-light hover:opacity-90 text-white font-bold py-4 rounded-lg shadow-lg transform transition-all hover:-translate-y-0.5 mt-2 tracking-wide text-sm">
              QUERO PLANEJAR MINHA VIAGEM
            </button>
            <p className="text-[10px] text-center text-slate-500 mt-4 leading-relaxed px-4">
              Ao enviar, você concorda com nossa política de privacidade e tratamento de dados.
            </p>
          </form>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;