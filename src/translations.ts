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
    title: string;
    paragraph: string;
    cta: string;
    secondaryCta: string;
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
    name: string;
    email: string;
    message: string;
    send: string;
    address: string;
  };
  popup: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    description: string;
    expertise: string;
    legal: string;
    rights: string;
    contact: string;
  };
}

export const translations: Record<'fr' | 'en', Translation> = {
  fr: {
    nav: {
      brands: "Nos Marques",
      expertise: "Expertise",
      lab: "Laboratoire",
      process: "Processus",
      quality: "Qualité",
      partners: "Partenaires",
      contact: "Contact",
      quote: "Devis Gratuit",
    },
    hero: {
      title: "L'Excellence Cosmétique Française",
      paragraph: "Depuis 1965, nous concevons et fabriquons des produits de soins et d'épilation haut de gamme pour les professionnels du monde entier.",
      cta: "Découvrir nos marques",
      secondaryCta: "Notre expertise",
      features: ["Fabrication Française", "R&D Innovante", "Qualité Certifiée", "Sur-Mesure"],
    },
    expertise: {
      title: "Notre Savoir-Faire",
      subtitle: "Un accompagnement complet de l'idée au produit fini.",
      items: [
        { title: "Made in France", desc: "Tous nos produits sont conçus et fabriqués dans notre laboratoire à Limoges." },
        { title: "R&D Interne", desc: "Une équipe dédiée à l'innovation botanique et cosmétologique." },
        { title: "N°1 Cires", desc: "Leader dans la fabrication de cires à épiler professionnelles." },
        { title: "Eco-Responsable", desc: "Des formulations respectueuses de la peau et de l'environnement." },
      ],
    },
    brands: {
      eyebrow: "L'Univers LCM",
      title: "Nos Marques",
      discover: "Découvrir",
      brand1: { title: "Arsène Valère", atmosphere: "Laboratoire de cosmétologique moderne" },
      brand2: { title: "Norma de Durville", atmosphere: "Fabricant de cires à épiler" },
      brand3: { title: "HYLU", atmosphere: "Concentré d'acide hyaluronique" },
    },
    lab: {
      title: "Le Laboratoire",
      features: {
        rd: { title: "Recherche & Développement", desc: "Formulation sur mesure et amélioration constante de nos actifs." },
        prod: { title: "Production", desc: "Capacité industrielle flexible pour petites et grandes séries." },
        reg: { title: "Réglementation", desc: "Conformité totale aux normes cosmétiques internationales (DIP)." },
      },
    },
    process: {
      title: "Votre Projet en 4 Étapes",
      cards: {
        brief: "Cahier des charges",
        sample: "Échantillonnage",
        validation: "Validation tests",
        production: "Mise en production",
      },
    },
    quality: {
      title: "L'Exigence au Cœur du Métier",
      stats: {
        founded: "Date de création",
        origin: "Origine Garantie",
        rdFocus: "Focus Innovation",
        market: "Secteur",
      },
    },
    partners: {
      title: "Ils nous font confiance",
      trust: "Nos partenaires sportifs & institutionnels",
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Parlons de votre futur projet cosmétique.",
      name: "Nom complet",
      email: "Email professionnel",
      message: "Votre message",
      send: "Envoyer le message",
      address: "Limoges, France",
    },
    popup: {
      title: "Besoin de conseils ?",
      subtitle: "Nos experts vous accompagnent dans la création de votre gamme cosmétique.",
      cta: "Discuter avec nous",
    },
    footer: {
      description: "Expert en cosmétologie moderne et fabrication de cires professionnelles depuis 1965.",
      expertise: "Expertise",
      legal: "Légal",
      rights: "Tous droits réservés.",
      contact: "Contact",
    },
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
      quote: "Free Quote",
    },
    hero: {
      title: "French Cosmetic Excellence",
      paragraph: "Since 1965, we have been designing and manufacturing high-end skincare and hair removal products for professionals worldwide.",
      cta: "Discover our brands",
      secondaryCta: "Our expertise",
      features: ["Made in France", "Innovative R&D", "Certified Quality", "Custom-Made"],
    },
    expertise: {
      title: "Our Expertise",
      subtitle: "Complete support from idea to finished product.",
      items: [
        { title: "Made in France", desc: "All our products are designed and manufactured in our laboratory in Limoges." },
        { title: "Internal R&D", desc: "A team dedicated to botanical and cosmetological innovation." },
        { title: "N°1 Waxes", desc: "Leader in the manufacturing of professional hair removal waxes." },
        { title: "Eco-Friendly", desc: "Formulations that respect the skin and the environment." },
      ],
    },
    brands: {
      eyebrow: "The LCM Universe",
      title: "Our Brands",
      discover: "Discover",
      brand1: { title: "Arsène Valère", atmosphere: "Modern cosmetology laboratory" },
      brand2: { title: "Norma de Durville", atmosphere: "Manufacturer of depilatory waxes" },
      brand3: { title: "HYLU", atmosphere: "Hyaluronic acid concentrate" },
    },
    lab: {
      title: "The Laboratory",
      features: {
        rd: { title: "Research & Development", desc: "Custom formulation and constant improvement of our active ingredients." },
        prod: { title: "Production", desc: "Flexible industrial capacity for small and large series." },
        reg: { title: "Regulations", desc: "Total compliance with international cosmetic standards." },
      },
    },
    process: {
      title: "Your Project in 4 Steps",
      cards: {
        brief: "Briefing",
        sample: "Sampling",
        validation: "Test Validation",
        production: "Production Launch",
      },
    },
    quality: {
      title: "Excellence at the Heart",
      stats: {
        founded: "Founded in",
        origin: "Guaranteed Origin",
        rdFocus: "Innovation Focus",
        market: "Sector",
      },
    },
    partners: {
      title: "They Trust Us",
      trust: "Our sports & institutional partners",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's talk about your future cosmetic project.",
      name: "Full Name",
      email: "Professional Email",
      message: "Your message",
      send: "Send Message",
      address: "Limoges, France",
    },
    popup: {
      title: "Need advice?",
      subtitle: "Our experts support you in creating your cosmetic range.",
      cta: "Talk to us",
    },
    footer: {
      description: "Expert in modern cosmetology and professional wax manufacturing since 1965.",
      expertise: "Expertise",
      legal: "Legal",
      rights: "All rights reserved.",
      contact: "Contact",
    },
  },
};
