/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { translations } from '../translations';
import Footer from '../components/Footer';

export default function LegalPage({ title, lastUpdated, type = 'default' }: { title: string, lastUpdated: string, type?: 'cgv' | 'mentions' | 'privacy' | 'default' }) {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderContent = () => {
    if (type === 'cgv') {
      return (
        <div className="prose prose-sm prose-sage max-w-none text-gray-600 space-y-8 font-sans leading-relaxed">
          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 1 – Application</h2>
            <p>
              Les présentes conditions générales de vente s’appliquent à toutes les ventes de produits et prestations de services par la société L.C.M., sous ses marques commerciales L.C.M., Norma de Durville et Arsène Valère, et tout autre produit fabriqué par nos soins sous marque propre, sauf accord spécifique préalable à la commande convenu par écrit entre les parties. Elles s’appliquent également à toute future relation d’affaires sans être explicitement mentionnée. En conséquence, toute commande passée auprès de la société L.C.M. implique l’acceptation de nos conditions générales de vente ci-dessous ainsi que de nos conditions particulières de vente. Aucun Accusé de Réception de Commande ne pourra emporter renonciation à aucune des clauses ci-dessous.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 2 – Commandes</h2>
            <p>
              Toute commande est réputée définitive après avoir été acceptée et confirmée par écrit par notre société.
            </p>
            <p>
              Aucune annulation ou modification de commande ne sera possible sauf acceptation de notre part. En tous les cas, l’acquéreur s’engage à prendre livraison de l’intégralité des quantités produites avant modification ou annulation de la commande.
            </p>
            <p>
              La livraison des produits comprend naturellement une variance de +/- 5% du total commandé, en raison des contraintes de production, sans qu’il puisse y avoir de conséquence dommageable pour L.C.M. ou son client : les produits sont payés au nombre d’unités reçues dans un sens comme dans l’autre (+/-).
            </p>
            <p>
              Les différences situées dans cette tolérance constatées lors de la livraison ne peuvent entraîner un refus final de la livraison et du paiement des quantités fabriquées.
            </p>
            <p>
              Si le client le souhaite, et après acceptation du vendeur, L.C.M. pourra livrer un reliquat (sans supplément de port pour l’Acheteur en France Métropolitaine).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 3 – Prix</h2>
            <p>
              Les prix indiqués sur nos accusés de réception de commande ou proforma ou offer de prix ont une durée de validité de 3 mois à compter de la date d’émission des pièces, sauf mentions contraires.
            </p>
            <p>
              Il est à noter que le minimum de commande pour bénéficier des tarifs est fixé selon votre catégorie :
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Pour les « Grossistes » :</strong> 1000 € HT par mois, avec un minimum de commande de 500€.</li>
              <li><strong>Pour les « Instituts » :</strong> 150 € HT par commande et par mois.</li>
              <li><strong>Pour les « Esthéticienne à domicile » ou « auto-entrepreneurs » :</strong> (sur justificatif de l’enregistrement sur Net Entreprise) 80€ HT par commande.</li>
            </ul>
            <p className="mt-4">
              Des frais de gestion administratifs seront appliqués pour tout commande inférieure aux montants sus mentionnés.
            </p>
            <p>
              Nos prix sont indiqués hors taxes (HT), TVA à 20% en sus. Le barème des prix unitaires est disponible dans les documents commerciaux qui vous sont transmis : catalogues, grilles tarifaires, devis, bons de commandes…
            </p>
            <p>
              Les conditions éventuelles d’escompte sont fixées exclusivement par L.C.M.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 4 – Livraison – Transport – Transfert des risques</h2>
            <p>
              Nos délais de fabrication ne sont donnés qu’à titre indicatif et ne sauraient donner droit à l’acquéreur d’annuler la vente, de refuser la marchandise livrée ou de réclamer des dommages et intérêts.
            </p>
            <p>
              Dans la mesure des stocks disponibles, le délai de livraison minimum est de 5 jours ouvrables France Métropolitaine. Ce délai est donné à titre indicatif.
            </p>
            <p>
              Le transfert des risques s’effectue dès la mise à disposition des produits à l’acquéreur or dès la délivrance à un expéditeur/transporteur chargé de la livraison. Toutefois, pour les commandes qui se réfèrent aux Incoterms, le transfert de risque s’effectue selon les Incoterms en vigueur.
            </p>
            <p>
              Il appartient à l’acquéreur de procéder à la vérification de ses marchandises en présence du livreur et d’émettre des réserves précises si nécessaire. La mention « sous réserve de déballage » ne constitue pas une réserve caractérisée et n’a AUCUNE VALEUR JURIDIQUE. Il est alors indispensable de décrire précisément l’état de l’emballage et/ou du produit, et de caractériser précisément les dommages.
            </p>
            <p>
              En cas de réclamation l’acquéreur doit impérativement adresser un courrier recommandé avec accusé de réception au transporteur sous 48 heures. Il devra également, dans les 48h ouvrées, le signaler par e-mail à contact@normadedurville.com ou par courrier recommandé avec accusé de réception à l’adresse postale suivante : L.C.M. BP 1537, 87021 LIMOGES CEDEX 09.
            </p>
            <p>
              Passé ce délai et/ou sans réserves émises sur le bordereau de transporteur, la livraison ne pourra faire l’objet d’aucune contestation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 5 – Paiement</h2>
            <p>
              Le règlement des factures s’effectue à réception, sauf accord préalable par L.C.M au moment de la validation expresse de la commande d’un mode de règlement particulier, et ce dans la limite des délais impartis par les règles générales de l’article L441-10 du code de commerce.
            </p>
            <p>
              Nous vous rappelons qu’en cas de paiement par lettre de change préalablement acceptée, le retour de ce document doit se faire sous 48 heures, comme l’exige les articles L110-1 à L960-4 Code du Commerce.
            </p>
            <p>
              Dans le cas de clients n’ayant pas d’antériorité commerciale ou ayant eu des incidents de paiement sur des commandes précédentes, notre société se réserve le droit d’exiger un paiement à la commande. Toute société faisant l’objet d’une procédure de redressement judiciaire, un paiement à la commande sera exigé.
            </p>
            <p>
              En cas de non-paiement à la date d’exigibilité (date de règlement figurant sur la facture), seront dus, à titre de dommages et intérêts, une somme égale à 10% du montant total de la facture, outre les intérêts de retard de 3 fois le taux d’intérêt légal, consultable sur le site https://www.legifrance.gouv.fr, avec un minimum de 3,5 % ainsi que les éventuels frais de recouvrement judiciaires et/ou amiables, y compris pour les professionnels l’indemnité forfaitaire pour frais de recouvrement prévue par la loi n° 2012-387 du 22 mars 2012 et fixée par décret d’application n° 2012-1115 du 2 octobre 2012 à 40 €, article D 441-5 du Code de Commerce.
            </p>
            <p>
              De plus, en cas de non-paiement, nous nous réservons le droit d’exiger un paiement de toutes les factures dues, même si ces dernières ne sont pas à échéances.
            </p>
            <p>
              Nous vous rappelons également que toute intervention de notre service contentieux est à la charge du débiteur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 6 – Réserve de propriété</h2>
            <p>
              Tous les produits et accessoires restent la propriété de L.C.M. jusqu’au règlement de la dernière échéance du prix convenu. Toute clause contraire inscrite dans des Conditions Générales d’Achat est réputée non écrite. Cependant, tous les risques inhérents aux produits sont à la charge de l’acquéreur dès le transfert de ces risques prévu à l’article 5. L’acheteur s’engage donc à souscrire un contrat d’assurances garantissant les risques de perte, destruction ou vol des produits livrés.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 7 – Responsabilité</h2>
            <p>
              En cas de défaut de fabrication reconnu par les deux parties, notre responsabilité se limite au remplacement de nos produits défectueux.
            </p>
            <p>
              Notre responsabilité ne saurait être engagée en cas de mésusage des produits.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 8 – Clause exonératoire de responsabilité</h2>
            <p>
              Les obligations de notre société seront suspendues de plein droit et sans formalité, et notre responsabilité dégagée, au cas d’évènements tels que : incendie, arrêt de travail quelconque, lock-out, inondation, épidémie, guerre, réquisition, émeute, gel, manque de matière première, accident d’outillage, manque de combustible ou d’énergie électrique, interruption ou retard dans le transport, impossibilité ou difficulté d’importation ou d’exportation, impossibilité du fait de règlementations ou décisions administratives, mise hors service temporaire de machine ou d’outillage nécessaire à l’exécution des commandes survenant dans nos locaux, ceux de nos fournisseurs ou sous-traitants, défaillance grave de nos fournisseurs, risque politique, catastrophique et de non transfert, ainsi que toute circonstance intervenant postérieurement à la conclusion du contrat et empêchant l’exécution dans des conditions normales par notre société.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 9 – Propriété intellectuelle – Droit d’auteur</h2>
            <p>
              Par ailleurs L.C.M. ne cède jamais, par quelque moyen que ce soit, aucun des droits de la Propriété Intellectuelle attachés aux produits qu’elle commercialise. Toutes les formules des produits fabriqués par L.C.M, pour son compte ou pour ses sous-traitants en marque propre, sont la propriété exclusive de L.C.M et sont à ce titre protégés par le code de la propriété intellectuelle et le droit d’auteur, les règles applicables en la matière sont énoncées dans les articles L111-1 à L811-6 du code de la Propriété Intellectuelle. Toute clause contraire inscrite dans des Conditions Générales d’Achat serait non seulement considérée comme nulle et non avenue mais encore comme préjudiciable et donc déclenchant le versement de dommages et intérêts.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 10 – Respect de la vie privée</h2>
            <p>
              Conformément à la loi relative à l’informatique, aux fichiers et aux libertés du 6 janvier 1978, les informations à caractère nominatif relatives aux acheteurs pourront faire l’objet d’un traitement automatisé.
            </p>
            <p>
              Les informations transmises par le client sont à l’usage exclusif de L.C.M.
            </p>
            <p>
              L.CM. s’engage à ne pas transmettre à des tiers les informations personnelles que les internautes fournissent sur son site. Celles-ci sont confidentielles. De plus, Le client dispose (article 34 de la loi du 6 janvier 1978) d’un droit d’accès, de modification, de rectification et de suppression des données qui le concernent, qu’il peut exercer auprès de L.C.M., RCS Limoges 305 709 438, sise 23 rue Barthélémy Thimonnier, BP 1537, 87021 LIMOGES CEDEX 09 ou par courriel à internet@lcm-cosmetique.com.
            </p>
            <p>
              En application de la loi no.78-17 du 6 janvier 1978 modifiée, relative à l’informatique, aux fichiers et aux libertés, le site de L.C.M a fait l’objet d’une déclaration auprès de la Commission Nationale de l’Informatique et des Libertés sous les numéros : 998531 v 0, 1998532 v 0 et 1998533 v 0 du 13/10/2016.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 11 – Litiges</h2>
            <p>
              Toute question relative aux présentes conditions générales de vente ainsi qu’aux ventes qu’elles régissent, qui ne serait pas traitée par les présentes stipulations contractuelles, sera régie par la loi française, à l’exclusion de tout autre droit et de toute règle de conflit de loi. Pour toute contestation relative à l’exécution du contrat de vente ou au paiement du prix, ainsi qu’en cas de divergence d’interprétation des clauses et conditions ci-dessus, le Tribunal de Commerce de Limoges sera seul compétent. L.C.M. se réserve toutefois le droit d’assigner le commettant devant tout autre tribunal compétent au regard des règles de procédure civile française.
            </p>
            <p>
              La nullité d’une clause des présentes conditions générales ou une réglementation dans le cadre d’un autre accord, n’entache pas la validité de l’ensemble des présentes conditions générales.
            </p>
            <p>
              Les lois applicables sont les lois françaises, communautaires et européennes.
            </p>
            <p>
              En cas de litige, seul le Tribunal de Commerce de Limoges est compétent, de même que toutes juridictions compétentes de droit dans le ressort territorial du siège social de L.C.M.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 12 – Langue</h2>
            <p>
              La seule version officielle de ces conditions générales de vente, ainsi que toutes les communications relatives au bon de commande, seront en langue française.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">Article 13 – Modification des CGV</h2>
            <p>
              La modification des CGV peut être effectuée par le vendeur librement et à tout moment, dans le respect des dispositions légales.
            </p>
          </section>

          <section className="bg-[#F8F9FA] p-8 border-l-4 border-sage mt-16">
            <h3 className="text-xl font-serif text-gray-900 mb-6 tracking-tight">Annexe 1 – Garanties légales pour ventes aux particuliers</h3>
            <p className="text-sm italic mb-4">(Sont exclus les professionnels)</p>
            <p>L.C.M ARSENE VALERE vous garantit que tous les produits sont produits en France.</p>
            <p className="mt-4">
              Dans tous les cas, L.C.M ARSENE VALERE ne pourra être tenu pour responsable pour non-respect des dispositions réglementaires et législatives en vigueur dans le pays de réception. La responsabilité de L.C.M ARSENE VALERE est systématiquement limitée à la valeur du produit mis en cause, valeur à sa date de vente.
            </p>
            <p className="mt-4">
              Le client bénéficie de la garantie légale de conformité (articles 217-3 à L217-20 du Code de la Consommation) et de la garantie des vices cachés (articles 1641 à L1649 du Code Civil).
            </p>
            <p className="mt-4">
              L’action résultant du défaut de conformité se prescrit par deux ans à compter de la délivrance du bien. L’acheteur peut choisir entre la réparation ou le remplacement du bien, sous réserve des conditions de coût (articles L217-9 du code de la consommation).
            </p>
            <p className="mt-4">
              La garantie légale de conformité s’applique indépendamment de toute garantie commerciale éventuellement consentie.
            </p>
            <p className="mt-4">
              En cas de mise en œuvre de l’art. 1641 du Code Civil, le consommateur peut choisir entre la résolution de la vente ou une réduction du prix de vente conformément à l’art. 1644 du Code Civil.
            </p>
          </section>

          <footer className="pt-12 border-t border-gray-100 italic text-sm text-gray-500">
            <p>Annexe 2 – Information complémentaire : IDENTIFIANT UNIQUE DE LA REP (Responsabilité élargie du producteur) EMBALLAGES MENAGERS : FR213230_01OTTB</p>
            <p className="mt-4 text-[11px] uppercase font-bold tracking-widest text-gray-900">
              Dernière mise à jour en date du 24/10/2023 par Monsieur J. MOREAU en sa qualité de Président.
            </p>
          </footer>
        </div>
      );
    }

    if (type === 'mentions') {
      return (
        <div className="prose prose-sm prose-sage max-w-none text-gray-600 space-y-12 font-sans leading-relaxed">
          <section>
            <h2 className="text-xl font-serif text-gray-900 mb-6 tracking-tight">ÉDITEUR</h2>
            <p>
              Ce site Internet est la propriété de <strong>L.C.M. (Laboratoire de Cosmétologie Moderne)</strong>.
            </p>
            <p className="mt-4">
              <strong>Siège social :</strong><br />
              23 Rue Barthélémy Thimonnier<br />
              87280 Limoges, France.
            </p>
            <p className="mt-4">
              <strong>Identification :</strong><br />
              RCS Limoges 305 709 438.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-gray-900 mb-6 tracking-tight">DIRECTEUR DE LA PUBLICATION</h2>
            <p>
              <strong>Monsieur J. MOREAU</strong>, en sa qualité de Président.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-gray-900 mb-6 tracking-tight">HÉBERGEUR</h2>
            <p>
              Ce site est hébergé par la société <strong>OVH</strong>.<br />
              2 rue Kellermann<br />
              59100 Roubaix, France.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-gray-900 mb-6 tracking-tight">PROPRIÉTÉ INTELLECTUELLE</h2>
            <p>
              La structure générale ainsi que les textes, images animées ou non, son savoir-faire et tous les autres éléments composant le site sont la propriété exclusive de L.C.M.
            </p>
            <p className="mt-4">
              Toute représentation totale ou partielle de ce site par quelque personne que ce soit, sans l'accord préalable de L.C.M., est interdite et constituerait une contrefaçon sanctionnée par les articles L. 335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="bg-[#F8F9FA] p-8 border-l-4 border-sage">
            <h2 className="text-xl font-serif text-gray-900 mb-6 tracking-tight">DONNÉES PERSONNELLES</h2>
            <p>
              Les informations recueillies via le formulaire de contact sont destinées exclusivement au traitement de votre demande par nos services. Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant et les faire rectifier en contactant : internet@lcm-cosmetique.com.
            </p>
          </section>

          <footer className="pt-12 border-t border-gray-100 italic text-xs text-gray-400">
            <p>Le Laboratoire de Cosmétologie Moderne vous remercie de votre visite.</p>
          </footer>
        </div>
      );
    }

    return (
      <div className="prose prose-sm prose-sage max-w-none text-gray-600 space-y-8 font-sans leading-relaxed">
        <section>
          <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">1. Préambule</h2>
          <p>
            Bienvenue sur le portail professionnel du Laboratoire de Cosmétologie Moderne (LCM). Les présentes conditions régissent l'accès et l'utilisation de nos services de formulation, de fabrication et de conditionnement de produits cosmétiques.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">2. Objet des services</h2>
          <p>
            LCM propose une expertise complète pour le développement de gammes cosmétiques sur mesure. Nos prestations incluent la Recherche & Développement, la mise en conformité réglementaire, la production industrielle et le conditionnement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">3. Commande et Validation</h2>
          <p>
            Toute demande de projet fait l'objet d'un devis détaillé. La validation finale intervient après accord sur les échantillons prototypes (BAT) et signature du contrat cadre de fabrication.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">4. Propriété Intellectuelle</h2>
          <p>
            Sauf stipulation contraire, les formules développées par LCM restent la propriété intellectuelle du laboratoire jusqu'au transfert total des droits d'exploitation tel que défini dans les conditions particulières.
          </p>
        </section>

        <section className="bg-sage-light p-8 border-l-2 border-sage">
          <h2 className="text-lg font-serif text-gray-900 mb-4 tracking-tight">5. Engagement Qualité</h2>
          <p className="italic">
            "Conformément aux normes ISO 22716, nous garantissons une traçabilité totale et une sécurité microbiologique irréprochable pour l'ensemble de vos productions."
          </p>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mini Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center text-sage hover:text-gray-900 transition-colors">
            <ChevronLeft size={20} className="mr-1" />
            <span className="text-sm font-bold tracking-tight">Retour à l'accueil</span>
          </Link>
          <div className="flex items-center space-x-2">
             <span className="text-[10px] font-black tracking-tighter text-gray-900">L</span>
             <span className="w-1 h-1 rounded-full bg-sage block"></span>
             <span className="text-[10px] font-black tracking-tighter text-gray-900">C</span>
             <span className="w-1 h-1 rounded-full bg-sage block"></span>
             <span className="text-[10px] font-black tracking-tighter text-gray-900">M</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-sage mb-4">Documentation Juridique</p>
            <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 lowercase tracking-tight">
              {title}
            </h1>
            <div className="flex items-center space-x-4 mb-12 py-6 border-y border-gray-50">
              <span className="text-[11px] text-gray-400">Dernière mise à jour : {lastUpdated}</span>
              <div className="w-1 h-1 rounded-full bg-gray-200" />
              <span className="text-[11px] text-gray-400">Laboratoire de Cosmétologie Moderne</span>
            </div>

            {renderContent()}
          </motion.div>
        </article>
      </main>

      <Footer t={translations[lang]} lang={lang} />
    </div>
  );
}
