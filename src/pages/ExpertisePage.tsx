import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { translations } from '../translations';
import Footer from '../components/Footer';

// Placeholder images for deleted assets
const labResearchImage = "https://images.unsplash.com/photo-1582719202047-76d3432ee323?auto=format&fit=crop&q=80&w=1000";
const expertiseHeroImage = "https://images.unsplash.com/photo-1570172619380-28243a845839?auto=format&fit=crop&q=80&w=1000";
const pkg1 = "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000";
const pkg2 = "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=1000";
const pkg3 = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000";
const pkg4 = "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1000";
const por3 = "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000";
const por4 = "https://images.unsplash.com/photo-1522335789203-aabd1fc549bb?auto=format&fit=crop&q=80&w=1000";

export default function ExpertisePage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    fr: {
      hero: "Expertise de Formulation",
      wax: [
        {
          title: "Cire résine",
          desc: "Cire à usage unique étudiée pour tous les types de peaux. Elle arrache le poil en douceur avec sa racine. Facile à utiliser avec une bande mousseline, elle permet une épilation parfaite et économique.",
          img: expertiseHeroImage
        },
        {
          title: "Cire froide",
          desc: "Sans colophane, sans colorant, sans parfum, sans conservateur. Nos bandes prêtes à l'emploi permettent une épilation rapide et parfaitement hygiénique.",
          img: por4
        },
        {
          title: "Cire recyclable",
          desc: "Cire traditionnelle basse température, enrichie en cire d'abeille. Elle est appréciée pour son onctuosité et sa souplesse.",
          img: por3
        },
        {
          title: "Cire pelable",
          desc: "Cire sans bandes, extra souple et efficace. Pour une épilation tout en douceur des zones sensibles.",
          img: expertiseHeroImage
        }
      ],
      ranges: [
        { 
          name: "Pots", 
          desc: "Adaptés aux chauffe-cires professionnels. Cire pelable en pot de 800g.",
          img: pkg1
        },
        { 
          name: "Micro-ondable", 
          desc: "Praticité et rapidité pour un usage quotidien ou itinérant.",
          img: pkg2
        },
        { 
          name: "Pastilles", 
          desc: "Dosage facile et fonte rapide pour une utilisation optimale.",
          img: pkg3
        },
        { 
          name: "Cartouches", 
          desc: "Application propre en roll-on pour les grandes zones.",
          img: pkg4
        }
      ]
    },
    en: {
      hero: "Formulation Expertise",
      wax: [
        {
          title: "Resin wax",
          desc: "Single-use wax designed for all skin types. It gently removes hair from the root. Easy to use with muslin strips, it allows for perfect and economical hair removal.",
          img: expertiseHeroImage
        },
        {
          title: "Cold wax",
          desc: "Rosin-free, dye-free, fragrance-free, preservative-free. Our ready-to-use strips allow for quick and perfectly hygienic hair removal.",
          img: por4
        },
        {
          title: "Recyclable wax",
          desc: "Traditional low-temperature wax, enriched with beeswax. It is appreciated for its creaminess and flexibility.",
          img: por3
        },
        {
          title: "Strip-less wax",
          desc: "Peelable wax, extra flexible and effective. For gentle hair removal of sensitive areas.",
          img: expertiseHeroImage
        }
      ],
      ranges: [
        { 
          name: "Jars", 
          desc: "Adapted for professional wax heaters. Peelable wax in 800g jar.",
          img: pkg1
        },
        { 
          name: "Microwavable", 
          desc: "Convenience and speed for daily or on-the-go use.",
          img: pkg2
        },
        { 
          name: "Pellets", 
          desc: "Easy dosing and rapid melting for optimal use.",
          img: pkg3
        },
        { 
          name: "Cartridges", 
          desc: "Clean roll-on application for large areas.",
          img: pkg4
        }
      ]
    }
  };

  const activeContent = content[lang];

  return (
    <div className="bg-[#fcfcfc]">
      {/* Navigation for Page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md px-12 py-4">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
           <a href="/" className="flex flex-col items-start leading-none group">
            <div className="flex items-center">
              <div className="flex items-baseline">
                 <span className="text-xl font-black tracking-tighter text-white">L</span>
                 <span className="mx-1 w-1 h-1 rounded-full bg-sage block"></span>
                 <span className="text-xl font-black tracking-tighter text-white">C</span>
                 <span className="mx-1 w-1 h-1 rounded-full bg-sage block"></span>
                 <span className="text-xl font-black tracking-tighter text-white">M</span>
              </div>
            </div>
          </a>
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')}
              className="text-white/60 hover:text-white text-xs font-bold uppercase"
            >
              {lang.toUpperCase()}
            </button>
            <a href="/" className="bg-white text-black px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-sage hover:text-white transition-all">
              {lang === 'fr' ? 'Retour Accueil' : 'Home'}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="h-[60vh] relative flex items-center justify-center overflow-hidden bg-black">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src={labResearchImage} 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black" />
        <div className="relative text-center z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sage text-[10px] font-black uppercase tracking-[0.5em] mb-4">Innovation Lab</p>
            <h1 className="text-white text-5xl md:text-7xl font-serif italic">{activeContent.hero}</h1>
          </motion.div>
        </div>
      </section>

      {/* Wax Collection */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
             <div className="max-w-2xl">
                <span className="text-sage text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Textures & Sensations</span>
                <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                  {lang === 'fr' ? 'La collection de cires professionnelles.' : 'The professional wax collection.'}
                </h2>
             </div>
             <p className="max-w-md text-gray-500 font-medium leading-relaxed">
               {lang === 'fr' 
                 ? "Une gamme complète développée pour répondre aux exigences les plus pointues des instituts de beauté."
                 : "A complete range developed to meet the most demanding requirements of beauty salons."}
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
             {activeContent.wax.map((wax, i) => (
               <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative h-[500px] overflow-hidden bg-gray-100"
               >
                 <img src={wax.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                 <div className="absolute inset-x-8 bottom-8 text-white">
                    <h3 className="text-2xl font-serif mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">{wax.title}</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-xs text-white/70 leading-relaxed max-w-[200px]">{wax.desc}</p>
                    </div>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-32 bg-white flex flex-col lg:flex-row items-center border-y border-gray-100">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:w-2/5 aspect-[4/5] bg-gray-50 relative overflow-hidden flex items-center justify-center"
        >
           <img 
             src={expertiseHeroImage} 
             alt="Laboratoire LCM" 
             className="w-full h-full object-cover grayscale brightness-95 transform hover:scale-110 transition-transform duration-[3000ms]"
           />
        </motion.div>

        <div className="lg:w-3/5 p-12 lg:p-32 space-y-12">
            <div className="space-y-6">
              <span className="text-sage text-[10px] font-black uppercase tracking-[0.4em]">{lang === 'fr' ? 'La Recherche' : 'Research'}</span>
              <h2 className="text-4xl md:text-6xl font-serif text-gray-900 italic">
                {lang === 'fr' 
                  ? "Chaque formule est un équilibre parfait." 
                  : "Every formula is a perfect balance."}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="space-y-4">
                 <h4 className="text-lg font-bold tracking-tight text-gray-900">{lang === 'fr' ? 'Innovation Permanente' : 'Constant Innovation'}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">
                    {lang === 'fr'
                      ? "Nos ingénieurs travaillent quotidiennement sur l'amélioration des textures et des points de fusion pour garantir une épilation optimale."
                      : "Our engineers work daily on improving textures and melting points to ensure optimal hair removal."}
                 </p>
               </div>
               <div className="space-y-4">
                 <h4 className="text-lg font-bold tracking-tight text-gray-900">{lang === 'fr' ? 'Pureté Botanique' : 'Botanical Purity'}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">
                    {lang === 'fr'
                      ? "Nous sélectionnons les meilleures résines et cires d'abeille naturelles pour des produits respectueux de la peau."
                      : "We select the best resins and natural beeswax for skin-friendly products."}
                 </p>
               </div>
            </div>
        </div>
      </section>

      {/* Product Ranges - Banner */}
      <section className="relative h-[80vh] bg-black overflow-hidden group">
        <motion.div 
           initial={{ scale: 1.1 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           className="absolute inset-0"
        >
           <img 
             src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover opacity-60 grayscale" 
             alt="Expertise visual" 
           />
        </motion.div>
      </section>

      {/* Product Ranges - Text Banner */}
      <div className="bg-sage py-12 px-12 text-center text-white overflow-hidden relative">
         <div className="flex items-center justify-center space-x-12 animate-marquee-text whitespace-nowrap">
           {[...Array(10)].map((_, i) => (
             <span key={i} className="text-[10px] font-black uppercase tracking-[0.5em]">
               {lang === 'fr' ? 'Fabrication Française' : 'Made in France'} • Excellence • Expertise • Innovation • Qualité
             </span>
           ))}
         </div>
      </div>

      {/* Packaging Formats */}
      <section className="py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <div className="text-center mb-32 max-w-2xl">
             <span className="text-sage text-[10px] font-black uppercase tracking-[0.4em] block mb-4">Modularité</span>
             <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">{lang === 'fr' ? 'Nos formats de conditionnement' : 'Our packaging formats'}</h2>
             <div className="w-20 h-px bg-gray-200 mx-auto"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
              {activeContent.ranges.map((range, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-full aspect-square bg-gray-50 flex items-center justify-center mb-10 relative overflow-hidden">
                     <img 
                       src={range.img} 
                       alt={range.name} 
                       className="w-4/5 h-4/5 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                       referrerPolicy="no-referrer"
                     />
                  </div>
                  <h4 className="text-lg font-serif mb-4 text-gray-900 group-hover:text-sage transition-colors">{range.name}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-[200px] uppercase tracking-wider font-medium">{range.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-40 bg-gray-900 flex items-center justify-center text-center px-6">
         <div className="max-w-3xl">
           <span className="text-sage text-[10px] font-black uppercase tracking-[0.5em] block mb-8">Partenariat Professionnel</span>
           <h2 className="text-white text-4xl md:text-6xl font-serif italic mb-12">
             {lang === 'fr' ? 'Prêt à lancer votre propre marque ?' : 'Ready to launch your own brand?'}
           </h2>
           <a 
            href="/#contact" 
            className="inline-block bg-white text-gray-900 px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-sage hover:text-white transition-all duration-500"
           >
             {lang === 'fr' ? 'Nous Contacter' : 'Contact Us'}
           </a>
         </div>
      </section>

      <Footer t={t} lang={lang} />
    </div>
  );
}
