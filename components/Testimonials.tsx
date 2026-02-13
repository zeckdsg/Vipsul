import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { IMAGES } from '../constants';

const Testimonials: React.FC = () => {
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
    <section ref={sectionRef} className="py-24 bg-slate-50" id="clientes">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl lg:text-4xl font-light font-display text-slate-800">
            Quem viaja com a Vipsul<br />
            <span className="font-bold italic font-display">vive diferente.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {IMAGES.TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-full hover:shadow-md transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="space-y-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="italic text-slate-600 text-sm leading-relaxed">"{item.text}"</p>
              </div>
              
              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-slate-50">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-bold text-sm text-slate-800">{item.name}</h5>
                  <span className="text-xs text-slate-400">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;