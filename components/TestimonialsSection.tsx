import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Parallax Background */}
            <div
                className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")'
                }}
            >
                <div className="absolute inset-0 bg-black/90"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-center text-sm font-bold uppercase tracking-[0.3em] text-accent mb-16">
                    Какво казват клиентите
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-10 relative hover:bg-zinc-900/90 transition-colors duration-300">
                            <Quote className="absolute top-8 right-8 text-accent/20 w-12 h-12" />

                            <p className="text-xl text-gray-300 font-light italic mb-8 leading-relaxed">
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-accent/50"
                                />
                                <div>
                                    <div className="text-white font-bold uppercase">{t.name}</div>
                                    <div className="text-xs text-accent">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Strip */}
                <div className="mt-20 pt-10 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-black text-white mb-1">15k+</div>
                        <div className="text-[10px] uppercase text-gray-500 tracking-widest">Тона Бетон</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-white mb-1">500+</div>
                        <div className="text-[10px] uppercase text-gray-500 tracking-widest">Обекта</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-white mb-1">50+</div>
                        <div className="text-[10px] uppercase text-gray-500 tracking-widest">Партньора</div>
                    </div>
                    <div>
                        <div className="text-4xl font-black text-white mb-1">100%</div>
                        <div className="text-[10px] uppercase text-gray-500 tracking-widest">Гаранция</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;