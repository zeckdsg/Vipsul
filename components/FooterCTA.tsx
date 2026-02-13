import React from 'react';

const FooterCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-primary to-primary-light" id="contato">
      <div className="relative z-10 max-w-4xl mx-auto text-white text-center">
        <h2 className="text-4xl lg:text-5xl font-display font-light mb-8 italic">
          O mundo está esperando por você.
        </h2>
        <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto font-light">
          Não deixe para amanhã a experiência que pode mudar sua vida. Fale com um consultor Vipsul agora.
        </p>
        
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-left max-w-xl mx-auto shadow-2xl">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Nome" 
                className="w-full bg-white/10 border border-white/30 text-white placeholder-white/70 rounded-lg px-4 py-3 focus:outline-none focus:bg-white/20 focus:border-white transition-all"
              />
              <input 
                type="tel" 
                placeholder="WhatsApp" 
                className="w-full bg-white/10 border border-white/30 text-white placeholder-white/70 rounded-lg px-4 py-3 focus:outline-none focus:bg-white/20 focus:border-white transition-all"
              />
            </div>
            
            <select className="w-full bg-white/10 border border-white/30 text-white rounded-lg px-4 py-3 focus:outline-none focus:bg-white/20 focus:border-white transition-all appearance-none cursor-pointer [&>option]:text-slate-800">
              <option className="text-slate-800">Quero ir para Nova Zelândia</option>
              <option className="text-slate-800">Quero ir para o Brasil</option>
              <option className="text-slate-800">Outro destino premium</option>
            </select>
            
            <button type="submit" className="w-full bg-white text-primary font-bold py-4 rounded-lg hover:bg-slate-50 transition-colors uppercase tracking-widest text-sm shadow-lg mt-2">
              Solicitar Roteiro Exclusivo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;