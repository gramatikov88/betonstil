import React from 'react';
import { ShieldCheck, Snowflake, Hammer, Truck } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: 'Висока Якост',
    description: 'Използваме само сертифициран бетон с висока плътност за максимална издръжливост на натоварване.',
    icon: <Hammer className="w-8 h-8 text-accent" />
  },
  {
    id: 2,
    title: 'Мразоустойчивост',
    description: 'Специални добавки гарантират устойчивост на нашите изделия при екстремни зимни условия.',
    icon: <Snowflake className="w-8 h-8 text-accent" />
  },
  {
    id: 3,
    title: 'Дълготраен Цвят',
    description: 'Използваме неорганични пигменти от водещи европейски производители за трайни цветове.',
    icon: <ShieldCheck className="w-8 h-8 text-accent" />
  },
  {
    id: 4,
    title: 'Бърза Доставка',
    description: 'Разполагаме със собствен транспорт и осигуряваме бърза доставка до вашия обект.',
    icon: <Truck className="w-8 h-8 text-accent" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-black py-24 relative z-20">
      <div className="container mx-auto px-6">
        {/* Contrast fix: Use gap and distinct card backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="group p-10 bg-zinc-900 border border-zinc-800 hover:border-accent hover:bg-zinc-800 transition-all duration-500 relative overflow-hidden shadow-lg">
              
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-8 transform group-hover:-translate-y-2 transition-transform duration-300 inline-flex items-center justify-center p-4 border border-zinc-700 rounded bg-black group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(122,211,198,0.2)]">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-wider group-hover:text-accent transition-colors relative z-10">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm font-light relative z-10 group-hover:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;