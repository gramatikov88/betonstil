import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Всички');
  const [transforms, setTransforms] = useState({ leftX: -200, rightX: 200, opacity: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['Всички', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = activeCategory === 'Всички' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  // Scroll synchronization logic
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      const elementCenter = rect.top + (rect.height / 5); 
      const viewCenter = viewHeight / 2;
      const dist = elementCenter - viewCenter;
      
      const multiplier = 1.2; 
      let offset = dist * multiplier;
      
      if (offset < 0) offset = 0;
      
      const opacityDistance = Math.abs(dist);
      let opacity = 1 - (opacityDistance / (viewHeight / 1.5));
      if (opacity < 0) opacity = 0;
      if (opacity > 1) opacity = 1;
      
      setTransforms({
        leftX: -offset,
        rightX: offset,
        opacity: opacity
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTitleVisible = transforms.opacity > 0.5;

  return (
    <section id="products" className="py-32 bg-zinc-950 overflow-hidden relative" ref={sectionRef}>
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="relative mb-8">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white uppercase flex flex-col items-center leading-none tracking-tighter">
              {/* Slide from Left */}
              <span 
                className="block will-change-transform z-10 drop-shadow-lg"
                style={{ 
                  transform: `translateX(${transforms.leftX}px)`,
                  opacity: transforms.opacity 
                }}
              >
                Продуктова
              </span>
              
              {/* Slide from Right */}
              <span 
                className="block text-stroke-concrete will-change-transform opacity-50"
                style={{ 
                  transform: `translateX(${transforms.rightX}px)`,
                  opacity: transforms.opacity
                }}
              >
                Гама
              </span>
            </h2>
          </div>
          
          <div className={`h-1.5 bg-accent mb-12 transition-all duration-700 ease-out shadow-[0_0_10px_rgba(122,211,198,0.8)] ${isTitleVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 text-sm font-bold uppercase tracking-widest border transition-all duration-300 ${
                  activeCategory === category
                    ? 'border-accent bg-accent text-black shadow-[0_0_20px_rgba(122,211,198,0.4)]'
                    : 'border-zinc-700 text-gray-400 hover:border-accent hover:text-white bg-zinc-900/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-zinc-800 border border-zinc-700 hover:border-accent transition-all duration-500 hover:-translate-y-2 shadow-xl">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                
                {/* Category Label */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-accent text-[10px] font-bold uppercase px-3 py-1 border border-accent/20">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-3 uppercase group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 line-clamp-2 leading-relaxed font-light border-b border-zinc-700 pb-6">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                   <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">В наличност</span>
                   <button className="flex items-center text-xs font-bold text-white uppercase tracking-widest group/btn hover:text-accent transition-colors">
                    Детайли
                    <ArrowRight size={14} className="ml-2 text-accent transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <a href="#contact" className="inline-block border border-white text-white px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
             Изтегли каталог (PDF)
           </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;