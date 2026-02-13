'use client';

import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: "1",
    title: "Dados & Perfil",
    desc: "Você nos conta seus desejos, datas e estilo de viagem ideal através do formulário."
  },
  {
    num: "2",
    title: "Planejamento",
    desc: "Nossos especialistas criam um roteiro exclusivo com as melhores conexões e estadias."
  },
  {
    num: "3",
    title: "Experiência",
    desc: "Com tudo pronto, você só precisa embarcar. Estamos com você em cada quilômetro."
  }
];

const Process: React.FC = () => {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-light font-display text-slate-800">
            Simples. Rápido. <span className="text-primary font-bold">Seguro.</span>
          </h2>
          <p className="text-slate-500 mt-4">Três passos para a sua próxima grande história.</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className={`hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0 transition-all duration-1000 delay-500 origin-left ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`text-center group transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 300}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm relative z-10">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-800">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;