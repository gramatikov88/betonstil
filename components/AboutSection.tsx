import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Parallax Background for the section */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900/50 skew-x-12 translate-x-32 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block border-b border-accent text-accent font-bold uppercase tracking-widest text-xs mb-6 pb-1">
                За Компанията
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-10 leading-none">
              <span className="text-transparent text-stroke-concrete block mb-2 opacity-50">Защо</span>
              <span className="text-white drop-shadow-lg">Декорстил?</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light text-lg mb-10">
              <p className="leading-relaxed">
                С над 15 години опит, ние трансформираме индустриалния бетон в естетични решения за дома и града. Нашата технология позволява създаването на продукти с изключителна плътност и гладкост.
              </p>
              <p>
                  Всяко изделие преминава през строг качествен контрол. Ние не просто продаваме бетон, ние изграждаме средата, в която живеете.
              </p>
            </div>

            <div className="space-y-4">
                {['Собствен производствен цех', 'Сертифицирани материали', 'Гаранция за качество'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <CheckCircle2 className="text-accent group-hover:scale-110 transition-transform" />
                        <span className="text-white font-bold uppercase text-sm tracking-wider">{item}</span>
                    </div>
                ))}
            </div>
            
            <div className="mt-12">
               <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-accent hover:scale-105 transition-all duration-300">
                 Свържете се с нас
               </a>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-4 border-2 border-accent/20 opacity-100 translate-x-6 translate-y-6 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
            
            <div className="relative z-10 h-[600px] overflow-hidden bg-zinc-800 shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1599708153386-62e5b9dd149e?q=80&w=1000&auto=format&fit=crop" 
                alt="Производствен процес" 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8">
                  <div className="text-6xl font-display font-black text-white tracking-tighter">15<span className="text-accent text-4xl">+</span></div>
                  <div className="text-xs uppercase tracking-[0.3em] text-accent font-bold">Години Опит</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;