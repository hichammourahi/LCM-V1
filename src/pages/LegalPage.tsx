import { motion } from 'framer-motion';

export default function LegalPage({ title, lastUpdated }: { title: string, lastUpdated: string, type?: 'cgv' | 'mentions' }) {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{title}</h1>
          <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">Dernière mise à jour : {lastUpdated}</p>
        </motion.div>

        <div className="prose prose-gray max-w-none space-y-12">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Le Laboratoire LCM attache une importance particulière au respect de la vie privée et à la protection des données personnelles.
              Cette page détaille nos engagements en matière de transparence et de sécurité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">2. Informations légales</h2>
            <p className="text-gray-600 leading-relaxed">
              Le site est édité par LCM Cosmétiques, SARL au capital de ... euros, dont le siège social est situé à Limoges.
              Directeur de la publication : ...
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6">3. Propriété intellectuelle</h2>
            <p className="text-gray-600 leading-relaxed">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
              Tous les droits de reproduction sont réservés.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
