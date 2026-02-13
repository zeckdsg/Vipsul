'use client';

import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { IMAGES } from '../constants';

const items = [
  {
    title: "Parcelamento no Boleto ou Cartão",
    desc: "Opções flexíveis para não comprometer seu orçamento mensal."
  },
  {
    title: "Cancelamento Facilitado",
    desc: "Tranquilidade caso seus planos mudem inesperadamente."
  },
  {
    title: "Escritórios em BR & NZ",
    desc: "Suporte jurídico e logístico local em ambos os continentes."
  }
];

const ResortFeature: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={`order-2 md:order-1 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <h2 className="text-3xl font-display font-light mb-8 text-slate-800">
            Facilidade para você <span className="font-bold text-primary">decidir hoje.</span>
          </h2>
          
          <ul className="space-y-8">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-800 mb-1">{item.title}</span>
                  <span className="text-sm text-slate-500">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={`order-1 md:order-2 relative group transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
           <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-6 scale-95 transition-transform group-hover:rotate-3 duration-500"></div>
           <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 transition-transform group-hover:rotate-0 duration-500">
             <img 
               src={IMAGES.RESORT} 
               alt="Luxury Resort" 
               className="w-full h-full object-cover"
             />
           </div>
        </div>
      </div>
    </section>
  );
};

export default ResortFeature;