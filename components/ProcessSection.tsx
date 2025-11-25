import React from 'react';
import { PROCESS_STEPS } from '../constants';

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=1997&auto=format&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase leading-none mb-6 text-white">
            <span className="text-accent block text-sm tracking-[0.3em] mb-4">Технология</span>
            Как работим
          </h2>
          <p className="text-gray-400 max-w-xl text-lg font-light">
            Производственият ни процес съчетава немска прецизност с висококачествени български суровини.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (Desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-zinc-800 z-0"></div>

          {PROCESS_STEPS.map((step, index) => (
            <div key={step.id} className="relative z-10 group">
              <div className="w-24 h-24 bg-zinc-900/90 backdrop-blur border border-zinc-700 flex items-center justify-center mb-8 group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all duration-500 rounded-lg shadow-2xl relative">
                <span className="text-3xl font-display font-black text-white group-hover:text-black transition-colors">{step.number}</span>
                {/* Triangle indicator */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 group-hover:bg-accent border-r border-b border-zinc-700 group-hover:border-accent transform rotate-45 transition-colors duration-500"></div>
              </div>

              <h3 className="text-xl font-bold uppercase mb-4 text-white group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4 group-hover:border-accent transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;