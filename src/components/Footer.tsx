import { motion } from 'motion/react';
import { Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Translation } from '../translations';

export default function Footer({ t, lang }: { t: Translation, lang: 'fr' | 'en' }) {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
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
            <p className="text-sm text-white/40 leading-relaxed font-light">
              {lang === 'fr' 
                ? "Expertise française en formulation de soins cosmétiques et cires à épiler depuis 1965." 
                : "French expertise in cosmetic care formulation and hair removal waxes since 1965."}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">{lang === 'fr' ? 'Navigation' : 'Navigation'}</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li><a href="#expertise" className="hover:text-sage transition-colors">{t.nav.expertise}</a></li>
              <li><a href="#brands" className="hover:text-sage transition-colors">{t.nav.brands}</a></li>
              <li><a href="#lab" className="hover:text-sage transition-colors">{t.nav.lab}</a></li>
              <li><a href="#contact" className="hover:text-sage transition-colors">{lang === 'fr' ? 'Contact' : 'Contact'}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">{lang === 'fr' ? 'Informations' : 'Information'}</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li><Link to="/mentions-legales" className="hover:text-sage transition-colors">{lang === 'fr' ? 'Mentions Légales' : 'Legal Mentions'}</Link></li>
              <li><Link to="/cgv" className="hover:text-sage transition-colors">{lang === 'fr' ? 'CGV' : 'Terms & Conditions'}</Link></li>
              <li><Link to="/confidentialite" className="hover:text-sage transition-colors">{lang === 'fr' ? 'Confidentialité' : 'Privacy Policy'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-6 text-sm text-white/60 font-light">
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-sage shrink-0" />
                <span>3 Avenue du Président Kennedy, 87100 Limoges, France</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={18} className="text-sage shrink-0" />
                <span>contact@lcm-cosmetique.fr</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={18} className="text-sage shrink-0" />
                <span>+33 (0)5 55 32 30 30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © {new Date().getFullYear()} Laboratoire LCM. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com/in/lcm-cosm%C3%A9tiques" className="text-white/20 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://www.facebook.com/laboratoireLCM" className="text-white/20 hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
