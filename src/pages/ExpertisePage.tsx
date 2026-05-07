/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronLeft, ArrowUpRight, FlaskConical, Factory, ShieldCheck, Microscope, Package, History, Waves, Circle, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { translations } from '../translations';
import Footer from '../components/Footer';
import labResearchImage from '../assets/images/regenerated_image_177816135574811.jpg';
import expertiseHeroImage from '../assets/images/regenerated_image_1778173155928.png';
import pkg1 from '../assets/images/regenerated_image_1778171627486.jpg';
import pkg2 from '../assets/images/regenerated_image_1778171628206.jpg';
import pkg3 from '../assets/images/regenerated_image_1778171628558.jpg';
import pkg4 from '../assets/images/regenerated_image_1778171629190.jpg';
import por3 from '../assets/images/por3.jpg';
import por4 from '../assets/images/por4.jpg';

export default function ExpertisePage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    fr: {
      hero: {
        tag: "DEPUIS 1965",
        title: "LCM, Fabricant de cosmétique et cire à épiler",
        desc: "Le Laboratoire de Cosmétologie Moderne (L.C.M.) est une entreprise familiale qui a été créée en 1965, à Limoges en France. L'entreprise, qui emploie environ 40 personnes, est spécialisée dans la fabrication de cires à épiler, dépilatoires et produits cosmétiques (soins visage et corps)."
      },
      stats: [
        { label: "Capacité Journalière", value: "18 Tonnes" },
        { label: "Expertise R&D", value: "Innovation" },
        { label: "Atelier Interne", value: "Sérigraphie" }
      ],
      offers: {
        propose: {
          title: "Nous proposons",
          desc: "Une gamme de produits professionnels pour les grossistes et les distributeurs."
        },
        create: {
          title: "Nous créons",
          desc: "Des produits sur mesure et personnalisables en quantité minimum."
        }
      },
      waxTypes: [
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
          desc: "S'utilise sans bande. La cire à épiler traditionnelle recyclable est une valeur sûre car aucun poil ne lui résiste.",
          img: por3
        },
        {
          title: "Cire pelable",
          desc: "Une cire sans bande colorée aux qualités exceptionnelles qui permet de réaliser des bandes très fines. Existe en bio.",
          img: expertiseHeroImage
        }
      ],
      ranges: [
        { title: "Visage & Corps", desc: "Plusieurs gammes de produits de beauté pour le visage et le corps." },
        { title: "Pré & Post Épilation", desc: "Une gamme complète de produits : lotion, huile..." },
        { title: "Soins Cabines", desc: "Gommage, huile de modelage et masque." },
        { title: "Produits d'entretien", desc: "Solvant cire et solution nettoyante pour matériel." }
      ],
      packaging: {
        title: "Nombreux conditionnements :",
        items: [
          { 
            name: "Pots", 
            desc: "Adaptés aux chauffe-cires professionnels. Cire pelable en pot de 800g.",
            img: pkg1
          },
          { 
            name: "Micro-ondable", 
            desc: "Des formules sur mesure pour des cires à épiler micro-ondables. Fabricant cire micro-ondable.",
            img: pkg2
          },
          { 
            name: "Pastilles", 
            desc: "La cire à épiler en pastilles, conditionnée en boîte ou en sachet.",
            img: pkg3
          },
          { 
            name: "Cartouches", 
            desc: "Spécialement conçus pour les chauffe-cires roll-on.",
            img: pkg4
          }
        ]
      },
      back: "Retour à l'accueil"
    },
    en: {
      hero: {
        tag: "SINCE 1965",
        title: "LCM, Cosmetic and Hair Removal Wax Manufacturer",
        desc: "Laboratoire de Cosmétologie Moderne (L.C.M.) is a family business created in 1965 in Limoges, France. The company, employing about 40 people, specializes in manufacturing hair removal waxes, depilatories, and cosmetic products (face and body care)."
      },
      stats: [
        { label: "Daily Capacity", value: "18 Tons" },
        { label: "R&D Expertise", value: "Innovation" },
        { label: "In-house Studio", value: "Screen Printing" }
      ],
      offers: {
        propose: {
          title: "We propose",
          desc: "A range of professional products for wholesalers and distributors."
        },
        create: {
          title: "We create",
          desc: "Customized and personalisable products in minimum quantities."
        }
      },
      waxTypes: [
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
          desc: "Used without strips. Traditional recyclable hair removal wax is a safe bet because no hair can resist it.",
          img: por3
        },
        {
          title: "Strip-less wax",
          desc: "A colored strip-less wax with exceptional qualities that allows for very thin strips. Available in organic.",
          img: expertiseHeroImage
        }
      ],
      ranges: [
        { title: "Face & Body", desc: "Several ranges of beauty products for face and body care." },
        { title: "Pre & Post Epilation", desc: "A complete range: lotion, oil..." },
        { title: "Cabin Care", desc: "Scrub, massage oil, and mask." },
        { title: "Maintenance", desc: "Wax solvent and cleaning solution for equipment." }
      ],
      packaging: {
        title: "Diverse Packaging:",
        items: [
          { 
            name: "Jars", 
            desc: "Adapted for professional wax heaters. Peelable wax in 800g jar.",
            img: pkg1
          },
          { 
            name: "Microwavable", 
            desc: "Custom formulas for microwavable waxes. Microwavable wax manufacturer.",
            img: pkg2
          },
          { 
            name: "Pellets", 
            desc: "Packaged in boxes or bags.",
            img: pkg3
          },
          { 
            name: "Cartridges", 
            desc: "Specially designed for roll-on heaters.",
            img: pkg4
          }
        ]
      },
      back: "Back to home"
    }
  };

  const active = content[lang];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] 
      } 
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-sage/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center text-sage hover:text-black transition-colors group">
            <ChevronLeft size={20} className="mr-1 transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">{active.back}</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')}
              className="text-[10px] font-black tracking-widest uppercase text-gray-400 hover:text-sage transition-colors"
            >
              {lang === 'fr' ? 'English' : 'Français'}
            </button>
            <div className="flex items-center space-x-1.5 cursor-pointer">
               <span className="text-lg font-black tracking-tighter">L</span>
               <span className="w-1 h-1 rounded-full bg-sage"></span>
               <span className="text-lg font-black tracking-tighter">C</span>
               <span className="w-1 h-1 rounded-full bg-sage"></span>
               <span className="text-lg font-black tracking-tighter">M</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-40 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 lg:items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:w-3/5"
            >
              <p className="text-sage text-[10px] font-black uppercase tracking-[0.5em] mb-8">{active.hero.tag}</p>
              <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight mb-10 italic font-medium">
                {active.hero.title}
              </h1>
              <p className="text-gray-500 font-light leading-relaxed text-lg max-w-2xl">
                {active.hero.desc}
              </p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 border-t border-gray-100 pt-16"
              >
                {active.stats.map((stat, i) => (
                  <motion.div key={i} variants={itemVariants} className="space-y-2">
                    <p className="text-3xl font-serif text-gray-900">{stat.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="lg:w-2/5 aspect-[4/5] bg-gray-50 relative overflow-hidden flex items-center justify-center"
            >
               <img 
                 src={expertiseHeroImage} 
                 alt="Laboratoire LCM" 
                 className="w-full h-full object-cover grayscale brightness-95 transform hover:scale-110 transition-transform duration-[3000ms]"
               />
               <div className="absolute inset-0 bg-sage/5 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Offers Section */}
      <section className="py-32 px-6 border-y border-gray-50 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block px-4 py-1 border border-sage/20 rounded-full">
              <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-sage">{active.offers.propose.title}</h2>
            </div>
            <p className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight italic font-light">{active.offers.propose.desc}</p>
          </motion.div>
          <div className="w-px h-24 bg-gray-200 hidden md:block" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <div className="inline-block px-4 py-1 border border-sage/20 rounded-full">
              <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-sage">{active.offers.create.title}</h2>
            </div>
            <p className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight italic font-light">{active.offers.create.desc}</p>
          </motion.div>
        </div>
      </section>

      {/* Wax Types Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {active.waxTypes.map((wax, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="group relative aspect-[3/4] md:aspect-[2/3] lg:aspect-[3/4] xl:aspect-[4/5] overflow-hidden bg-gray-900"
              >
                {/* Background Image */}
                <img 
                  src={wax.img} 
                  alt={wax.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-[1.5s] ease-out" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    className="space-y-6"
                  >
                    <p className="text-white/70 text-[11px] leading-relaxed font-light line-clamp-3 transform group-hover:-translate-y-2 transition-transform duration-700">
                      {wax.desc}
                    </p>
                    
                    <div className="flex items-end justify-between border-t border-white/20 pt-6">
                      <h3 className="text-white text-3xl md:text-2xl xl:text-3xl font-black uppercase tracking-tight leading-none group-hover:text-sage transition-colors duration-500">
                        {wax.title}
                      </h3>
                      <div className="bg-white/10 p-2 rounded-full transform rotate-0 group-hover:rotate-45 group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual Break / Storytelling Reveal */}
      <section className="relative h-[80vh] overflow-hidden group">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
           <img 
             src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000"
             alt="Expertise visual" 
           />
        </motion.div>
      </section>

      {/* Product Ranges - Text Banner */}
      <section className="py-32 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16"
          >
            {active.ranges.map((range, i) => (
              <motion.div key={i} variants={itemVariants} className="space-y-6">
                <div className="w-8 h-[1px] bg-sage/50" />
                <h4 className="text-xl font-serif italic mb-4">{range.title}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">{range.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Conditionnements */}
      <section className="py-40 px-6 bg-white overflow-hidden border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          
          {/* Left: Scattered Images Collage */}
          <div className="lg:w-1/2 relative h-[500px] md:h-[600px] w-full hidden md:flex items-center justify-center">
             {active.packaging.items.map((item, i) => {
               // Artistic scattered positioning
               const styles = [
                 { top: '5%', left: '15%', rotate: '-12deg', zIndex: 10, scale: 0.9 },
                 { top: '15%', right: '10%', rotate: '8deg', zIndex: 20, scale: 1 },
                 { bottom: '15%', left: '5%', rotate: '-5deg', zIndex: 15, scale: 0.95 },
                 { bottom: '5%', right: '15%', rotate: '12deg', zIndex: 25, scale: 1.05 }
               ];
               
               return (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, scale: 0.5, y: 50 }}
                   whileInView={{ 
                     opacity: 1, 
                     scale: styles[i].scale, 
                     y: 0,
                     rotate: styles[i].rotate 
                   }}
                   viewport={{ once: true }}
                   transition={{ 
                     delay: i * 0.15, 
                     duration: 1.2, 
                     ease: [0.23, 1, 0.32, 1] 
                   }}
                   style={{ 
                     position: 'absolute',
                     top: styles[i].top,
                     left: styles[i].left,
                     right: styles[i].right,
                     bottom: styles[i].bottom,
                     zIndex: styles[i].zIndex
                   }}
                   className="w-48 h-64 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.08)] group overflow-hidden"
                 >
                   <img 
                     src={item.img} 
                     alt={item.name} 
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                   />
                 </motion.div>
               );
             })}
          </div>

          {/* Right: Clean List with Lines */}
          <div className="lg:w-1/2 w-full lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif italic mb-16 tracking-tight lowercase">
                {active.packaging.title}
              </h2>

              <div className="flex flex-col">
                {active.packaging.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    className="group"
                  >
                    <div className="flex items-center gap-10 py-10 border-t border-gray-100 last:border-b transition-colors duration-500 hover:bg-sage/5 px-2">
                      <div className="text-sage opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        {i === 0 && <Package size={22} strokeWidth={1} />}
                        {i === 1 && <Waves size={22} strokeWidth={1} />}
                        {i === 2 && <Circle size={18} strokeWidth={1} />}
                        {i === 3 && <Layers size={22} strokeWidth={1} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-light italic mb-2 text-gray-900 group-hover:text-sage transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm lowercase">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer t={translations[lang]} lang={lang} />
    </div>
  );
}

