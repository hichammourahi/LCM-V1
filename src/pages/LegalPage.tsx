import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { translations } from '../translations';
import { useState } from 'react';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  type?: 'cgv' | 'mentions' | 'privacy';
}

export default function LegalPage({ title, lastUpdated }: LegalPageProps) {
  const [lang] = useState<'fr' | 'en'>('fr');
  const t = translations[lang];

  return (
    <div className="bg-white min-h-screen">
       <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-8 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100">
          <Link to="/" className="flex flex-col items-start leading-none group">
            <div className="flex items-center">
              <div className="flex items-baseline">
                 <span className="text-2xl font-black tracking-tighter text-black">L</span>
                 <span className="mx-1.5 w-1.5 h-1.5 rounded-full bg-sage block"></span>
                 <span className="text-2xl font-black tracking-tighter text-black">C</span>
                 <span className="mx-1.5 w-1.5 h-1.5 rounded-full bg-sage block"></span>
                 <span className="text-2xl font-black tracking-tighter text-black">M</span>
              </div>
            </div>
          </Link>
          <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black">
             {lang === 'fr' ? 'Retour Accueil' : 'Home'}
          </Link>
       </nav>

       <main className="pt-48 pb-32 px-12">
          <div className="max-w-4xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="space-y-12"
             >
                <div>
                   <p className="text-sage text-[10px] font-black uppercase tracking-[0.4em] mb-4">Informations Légales</p>
                   <h1 className="text-5xl font-serif italic mb-2">{title}</h1>
                   <p className="text-xs text-gray-400 font-medium tracking-widest">DERNIÈRE MISE À JOUR : {lastUpdated}</p>
                </div>

                <div className="prose prose-sm prose-gray max-w-none space-y-12 text-gray-500 font-light leading-relaxed">
                   <section>
                      <h2 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-6">Introduction</h2>
                      <p>
                        Les présentes conditions régissent l'utilisation de ce site web. En accédant à ce site, vous acceptez ces conditions dans leur intégralité. 
                        Le Laboratoire LCM se réserve le droit de modifier ces termes à tout moment.
                      </p>
                   </section>

                   <section>
                      <h2 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-6">Propriété Intellectuelle</h2>
                      <p>
                        Sauf mention contraire, le Laboratoire LCM et/ou ses concédants de licence détiennent les droits de propriété intellectuelle pour tout le matériel sur ce site. 
                        Tous les droits de propriété intellectuelle sont réservés. Vous pouvez consulter et/ou imprimer des pages pour votre usage personnel, sous réserve de restrictions.
                      </p>
                   </section>

                   <section>
                      <h2 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-6">Limitation de Responsabilité</h2>
                      <p>
                        Les informations sur ce site sont fournies gratuitement, et vous reconnaissez qu'il serait déraisonnable de nous tenir responsables en ce qui concerne ce site et les informations qu'il contient. 
                        Bien que nous nous efforcions de veiller à ce que les informations soient correctes, nous ne garantissons pas leur exhaustivité ou leur exactitude.
                      </p>
                   </section>
                </div>
             </motion.div>
          </div>
       </main>

       <Footer t={t} lang={lang} />
    </div>
  );
}
