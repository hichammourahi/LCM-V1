/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef, type ReactNode } from 'react';
import { Linkedin, Facebook, Menu, X, ChevronRight, Send, Globe, Play, Search, Share2, Trophy, Heart } from 'lucide-react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { translations, Translation } from './translations';
import LegalPage from './pages/LegalPage';
import ExpertisePage from './pages/ExpertisePage';
import Footer from './components/Footer';
import heroImage from './assets/images/13419.jpg';
import brandLogo1 from './assets/images/cropped-arsenevalere_logo-sansfond.png';
import brandLogo2 from './assets/images/logo_nd.png';
import brandLogo3 from './assets/images/csp_limoges.png';
import brandLogo4 from './assets/images/usal_limoges.png';
import labResearchImage from './assets/images/regenerated_image_177816135574811.jpg';
import brandHero1 from './assets/images/3.jpg';
import brandHero2 from './assets/images/Logo norma.jpg';

// Images from Unsplash - Luxury Scents/Cosmetics vibe
const IMAGES = {
  hero: heroImage,
  wax: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1000",
  care: "https://images.unsplash.com/photo-1570172619380-28243a845839?auto=format&fit=crop&q=80&w=1000",
  dev: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
  brand1: brandHero1,
  brand2: brandHero2,
  brand3: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000",
  lab: labResearchImage,
  popup: labResearchImage,
};

const LOGOS = [
  { name: "Arsène Valère", url: brandLogo1 },
  { name: "Norma de Durville", url: brandLogo2 },
  { name: "Limoges CSP", url: brandLogo3 },
  { name: "USAL Rugby", url: brandLogo4 }
];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expertise" element={<ExpertisePage />} />
      <Route 
        path="/cgv" 
        element={<LegalPage title="Conditions Générales de Vente" lastUpdated="24 Octobre 2023" type="cgv" />} 
      />
      <Route 
        path="/mentions-legales" 
        element={<LegalPage title="Mentions Légales" lastUpdated="24 Octobre 2023" type="mentions" />} 
      />
      <Route 
        path="/confidentialite" 
        element={<LegalPage title="Politique de Confidentialité" lastUpdated="07 Mai 2026" />} 
      />
    </Routes>
  );
}

function Home() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      if (scrollY > 500 && !showPopup && !popupDismissed) {
        setTimeout(() => {
          setShowPopup(true);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPopup, popupDismissed]);

  const toggleLang = () => setLang(l => l === 'fr' ? 'en' : 'fr');

  return (
    <div className="relative min-h-screen">
      {/* Background overlay for smooth transitions */}
      <div className="fixed inset-0 -z-10 bg-white" />

      {/* Navbar */}
      <Navbar lang={lang} toggleLang={toggleLang} isScrolled={isScrolled} t={t} />

      {/* Social Sidebar */}
      <SocialSidebar />

      {/* Sections */}
      <main>
        <Hero t={t} />
        <Expertise t={t} />
        <Brands t={t} />
        <Laboratory t={t} />
        <Process t={t} />
        <Quality t={t} />
        <Partners t={t} />
        <Contact t={t} lang={lang} />
      </main>

      {/* Footer */}
      <Footer t={t} lang={lang} />

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <ContactPopup 
            t={t} 
            lang={lang}
            onClose={() => {
              setShowPopup(false);
              setPopupDismissed(true);
              sessionStorage.setItem('lcm_popup_dismissed', 'true');
            }} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar({ lang, toggleLang, isScrolled, t }: { lang: string, toggleLang: () => void, isScrolled: boolean, t: Translation }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-6 py-6 md:px-12 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-8">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start leading-none group">
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
          <div className="mt-1.5 flex h-1">
            <div className="w-4 h-full bg-sage"></div>
            <div className="w-4 h-full bg-sage/70"></div>
            <div className="w-4 h-full bg-sage/40"></div>
          </div>
        </a>

        {/* Desktop Links - Centered */}
        <div className="hidden lg:flex items-center space-x-12 text-[13px] font-bold tracking-tight text-white/70">
          {['brands', 'expertise', 'lab'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-white transition-colors duration-300">
              {t.nav[item as keyof typeof t.nav]}
            </a>
          ))}
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>

        {/* Right Side Tools */}
        <div className="hidden lg:flex items-center space-x-6">
          <button onClick={toggleLang} className="text-white/60 hover:text-white text-[13px] font-bold transition-all">
            {lang.toUpperCase()}
          </button>

          <div className="flex items-center space-x-6">
            <a href="#contact" className="bg-white text-black px-5 py-2.5 rounded-xl text-[13px] font-black hover:bg-sage hover:text-white transition-all transform hover:scale-105 active:scale-95">
              {t.nav.quote}
            </a>
          </div>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black border-t border-white/5 flex flex-col p-8 space-y-6 lg:hidden"
          >
            {['brands', 'expertise', 'lab', 'process', 'quality', 'partners', 'contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-white hover:text-sage"
              >
                {t.nav[item as keyof typeof t.nav]}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end space-y-1">
      <a 
        href="https://www.linkedin.com/in/lcm-cosm%C3%A9tiques" 
        className="group relative w-12 h-12 bg-sage flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:w-14"
      >
        <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-[2px] transition-transform duration-500 ease-out" />
        <Linkedin size={18} className="relative z-10 group-hover:text-sage transition-colors duration-500" />
      </a>
      <a 
        href="https://www.facebook.com/laboratoireLCM" 
        className="group relative w-12 h-12 bg-sage flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:w-14"
      >
        <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-[2px] transition-transform duration-500 ease-out" />
        <Facebook size={18} className="relative z-10 group-hover:text-sage transition-colors duration-500" />
      </a>
    </div>
  );
}

function HeroMarquee({ features }: { features: string[] }) {
  // Create an extended list for seamless looping (triple the items)
  const extendedFeatures = [...features, ...features, ...features];
  const [index, setIndex] = useState(features.length); // Start at the first item of the middle set

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  // When we reach the end of the second set, jump back to the first set seamlessly
  useEffect(() => {
    if (index >= features.length * 2) {
      // We give a small delay for the animation to transition before snapping back
      const timeout = setTimeout(() => {
        setIndex(features.length);
      }, 1200); // Matches/slightly exceeds the transition duration
      return () => clearTimeout(timeout);
    }
  }, [index, features.length]);

  return (
    <div className="flex-1 hidden lg:flex h-[400px] overflow-hidden relative items-center justify-end">
      {/* SHADOW OVERLAYS REMOVED */}
      
      <div className="relative w-full h-[70px]">
        {extendedFeatures.map((feature, i) => {
          const isActive = i === index;
          // Only render items near the active index for performance and to prevent overflow issues
          const distance = Math.abs(i - index);
          if (distance > 4) return null;

          return (
            <motion.div
              key={`${feature}-${i}`}
              initial={false}
              animate={{ 
                opacity: distance === 0 ? 1 : 0.4,
                scale: distance === 0 ? 1.05 : 0.9,
                y: (i - index) * 70,
              }}
              transition={{ 
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute right-0 flex items-center justify-end space-x-6 h-[70px] whitespace-nowrap"
            >
              <span className={`text-2xl md:text-3xl font-sans font-black tracking-tight text-white`}>
                {feature}
              </span>
              <div className="w-8 flex justify-center">
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Play size={20} className="text-sage fill-sage" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-48 px-6 md:px-12 lg:px-24 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={IMAGES.hero} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-24">
        {/* Left Side Content - Balanced Proportions */}
        <div className="flex-1 w-full lg:max-w-2xl py-6 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="text-white text-4xl md:text-5xl lg:text-[4rem] font-sans font-black leading-[1.1] mb-6 tracking-tighter"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white/80 text-sm md:text-base lg:text-sm font-medium max-w-md leading-relaxed mb-8 mx-auto lg:mx-0"
          >
            {t.hero.paragraph}
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1, duration: 1 }}
             className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#contact" className="inline-flex items-center justify-center bg-white text-gray-900 px-5 py-2.5 text-[10.5px] font-black uppercase tracking-widest hover:bg-sage hover:text-white transition-all duration-500 rounded-lg whitespace-nowrap">
              {t.hero.cta}
            </a>
            <Link to="/expertise" className="flex items-center space-x-3 px-5 py-2.5 border border-white/20 text-white text-[10.5px] font-black uppercase tracking-widest hover:border-white transition-all duration-500 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                 <Play size={8} className="fill-white" />
              </div>
              <span>{t.hero.secondaryCta}</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Side Scrolling List - PC ONLY */}
        <HeroMarquee features={t.hero.features} />
      </div>

      {/* Partners Footer at Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-0 right-0 z-10 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-black mb-6 md:mb-10 text-center">
            {t.partners.trust}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
             {LOGOS.map((logo, i) => (
               <div key={i} className="h-8 md:h-12 flex items-center justify-center grayscale brightness-200 opacity-60 hover:opacity-100 hover:grayscale-0 hover:brightness-100 transition-all duration-500">
                 <img 
                   src={logo.url} 
                   alt={logo.name} 
                   className="h-full w-auto object-contain" 
                   referrerPolicy="no-referrer"
                 />
               </div>
             ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Expertise({ t }: { t: Translation }) {
  return (
    <section id="expertise" className="py-32 bg-[#F8F9FA] px-6">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <SectionTitle>{t.expertise.title}</SectionTitle>
        <p className="text-gray-500 font-medium text-lg mt-8">{t.expertise.subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {t.expertise.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Icon Column */}
            <div className="w-24 h-24 rounded-full bg-sage flex items-center justify-center mb-10 shadow-lg shadow-sage/20 group-hover:scale-110 transition-transform duration-500 relative">
               {i === 0 && (
                 <div className="relative w-14 h-14 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white rounded-full border-4 border-gray-100 flex items-center justify-center overflow-hidden">
                       <div className="flex w-full h-full">
                          <div className="w-1/3 h-full bg-[#002395]"></div>
                          <div className="w-1/3 h-full bg-white"></div>
                          <div className="w-1/3 h-full bg-[#ED2939]"></div>
                       </div>
                    </div>
                 </div>
               )}
               {i === 1 && (
                 <div className="text-white">
                   <Share2 size={40} strokeWidth={1.5} />
                 </div>
               )}
               {i === 2 && (
                 <div className="text-white">
                   <Trophy size={40} strokeWidth={1.5} />
                 </div>
               )}
               {i === 3 && (
                 <div className="text-white">
                   <Heart size={40} strokeWidth={1.5} fill="currentColor" />
                 </div>
               )}
            </div>

            <h3 className="text-xl font-bold mb-6 text-gray-900 tracking-tight uppercase">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed text-[15px] font-normal px-4">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Brands({ t }: { t: Translation }) {
  const [activePortal, setActivePortal] = useState<number | null>(null);

  const brands = [
    { 
      name: "Arsène Valère", 
      atmosphere: t.brands.brand1.atmosphere, 
      logo: brandLogo1,
      img: IMAGES.brand1,
      theme: "brand-portal-arsene",
      tagline: "Science & Sensorialité",
      bg: "bg-[#1B3022]", // Dark Forest Green from the logo image
      accent: "text-sage-light"
    },
    { 
      name: "Norma de Durville", 
      atmosphere: t.brands.brand2.atmosphere, 
      logo: brandLogo2,
      img: IMAGES.brand2,
      theme: "brand-portal-norma",
      tagline: "Expertise Cire d'Excellence",
      bg: "bg-[#4D69B4]", // Accurate blue from the logo image
      accent: "text-white"
    },
    { 
      name: "HYLU", 
      atmosphere: t.brands.brand3.atmosphere, 
      logo: null,
      img: IMAGES.brand3,
      theme: "brand-portal-hylu",
      tagline: "Hydratation Source de Vie",
      bg: "bg-[#f2f4ef]",
      accent: "text-sage"
    },
  ];

  return (
    <section id="brands" className="relative lg:h-[90vh] min-h-[600px] flex flex-col lg:flex-row overflow-hidden group/all bg-gray-900">
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20 pointer-events-none">
        <p className="text-white/50 font-medium tracking-[0.3em] text-[10px] md:text-xs mb-2 md:mb-4 uppercase">{t.brands.eyebrow}</p>
        <h2 className="text-white text-3xl md:text-5xl font-serif">{t.brands.title}</h2>
      </div>

      {brands.map((brand, i) => (
        <motion.div
          key={i}
          onMouseEnter={() => setActivePortal(i)}
          onMouseLeave={() => setActivePortal(null)}
          animate={{ 
            width: typeof window !== 'undefined' && window.innerWidth >= 1024 
              ? (activePortal === null ? "33.33%" : (activePortal === i ? "50%" : "25%")) 
              : "100%",
            height: typeof window !== 'undefined' && window.innerWidth < 1024
              ? (activePortal === null ? "33.33vh" : (activePortal === i ? "40vh" : "30vh"))
              : "100%"
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden flex flex-col border-b lg:border-b-0 lg:border-r border-white/5 last:border-0 ${brand.theme} ${brand.bg}`}
        >
          {/* Background Image with Parallax-esque effect */}
          <motion.img 
            animate={{ scale: activePortal === i ? 1.08 : 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src={brand.img} 
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply transition-opacity duration-700" 
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/90" />

          {/* Portal Content */}
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
            {/* Vertical Tagline (Desktop Only) */}
            <div className="absolute top-24 md:top-32 right-8 md:right-12 opacity-30 hidden md:block">
               <span className={`portal-text-vertical text-[10px] uppercase tracking-[0.5em] font-bold text-white`}>
                 {brand.tagline}
               </span>
            </div>

            <motion.div
              animate={{ y: activePortal === i ? 0 : 10, opacity: activePortal === i ? 1 : 0.7 }}
              className="space-y-4 md:space-y-6"
            >
              <p className={`text-[10px] font-bold uppercase tracking-widest ${brand.accent}`}>
                {brand.atmosphere}
              </p>
              
              {brand.logo ? (
                <div className="h-16 md:h-24 w-auto flex items-start">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-full w-auto object-contain filter brightness-0 invert" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                <h3 className={`text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-none`}>
                  {brand.name}
                </h3>
              )}
              
              <AnimatePresence>
                {activePortal === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <button className="mt-4 md:mt-8 px-6 md:px-8 py-3 md:py-4 border border-white/30 text-white text-[9px] md:text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                      {t.brands.discover}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Number Overlay */}
          <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12">
            <span className="text-white/10 text-6xl md:text-9xl font-serif leading-none select-none">
              0{i + 1}
            </span>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function Laboratory({ t }: { t: Translation }) {
  const features = [
    { title: t.lab.features.rd.title, desc: t.lab.features.rd.desc },
    { title: t.lab.features.prod.title, desc: t.lab.features.prod.desc },
    { title: t.lab.features.reg.title, desc: t.lab.features.reg.desc },
  ];

  return (
    <section id="lab" className="py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <img src={IMAGES.lab} alt="Laboratoire" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sage/10 -z-10" />
          </motion.div>
        </div>

        <div className="flex-1">
          <SectionTitle className="mb-12 text-left">{t.lab.title}</SectionTitle>
          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
                className="group p-8 bg-white glass border-gray-100 hover:border-sage/50 transition-all duration-500 shadow-xs hover:shadow-lg"
              >
                <h4 className="text-lg font-serif mb-2 group-hover:text-sage transition-colors">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process({ t }: { t: Translation }) {
  const steps = [
    { name: t.process.cards.brief, num: "01" },
    { name: t.process.cards.sample, num: "02" },
    { name: t.process.cards.validation, num: "03" },
    { name: t.process.cards.production, num: "04" },
  ];

  return (
    <section id="process" className="py-32 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <SectionTitle>{t.process.title}</SectionTitle>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="group relative p-12 bg-white border border-gray-100 hover:border-sage transition-all duration-500 text-center"
          >
            <span className="block text-5xl font-serif text-gray-100 group-hover:text-sage/10 transition-colors duration-500 absolute top-4 right-4">{step.num}</span>
            <div className="w-12 h-12 rounded-full border border-sage/20 flex items-center justify-center mx-auto mb-8 group-hover:bg-sage group-hover:text-white transition-all duration-500">
              {i + 1}
            </div>
            <h4 className="text-sm font-medium uppercase tracking-widest">{step.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Quality({ t }: { t: Translation }) {
  const stats = [
    { label: t.quality.stats.founded, val: "1965" },
    { label: t.quality.stats.origin, val: "France" },
    { label: t.quality.stats.rdFocus, val: "100%" },
    { label: t.quality.stats.market, val: "B2B" },
  ];

  return (
    <section id="quality" className="py-40 bg-gray-900 text-white px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,var(--color-sage)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <SectionTitle className="text-white before:bg-white/20 after:bg-white/20">{t.quality.title}</SectionTitle>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <h5 className="text-5xl md:text-7xl font-serif text-sage mb-4">{stat.val}</h5>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners({ t }: { t: Translation }) {
  return (
    <section id="partners" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <SectionTitle>{t.partners.title}</SectionTitle>
      </div>

      <div className="w-full overflow-hidden py-10 relative">
        <div className="absolute left-0 top-0 w-40 h-full bg-linear-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-40 h-full bg-linear-to-l from-white to-transparent z-10" />

        <div className="horizontal-marquee-loop flex items-center space-x-24">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex items-center group cursor-pointer">
              <div className="h-12 md:h-20 flex items-center">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-full w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t, lang }: { t: Translation, lang: 'fr' | 'en' }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-sage-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-20">
        <div className="flex-1 py-12">
          <SectionTitle className="text-left mb-8">{t.contact.title}</SectionTitle>
          <p className="text-gray-500 mb-12 text-lg font-light leading-relaxed">
            {t.contact.subtitle}
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full border border-sage/20 flex items-center justify-center text-sage">
                <Globe size={18} />
              </div>
              <span className="text-sm font-medium">{t.contact.address}</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-400 group cursor-pointer hover:text-sage transition-colors">
              <Linkedin size={18} />
              <span className="text-sm">linkedin.com/company/lcm-cosmetique</span>
            </div>
          </div>
        </div>

        <div className="flex-[1.5]">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="bg-white p-12 shadow-xl border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t.contact.name}</label>
                    <input required type="text" className="border-b border-gray-200 py-3 focus:outline-none focus:border-sage transition-colors" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t.contact.email}</label>
                    <input required type="email" className="border-b border-gray-200 py-3 focus:outline-none focus:border-sage transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col space-y-2 mb-12 min-h-[250px]">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t.contact.message}</label>
                  <ReactQuill 
                    theme="snow"
                    className="luxury-quill"
                    placeholder="..."
                  />
                </div>
                <button type="submit" className="w-full bg-gray-900 hover:bg-sage text-white text-xs font-bold uppercase tracking-widest py-6 transition-all duration-500 flex items-center justify-center space-x-4">
                  <span>{t.contact.send}</span>
                  <Send size={14} />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="contact-success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-12 shadow-xl border border-gray-100 h-full flex flex-col items-center justify-center text-center space-y-8"
              >
                <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                  <Heart size={40} fill="currentColor" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif">{t.contact.success.split('.')[0]}.</h3>
                  <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                    {t.contact.success.split('.').slice(1).join('.')}
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] font-bold uppercase tracking-widest text-sage hover:text-black transition-colors"
                >
                  {lang === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ContactPopup({ t, onClose, lang }: { t: Translation, onClose: () => void, lang: 'fr' | 'en' }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white w-full max-w-4xl flex flex-col md:flex-row overflow-hidden shadow-2xl z-10"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-gray-400 hover:text-sage transition-colors">
          <X size={24} />
        </button>

        <div className="hidden md:block w-2/5 relative">
          <img src={IMAGES.popup} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sage/20 mix-blend-multiply" />
        </div>

        <div className="flex-1 p-8 md:p-12 bg-white flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div 
                key="popup-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-3xl font-serif mb-4">{t.popup.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-sm">{t.popup.subtitle}</p>
                
                <form onSubmit={handleSubmit} className="space-y-4 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t.contact.name}</label>
                      <input required type="text" placeholder="..." className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-sage transition-colors text-sm" />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t.contact.email}</label>
                      <input required type="email" placeholder="email@exemple.com" className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-sage transition-colors text-sm" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t.contact.message}</label>
                    <textarea 
                      required
                      rows={3} 
                      placeholder="..." 
                      className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-sage transition-colors text-sm resize-none"
                    />
                  </div>

                  <button type="submit" className="w-full bg-gray-900 py-4 text-white text-xs font-bold uppercase tracking-widest hover:bg-sage transition-all duration-500 rounded-lg mt-4">
                    {t.popup.cta}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="popup-success"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center text-sage mx-auto mb-8">
                  <Heart size={32} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-serif mb-4">{t.popup.success.split('!')[0]}!</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-8">
                  {t.popup.success.split('!').slice(1).join('!')}
                </p>
                <button 
                  onClick={onClose}
                  className="bg-gray-900 text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-sage transition-colors"
                >
                  {lang === 'fr' ? 'Fermer' : 'Close'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

function SectionTitle({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative inline-block text-4xl md:text-5xl font-serif ${className} before:content-[''] before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-[1px] before:bg-sage/40`}
    >
      {children}
    </motion.h2>
  );
}
