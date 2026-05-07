/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Translation {
  nav: {
    brands: string;
    expertise: string;
    lab: string;
    process: string;
    quality: string;
    partners: string;
    contact: string;
    quote: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    paragraph: string;
    cta: string;
    secondaryCta: string;
    badge: string;
    features: string[];
  };
  expertise: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  brands: {
    eyebrow: string;
    title: string;
    discover: string;
    brand1: { title: string; atmosphere: string };
    brand2: { title: string; atmosphere: string };
    brand3: { title: string; atmosphere: string };
  };
  lab: {
    title: string;
    features: {
      rd: { title: string; desc: string };
      prod: { title: string; desc: string };
      reg: { title: string; desc: string };
    };
  };
  process: {
    title: string;
    cards: {
      brief: string;
      sample: string;
      validation: string;
      production: string;
    };
  };
  quality: {
    title: string;
    stats: {
      founded: string;
      origin: string;
      rdFocus: string;
      market: string;
    };
  };
  partners: {
    title: string;
    trust: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
  popup: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    cgv: string;
    legal: string;
    privacy: string;
  };
}

export const translations: Record<'fr' | 'en', Translation> = {
  fr: {
    nav: {
      brands: "Nos marques",
      expertise: "Expertise",
      lab: "Laboratoire",
      process: "Processus",
      quality: "Qualité",
      partners: "Partenaires",
      contact: "Contact",
      quote: "Demander un devis",
    },
    hero: {
      eyebrow: "Laboratoire de cosmétologie moderne",
      badge: "Formulation B2B d'exception",
      title: "Le laboratoire pour donner vie à votre vision beauté.",
      paragraph: "LCM accompagne les marques, distributeurs et professionnels dans la formulation, la fabrication et le conditionnement de soins et produits cosmétiques.",
      cta: "Démarrer un projet",
      secondaryCta: "À PROPOS",
      features: [
        "Cire dépilatoire",
        "Soins visage & corps",
        "Fabrication française",
        "R&D sur-mesure",
        "Logistique premium"
      ]
    },
    expertise: {
      title: "LCM, créateur de beauté",
      subtitle: "Des produits de beauté innovants, naturels ou bio.",
      items: [
        { 
          title: "MADE IN FRANCE", 
          desc: "LCM est une entreprise familiale, forte d'une expérience de plus de 60 ans, nous assurons le développement, la fabrication et le conditionnement de produits cosmétiques, de cires à épiler, de cires naturelles et bio." 
        },
        { 
          title: "INNOVATION", 
          desc: "Notre laboratoire situé en Haute-vienne, profite d'un environnement naturel pour mettre son expérience et sa technologie au service des professionnels de la beauté. Produits techniques de haute qualité, la performance reste notre priorité." 
        },
        { 
          title: "PRODUITS DE MARQUE", 
          desc: "Nos clients sont des grands noms de l'industrie cosmétique présents dans le monde entier. C'est pourquoi LCM propose un accompagnement personnalisé aux sociétés qui souhaitent offrir une cosmétique de qualité, conforme aux réglementations." 
        },
        { 
          title: "NOS VALEURS", 
          desc: "Notre capacité à intégrer l'innovation technique tout en respectant un niveau de qualité en phase avec la demande de la clientèle, nous permet de créer des formules qui répondent à toutes les évolutions relatives au respect de l'environnement et de la santé." 
        }
      ]
    },
    brands: {
      eyebrow: "Trois univers, une expertise.",
      title: "Nos Marques",
      discover: "Découvrir",
      brand1: { title: "Arsène Valère", atmosphere: "Laboratoire de cosmétologique moderne" },
      brand2: { title: "Norma de Durville", atmosphere: "Fabricant de cires à épiler" },
      brand3: { title: "HYLU", atmosphere: "Concentré d'acide hyaluronique" },
    },
    lab: {
      title: "Le Laboratoire",
      features: {
        rd: { title: "Recherche & Développement", desc: "Innover pour demain." },
        prod: { title: "Fabrication & conditionnement", desc: "Modernité et rigueur." },
        reg: { title: "Accompagnement réglementaire", desc: "Expertise et conformité." },
      }
    },
    process: {
      title: "Processus",
      cards: {
        brief: "Cahier des charges",
        sample: "Formulation échantillon",
        validation: "Tests & Validation",
        production: "Production & Logistique",
      }
    },
    quality: {
      title: "L'Excellence",
      stats: {
        founded: "Depuis 1965",
        origin: "Made in France",
        rdFocus: "R&D Intégrée",
        market: "Expertise B2B",
      }
    },
    partners: {
      title: "Nos partenaires",
      trust: "Approuvé par des entreprises modernes dans de multiples secteurs",
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Discutons de votre prochain succès cosmétique.",
      address: "23 Rue Barthélémy Thimonnier – 87280 Limoges",
      name: "Nom complet",
      email: "Adresse email",
      message: "Votre projet",
      send: "Envoyer le message",
    },
    popup: {
      title: "Un projet ?",
      subtitle: "Recevez un accompagnement personnalisé. Expliquez-nous votre besoin : formulation, fabrication, conditionnement ou développement d’une gamme cosmétique.",
      cta: "Envoyer ma demande",
    },
    footer: {
      cgv: "Conditions générales de vente",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité / Charte informatique",
    }
  },
  en: {
    nav: {
      brands: "Our Brands",
      expertise: "Expertise",
      lab: "Laboratory",
      process: "Process",
      quality: "Quality",
      partners: "Partners",
      contact: "Contact",
      quote: "Get a quote",
    },
    hero: {
      eyebrow: "Modern cosmetology laboratory",
      badge: "Exceptional B2B Formulation",
      title: "The laboratory to bring your beauty vision to life.",
      paragraph: "LCM supports brands, distributors, and professionals in the formulation, manufacturing, and packaging of high-end skincare and beauty products.",
      cta: "Start a project",
      secondaryCta: "ABOUT US",
      features: [
        "Depilatory Wax",
        "Face & Body Care",
        "Made in France",
        "Bespoke R&D",
        "Premium Logistics"
      ]
    },
    expertise: {
      title: "LCM, Creator of Beauty",
      subtitle: "Innovative, natural or organic beauty products.",
      items: [
        { 
          title: "MADE IN FRANCE", 
          desc: "LCM is a family business with over 60 years of experience. We ensure the development, manufacturing, and packaging of cosmetic products, hair removal waxes, natural, and organic waxes." 
        },
        { 
          title: "INNOVATION", 
          desc: "Our laboratory in Haute-vienne benefits from a natural environment to put its experience and technology at the service of beauty professionals. High-quality technical products; performance remains our priority." 
        },
        { 
          title: "BRAND PRODUCTS", 
          desc: "Our clients are big names in the cosmetic industry worldwide. LCM provides personalized support to companies wishing to offer quality cosmetics compliant with regulations." 
        },
        { 
          title: "OUR VALUES", 
          desc: "Our ability to integrate technical innovation while maintaining a quality level in phase with customer demand allows us to create formulas responding to all environmental and health evolutions." 
        }
      ]
    },
    brands: {
      eyebrow: "Three universes, one expertise.",
      title: "Our Brands",
      discover: "Discover",
      brand1: { title: "Arsène Valère", atmosphere: "Modern cosmetology laboratory" },
      brand2: { title: "Norma de Durville", atmosphere: "Manufacturer of depilatory waxes" },
      brand3: { title: "HYLU", atmosphere: "Hyaluronic acid concentrate" },
    },
    lab: {
      title: "The Laboratory",
      features: {
        rd: { title: "R&D", desc: "Innovating for tomorrow." },
        prod: { title: "Production & Packaging", desc: "Modernity and precision." },
        reg: { title: "Regulatory Support", desc: "Expertise and compliance." },
      }
    },
    process: {
      title: "Process",
      cards: {
        brief: "Project Brief",
        sample: "Sample Formulation",
        validation: "Testing & Validation",
        production: "Production & Logistics",
      }
    },
    quality: {
      title: "Excellence",
      stats: {
        founded: "Since 1965",
        origin: "Made in France",
        rdFocus: "Integrated R&D",
        market: "B2B Expertise",
      }
    },
    partners: {
      title: "Our Partners",
      trust: "Trusted by modern businesses across multiple industries",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's discuss your next cosmetic success.",
      address: "23 Rue Barthélémy Thimonnier – 87280 Limoges",
      name: "Full Name",
      email: "Email Address",
      message: "Your project",
      send: "Send Message",
    },
    popup: {
      title: "Have a project?",
      subtitle: "Receive personalized support. Tell us about your needs: formulation, manufacturing, packaging, or development of a cosmetic range.",
      cta: "Send Request",
    },
    footer: {
      cgv: "General Terms and Conditions",
      legal: "Legal Notice",
      privacy: "Privacy Policy / IT Charter",
    }
  }
};
