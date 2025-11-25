import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1456052028682-180905325785?q=80&w=2070&auto=format&fit=crop")'
        }}
      >
        {/* Overlays for better text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] border-[1px] border-accent-dim rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="max-w-4xl relative">
           {/* Decorative Accent Line */}
           <div className="absolute -left-8 top-2 bottom-0 w-1 bg-accent hidden md:block shadow-[0_0_15px_rgba(122,211,198,0.5)]"></div>
           
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-accent bg-black/50 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
            Произведено в България
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white uppercase leading-[0.9] mb-8 tracking-tight drop-shadow-2xl">
            Бетон <br />
            <span className="text-transparent text-stroke-accent">Дизайн</span>
            <br />
            Стил
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl font-light leading-relaxed border-l-4 border-accent/50 pl-6 bg-black/30 backdrop-blur-sm py-4">
            Трансформираме суровия бетон в изкуство. Премиум настилки и архитектурни елементи с безкомпромисно качество.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#products" 
              className="group flex items-center justify-center gap-3 bg-accent text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(122,211,198,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Виж продуктите
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-3 border border-white text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 bg-black/20 backdrop-blur-sm"
            >
              Свържи се с нас
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] uppercase tracking-widest font-bold">Скрол</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;