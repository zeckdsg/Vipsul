import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-16 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold font-display text-primary tracking-tight">VIPSUL</h2>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
            Agência de viagens premium com foco em experiências exclusivas e atendimento bilíngue especializado em Brasil e Oceania.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all duration-300">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Unidades */}
        <div className="space-y-4">
          <h5 className="font-bold text-slate-800 uppercase text-xs tracking-[0.15em]">Unidades</h5>
          <div className="space-y-4">
            <p className="text-sm text-slate-500">
              <span className="font-semibold block text-slate-700">Brasil</span>
              Av. Paulista, 1000 - Bela Vista<br />São Paulo, SP
            </p>
            <p className="text-sm text-slate-500">
              <span className="font-semibold block text-slate-700">New Zealand</span>
              Queen Street, 210 - CBD<br />Auckland, NZ
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-4">
          <h5 className="font-bold text-slate-800 uppercase text-xs tracking-[0.15em]">Menu</h5>
          <ul className="text-sm text-slate-500 space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">Destinos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Sobre a Agência</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Depoimentos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Termos & Condições</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
        © 2024 Vipsul Viagens. Todos os direitos reservados. CNPJ: 00.000.000/0000-00
      </div>
    </footer>
  );
};

export default Footer;