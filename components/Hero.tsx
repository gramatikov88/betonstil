import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const mirroredTextRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const moveX = Math.min(scrollY * 0.5, 200);
          const isAtEnd = moveX >= 150;

          if (mirroredTextRef.current) {
            mirroredTextRef.current.style.transform = `scaleY(-1) translateX(${moveX}px)`;
          }

          if (shineRef.current) {
            shineRef.current.style.opacity = isAtEnd ? '1' : '0';
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black pb-32">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1456052028682-180905325785?q=80&w=2070&auto=format&fit=crop")'
        }}
      >
        {/* Overlays for better text contrast */}
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] border-[1px] border-accent-dim rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 pt-32">
        <div className="max-w-4xl relative">
          {/* Decorative Accent Line */}
          <div className="absolute -left-8 top-2 bottom-0 w-1 bg-accent hidden md:block shadow-[0_0_15px_rgba(122,211,198,0.5)]"></div>

          <div className="inline-flex items-center gap-2 px-6 py-3 border border-accent bg-black/80 text-accent text-sm font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
            Произведено в България
          </div>

          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white uppercase leading-[0.9] tracking-tight drop-shadow-2xl relative z-10">
              Бетон <br />
              <span className="text-transparent text-stroke-accent">Дизайн</span>
              <br />
              Стил
            </h1>

            {/* Mirrored/Blurred Reflection with Scroll Animation */}
            <div
              ref={mirroredTextRef}
              className="absolute top-full left-0 w-full transform scale-y-[-1] opacity-30 blur-sm select-none pointer-events-none origin-top bg-gradient-to-b from-white/50 to-transparent bg-clip-text text-transparent transition-transform duration-100 ease-out will-change-transform"
              aria-hidden="true"
              style={{ transform: 'scaleY(-1) translateX(0px)' }}
            >
              <div className="relative inline-block">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase leading-[0.9] tracking-tight">
                  <span className="text-white/20">Бетон</span> <br />
                  <span className="text-stroke-accent opacity-50">Дизайн</span>
                  <br />
                  <span className="text-white/20">Стил</span>
                </h1>

                {/* Shine Effect */}
                <div
                  ref={shineRef}
                  className="absolute top-0 left-0 w-20 h-20 bg-white/80 blur-xl rounded-full mix-blend-overlay transition-opacity duration-700 opacity-0"
                  style={{
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 40px 20px rgba(255,255,255,0.4)'
                  }}
                ></div>
              </div>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl font-light leading-relaxed border-l-4 border-accent/50 pl-6 bg-black/40 backdrop-blur-sm py-6 rounded-r-lg">
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