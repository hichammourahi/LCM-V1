import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { translations } from '../translations';
import Footer from '../components/Footer';
import { ChevronRight, ChevronLeft, Play, Globe, Menu, X, Box, Waves, Circle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

import labResearchImage from '../assets/images/regenerated_image_177816135574811.jpg';
import expertiseHeroImage from '../assets/images/regenerated_image_1778173155928.png';
import pkg1 from '../assets/images/regenerated_image_1778171627486.jpg';
import pkg2 from '../assets/images/regenerated_image_1778171628206.jpg';
import pkg3 from '../assets/images/regenerated_image_1778171628558.jpg';
import pkg4 from '../assets/images/regenerated_image_1778171629190.jpg';
import por3 from '../assets/images/por3.jpg';
import por4 from '../assets/images/por4.jpg';
import wax1Image from '../assets/images/regenerated_image_1778305029700.jpg';

export default function ExpertisePage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = translations[lang];

  const categories = {
    waxes: [
      {
        title: lang === 'fr' ? "Cire résine" : "Resin wax",
        desc: lang === 'fr' 
          ? "Cire à usage unique étudiée pour tous les types de peaux. Elle arrache le poil en douceur avec sa racine. Facile à utiliser avec une bande mousseline, elle permet une épilation parfaite et économique."
          : "Single-use wax designed for all skin types. It gently removes hair from the root. Easy to use with muslin strips, it allows for perfect and economical hair removal.",
        img: wax1Image
      },
      {
        title: lang === 'fr' ? "Cire froide" : "Cold wax",
        desc: lang === 'fr' 
          ? "Solution sans colophane, sans colorant, sans parfum et sans conservateur. Idéale pour les peaux les plus sensibles et réactives."
          : "Rosin-free, dye-free, fragrance-free, and preservative-free solution. Ideal for the most sensitive and reactive skin types.",
        img: por4
      },
      {
        title: lang === 'fr' ? "Cire recyclable" : "Recyclable wax",
        desc: lang === 'fr' 
          ? "Une cire traditionnelle réutilisable de haute qualité, offrant une texture onctueuse et une malléabilité exceptionnelle pour un confort optimal."
          : "A high-quality traditional reusable wax, offering a creamy texture and exceptional malleability for optimal comfort.",
        img: por3
      },
      {
        title: lang === 'fr' ? "Cire pelable" : "Strip-less wax",
        desc: lang === 'fr' 
          ? "S'utilise sans bande pour une épilation précise et moins douloureuse sur les zones sensibles. Une formule innovante et souple."
          : "To be used without strips for precise and less painful hair removal on sensitive areas. An innovative and flexible formula.",
        img: expertiseHeroImage
      }
    ],
    skincare: t.skincare.items.map((item, i) => ({
      ...item,
      img: [pkg1, pkg3, pkg4, pkg2][i % 4]
    }))
  };

  return (
    <div className="bg-white min-h-screen">
       {/* Navigation */}
       <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100">
          <Link to="/" className="flex items-center space-x-1 md:space-x-2 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#98A388] hover:text-black transition-colors">
            <ChevronLeft className="w-3 h-3 md:w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'fr' ? "Retour à l'accueil" : "Back to home"}</span>
            <span className="sm:hidden">{lang === 'fr' ? "Retour" : "Back"}</span>
          </Link>

          <div className="flex items-center space-x-6 md:space-x-12">
            <button onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')} className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black">
              {lang === 'fr' ? 'English' : 'Français'}
            </button>
            <Link to="/" className="flex flex-col items-start leading-none group">
              <div className="flex items-center">
                <div className="flex items-baseline">
                   <span className="text-xl md:text-2xl font-black tracking-tighter text-black">L</span>
                   <span className="mx-1 md:mx-1.5 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-sage block"></span>
                   <span className="text-xl md:text-2xl font-black tracking-tighter text-black">C</span>
                   <span className="mx-1 md:mx-1.5 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-sage block"></span>
                   <span className="text-xl md:text-2xl font-black tracking-tighter text-black">M</span>
                </div>
              </div>
            </Link>
          </div>
       </nav>

       {/* Hero Section */}
       <section className="pt-48 pb-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex flex-col lg:flex-row gap-24 items-start"
             >
                <div className="flex-1 space-y-12">
                    <div className="space-y-8">
                      <p className="text-[#98A388] text-[10px] font-black uppercase tracking-[0.5em]">
                         {t.expertiseHero.eyebrow}
                      </p>
                      <h1 className="text-5xl lg:text-7xl font-serif italic leading-tight max-w-2xl text-black">
                         {t.expertiseHero.title}
                      </h1>
                      <p className="text-gray-400 text-lg max-w-xl leading-relaxed font-light">
                         {t.expertiseHero.desc}
                      </p>
                    </div>

                    <div className="w-full h-px bg-gray-100 max-w-xl"></div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-4">
                      {t.expertiseHero.metrics.map((metric, i) => (
                        <div key={i} className="space-y-4">
                          <p className="text-3xl font-serif text-black">{metric.value}</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-[#98A388] leading-relaxed">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                </div>
                <div className="flex-1 relative aspect-square lg:aspect-[4/5] w-full bg-gray-50 overflow-hidden">
                   <img src={expertiseHeroImage} className="w-full h-full object-cover grayscale brightness-95" alt="LCM Expertise" />
                </div>
             </motion.div>
          </div>
       </section>

       {/* Services/Offers Section */}
       <section className="py-24 bg-[#FBFBFA] px-6 md:px-12 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                   <div className="w-12 h-px bg-[#98A388] mb-8"></div>
                   <h3 className="text-3xl font-serif italic text-black">{t.expertiseOffers.propose.title}</h3>
                   <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                      {t.expertiseOffers.propose.desc}
                   </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-6"
                >
                   <div className="w-12 h-px bg-[#98A388] mb-8"></div>
                   <h3 className="text-3xl font-serif italic text-black">{t.expertiseOffers.create.title}</h3>
                   <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
                      {t.expertiseOffers.create.desc}
                   </p>
                </motion.div>
             </div>
          </div>
       </section>

       {/* Wax Section */}
       <section className="py-32 bg-gray-50 px-12">
          <div className="max-w-7xl mx-auto">
             <div className="flex justify-between items-end mb-24">
                <div>
                  <h2 className="text-4xl font-serif italic mb-4">{lang === 'fr' ? 'Cires à épiler' : 'Hair removal waxes'}</h2>
                  <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Expertise Historique</p>
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.waxes.map((wax, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 group cursor-pointer"
                  >
                    <div className="aspect-[3/4] bg-gray-100 mb-8 overflow-hidden">
                       <img src={wax.img} className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-700" alt={wax.title} />
                    </div>
                    <h3 className="text-lg font-serif mb-2">{wax.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">{wax.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* Packaging Section */}
        <section className="py-32 md:py-48 bg-white px-6 md:px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-24 lg:gap-32">
              {/* Left Side: Overlapping Images */}
              <div className="hidden lg:block flex-1 relative lg:h-[850px] w-full lg:mt-0">
                <motion.div 
                   initial={{ opacity: 0, x: -50, rotate: -5 }}
                   whileInView={{ opacity: 1, x: 0, rotate: -8 }}
                   viewport={{ once: true }}
                   className="absolute top-0 left-0 w-48 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] bg-white shadow-2xl p-2 md:p-4 z-10"
                >
                  <img src={pkg1} className="w-full h-full object-cover" alt="Packaging 1" />
                </motion.div>
                
                <motion.div 
                   initial={{ opacity: 0, x: 50, rotate: 5 }}
                   whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                   viewport={{ once: true }}
                   className="absolute top-16 sm:top-24 right-0 w-48 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] bg-white shadow-2xl p-2 md:p-4 z-20"
                >
                  <img src={pkg2} className="w-full h-full object-cover" alt="Packaging 2" />
                </motion.div>
 
                <motion.div 
                   initial={{ opacity: 0, y: 50, rotate: -10 }}
                   whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                   viewport={{ once: true }}
                   className="absolute bottom-24 sm:bottom-32 left-4 sm:left-12 w-48 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] bg-white shadow-2xl p-2 md:p-4 z-30"
                 >
                   <img src={pkg3} className="w-full h-full object-cover" alt="Packaging 3" />
                 </motion.div>
 
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
                   whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
                   viewport={{ once: true }}
                   className="absolute bottom-0 right-4 sm:right-12 w-48 sm:w-64 md:w-72 lg:w-80 aspect-[3/4] bg-white shadow-2xl p-2 md:p-4 z-40"
                 >
                   <img src={pkg4} className="w-full h-full object-cover" alt="Packaging 4" />
                 </motion.div>
               </div>
 
               {/* Right Side: Text & Items */}
               <div className="flex-1 space-y-12 w-full">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic mb-12 lg:mb-16 leading-tight">
                  {t.packaging.title}
                </h2>

                <div className="space-y-12">
                  {t.packaging.items.map((item, i) => {
                    const icons = [
                      <Box className="w-6 h-6 text-sage" />,
                      <Waves className="w-6 h-6 text-sage" />,
                      <Circle className="w-6 h-6 text-sage" />,
                      <Layers className="w-6 h-6 text-sage" />
                    ];
                    return (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-8 group"
                      >
                        <div className="w-12 h-12 flex items-center justify-center border border-gray-100 group-hover:border-sage transition-colors shrink-0">
                          {icons[i]}
                        </div>
                        <div>
                          <h4 className="text-2xl font-serif italic mb-2">{item.title}</h4>
                          <p className="text-gray-500 font-light max-w-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skincare Section */}
        <section className="py-32 px-12">
          <div className="max-w-7xl mx-auto">
             <div className="flex flex-col items-center text-center mb-24">
                <h2 className="text-4xl font-serif italic mb-4">{t.skincare.title}</h2>
                <div className="w-24 h-px bg-sage mb-8"></div>
             </div>
 
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
                {categories.skincare.map((care, i) => (
                  <div key={i} className="bg-white p-12 group overflow-hidden relative min-h-[400px] flex items-center justify-center">
                     <img src={care.img} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700" alt={care.title} />
                     <div className="relative z-10 text-center">
                        <p className="text-[10px] text-sage font-black uppercase tracking-[0.3em] mb-4">0{i+1}</p>
                        <h3 className="text-2xl font-serif mb-4 text-gray-900 group-hover:text-sage transition-colors">{care.title}</h3>
                        <p className="text-xs text-gray-400 font-light leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {care.desc}
                        </p>
                        <button className="text-[10px] font-black uppercase tracking-widest border-b border-gray-900 pb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                           {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
                        </button>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

       <Footer t={t} lang={lang} />
    </div>
  );
}
