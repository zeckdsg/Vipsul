import React, { useEffect, useRef, useState } from 'react';
import { Headset, Map, CreditCard, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Headset className="w-8 h-8 text-primary" />,
    title: "Human Support",
    desc: "Atendimento 100% humano e disponível 24/7 durante sua viagem."
  },
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Complete Planning",
    desc: "Roteiros sob medida, do voo à reserva dos melhores restaurantes."
  },
  {
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    title: "Easy Installments",
    desc: "Parcelamento flexível e condições exclusivas com operadoras."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Full Support",
    desc: "Segurança total com seguro viagem e assistência documental."
  }
];

const Features: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-light font-display text-slate-800">
            Experiência internacional.<br />
            <span className="font-bold text-primary">Atendimento personalizado.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`p-6 text-center space-y-4 hover:bg-slate-50 rounded-2xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="font-bold text-lg text-slate-800">{feature.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;