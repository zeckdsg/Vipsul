'use client';

import React, { useEffect, useRef, useState } from 'react';

const PromoBanner: React.FC = () => {
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
    <section ref={sectionRef} className="px-4 md:px-6 py-6 md:py-12">
      <div 
        className={`max-w-5xl mx-auto bg-white border border-slate-100 shadow-xl rounded-3xl p-8 lg:p-12 relative overflow-hidden group transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
        }`}
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-3 block">Oportunidade Única</span>
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-slate-800 mb-2">As melhores tarifas são limitadas.</h3>
            <p className="text-slate-500 text-sm md:text-base">Garanta seu lugar nos destinos mais cobiçados do mundo com valores especiais.</p>
          </div>
          <button className="bg-gradient-to-r from-primary to-primary-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-white font-bold px-8 py-4 rounded-full text-sm tracking-wide whitespace-nowrap">
            FALAR COM ESPECIALISTA
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;