import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-32 pb-12 border-t border-zinc-900 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase mb-12 leading-none">
              <span className="text-transparent text-stroke-concrete block mb-2">Свържете се</span>
              <span className="text-white">с нас</span>
            </h2>
            
            <div className="space-y-10">
              <div className="group">
                <h4 className="font-bold uppercase tracking-widest text-xs text-accent mb-3 flex items-center gap-2">
                  <Phone size={14} /> Телефон
                </h4>
                <p className="text-3xl font-light text-white group-hover:text-accent transition-colors cursor-pointer">{COMPANY_INFO.phone}</p>
              </div>
              
              <div className="group">
                <h4 className="font-bold uppercase tracking-widest text-xs text-accent mb-3 flex items-center gap-2">
                   <Mail size={14} /> Email
                </h4>
                <p className="text-2xl font-light text-white group-hover:text-accent transition-colors cursor-pointer">{COMPANY_INFO.email}</p>
              </div>
              
              <div className="group">
                <h4 className="font-bold uppercase tracking-widest text-xs text-accent mb-3 flex items-center gap-2">
                   <MapPin size={14} /> Адрес
                </h4>
                <p className="text-xl font-light text-gray-400 max-w-xs leading-relaxed group-hover:text-white transition-colors">{COMPANY_INFO.address}</p>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center border border-zinc-700 text-white hover:border-accent hover:bg-accent hover:text-black transition-all duration-300 rounded-full">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 p-10 border border-zinc-800 relative shadow-2xl">
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-accent opacity-100"></div>
            
            <h3 className="text-2xl font-bold text-white uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent"></span>
              Запитване
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Име</label>
                  <input type="text" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-zinc-700" placeholder="Вашето име" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Телефон</label>
                  <input type="tel" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-zinc-700" placeholder="+359..." />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input type="email" className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-zinc-700" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Съобщение</label>
                <textarea rows={4} className="w-full bg-black border border-zinc-800 p-4 text-white focus:outline-none focus:border-accent transition-colors placeholder-zinc-700" placeholder="Как можем да помогнем?"></textarea>
              </div>
              <button className="w-full bg-accent text-black font-bold uppercase py-5 tracking-widest hover:bg-white transition-colors flex justify-between px-8 group shadow-[0_0_20px_rgba(122,211,198,0.2)]">
                Изпрати
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-zinc-500 text-xs tracking-wide">© 2024 Декорстил. Всички права запазени.</p>
           <div className="flex gap-8 text-xs text-zinc-500 uppercase font-bold tracking-widest">
             <a href="#" className="hover:text-accent transition-colors">Политика</a>
             <a href="#" className="hover:text-accent transition-colors">Условия</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;