import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { ZoomIn } from 'lucide-react';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase leading-none">
                Реализирани <br/>
                <span className="text-transparent text-stroke-accent">Проекти</span>
            </h2>
            <div className="hidden md:block w-32 h-[2px] bg-accent mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GALLERY_IMAGES.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`relative group overflow-hidden ${index === 0 || index === 3 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-square md:aspect-video'}`}
                >
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors duration-500"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="border-l-4 border-accent pl-4 bg-black/80 backdrop-blur-sm p-4 inline-block">
                            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-1">{item.category}</span>
                            <h3 className="text-2xl font-display font-bold text-white uppercase">{item.title}</h3>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center text-black">
                            <ZoomIn size={24} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;