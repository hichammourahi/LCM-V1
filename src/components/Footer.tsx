import { Translation } from '../translations';
import { Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ t }: { t: Translation, lang: 'fr' | 'en' }) {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex flex-col items-start leading-none group">
              <div className="flex items-center">
                <div className="flex items-baseline">
                   <span className="text-2xl font-black tracking-tighter text-white">L</span>
                   <span className="mx-1.5 w-1.5 h-1.5 rounded-full bg-sage block"></span>
                   <span className="text-2xl font-black tracking-tighter text-white">C</span>
                   <span className="mx-1.5 w-1.5 h-1.5 rounded-full bg-sage block"></span>
                   <span className="text-2xl font-black tracking-tighter text-white">M</span>
                </div>
              </div>
              <div className="mt-1 text-[9px] font-bold tracking-[0.3em] text-white uppercase opacity-90">
                Laboratoire
              </div>
              <div className="mt-0.5 text-[8.5px] font-medium tracking-wide flex items-center space-x-1">
                <span className="text-white/60">de</span>
                <span className="text-sage font-extrabold">cosmétologie moderne</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs uppercase tracking-wider font-medium">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/lcm-cosm%C3%A9tiques" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-500">
                <Linkedin size={18} />
              </a>
              <a href="https://www.facebook.com/laboratoireLCM" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-sage hover:border-sage transition-all duration-500">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-sage">{t.footer.expertise}</h4>
            <ul className="space-y-4">
              <li><a href="#expertise" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">{t.nav.brands}</a></li>
              <li><a href="#lab" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">{t.nav.lab}</a></li>
              <li><a href="#process" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">{t.nav.process}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-sage">{t.footer.legal}</h4>
            <ul className="space-y-4">
              <li><a href="/mentions-legales" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Mentions Légales</a></li>
              <li><a href="/cgv" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">CGV</a></li>
              <li><a href="/confidentialite" className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">Confidentialité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-sage">{t.footer.contact}</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-sage shrink-0" />
                <span className="text-white/40 text-sm uppercase tracking-wider leading-relaxed">Laboratoire LCM<br />Limoges, France</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={18} className="text-sage shrink-0" />
                <span className="text-white/40 text-sm">contact@lcm-cosmetique.fr</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-sage shrink-0" />
                <span className="text-white/40 text-sm">+33 (0)5 55 00 00 00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} LCM Cosmétiques. {t.footer.rights}
          </p>
          <div className="flex space-x-8">
             <span className="text-white/10 text-[10px] uppercase font-black">Design by LCM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
