export interface Translation {
  nav: {
    brands: string;
    expertise: string;
    lab: string;
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
    items: {
      title: string;
      desc: string;
    }[];
  };
  brands: {
    eyebrow: string;
    title: string;
    discover: string;
    brand1: { atmosphere: string };
    brand2: { atmosphere: string };
    brand3: { atmosphere: string };
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
  packaging: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  expertiseOffers: {
    propose: { title: string; desc: string };
    create: { title: string; desc: string };
  };
  skincare: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  expertiseHero: {
    eyebrow: string;
    title: string;
    desc: string;
    metrics: {
      value: string;
      label: string;
    }[];
  };
  popup: {
    title: string;
    subtitle: string;
    cta: string;
    success: string;
  };
}

export const translations: Record<'fr' | 'en', Translation> = {
  fr: {
    nav: {
      brands: "Nos Marques",
      expertise: "Expertise",
      lab: "Laboratoire",
      quote: "Demander un devis"
    },
    hero: {
      title: "Le laboratoire pour donner vie à votre vision beauté.",
      paragraph: "Depuis 1965, nous accompagnons les plus grandes marques dans la conception et la fabrication de soins cosmétiques et cires à épiler de haute performance.",
      cta: "Démarrer un projet",
      secondaryCta: "À PROPOS",
      features: ["Logistique premium", "Cire dépilatoire", "Soins visage & corps", "Fabrication française", "R&D sur-mesure"]
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
      eyebrow: "Nos Univers",
      title: "Nos Marques",
      discover: "Découvrir la marque",
      brand1: { atmosphere: "Efficacité & Équilibre" },
      brand2: { atmosphere: "L'Expertise Cire" },
      brand3: { atmosphere: "Pureté & Hydratation" }
    },
    lab: {
      title: "Laboratoire R&D",
      features: {
        rd: { title: "Recherche & Développement", desc: "Innovation constante pour créer les produits de demain." },
        prod: { title: "Production Haute Performance", desc: "Outils de production modernes pour une qualité constante." },
        reg: { title: "Conformité Réglementaire", desc: "Accompagnement complet pour la mise sur le marché internationale." }
      }
    },
    process: {
      title: "Notre Processus",
      cards: {
        brief: "Brief Créatif",
        sample: "Échantillonnage",
        validation: "Validation",
        production: "Production"
      }
    },
    quality: {
      title: "La Qualité au Cœur de nos Engagements",
      stats: {
        founded: "Date de création",
        origin: "Origine",
        rdFocus: "Focus R&D",
        market: "Marché"
      }
    },
    partners: {
      title: "Nos Partenaires",
      trust: "Ils nous font confiance"
    },
    packaging: {
      title: "nombreux conditionnements :",
      items: [
        { 
          title: "Pots", 
          desc: "adaptés aux chauffe-cires professionnels. cire pelable en pot de 800g." 
        },
        { 
          title: "Micro-ondable", 
          desc: "des formules sur mesure pour des cires à épiler micro-ondables. fabricant cire micro-ondable." 
        },
        { 
          title: "Pastilles", 
          desc: "la cire à épiler en pastilles, conditionnée en boîte ou en sachet." 
        },
        { 
          title: "Cartouches", 
          desc: "spécialement conçus pour les chauffe-cires roll-on." 
        }
      ]
    },
    contact: {
      title: "Un projet ?",
      subtitle: "Recevez un accompagnement personnalisé. Expliquez-nous votre besoin : formulation, fabrication, conditionnement ou développement d’une gamme cosmétique.",
      address: "Limoges, France",
      name: "Nom complet",
      email: "Adresse email",
      message: "Votre message",
      send: "Envoyer",
      success: "Merci ! Votre message a bien été envoyé. Nous vous recontacterons très prochainement."
    },
    expertiseOffers: {
      propose: { 
        title: "Nous proposons", 
        desc: "Une gamme de produits professionnels pour les grossistes et les distributeurs." 
      },
      create: { 
        title: "Nous créons", 
        desc: "Des produits sur mesure et personnalisables en quantité minimum." 
      }
    },
    skincare: {
      title: "Soins Cosmétiques",
      items: [
        { title: "Visage & Corps", desc: "Plusieurs gammes de produits de beauté pour le visage et le corps." },
        { title: "Pré & Post Épilation", desc: "Une gamme complète de produits : lotion, huile..." },
        { title: "Soins Cabines", desc: "Gommage, huile de modelage et masque." },
        { title: "Produits d'entretien", desc: "Solvant cire et solution nettoyante pour matériel." }
      ]
    },
    expertiseHero: {
      eyebrow: "DEPUIS 1965",
      title: "LCM, Fabricant de cosmétique et cire à épiler",
      desc: "Le Laboratoire de Cosmétologie Moderne (L.C.M.) est une entreprise familiale qui a été créée en 1965, à Limoges en France. L'entreprise, qui emploie environ 40 personnes, est spécialisée dans la fabrication de cires à épiler, dépilatoires et produits cosmétiques (soins visage et corps).",
      metrics: [
        { value: "18 Tonnes", label: "CAPACITÉ JOURNALIÈRE" },
        { value: "Innovation", label: "EXPERTISE R&D" },
        { value: "Sérigraphie", label: "ATELIER INTERNE" }
      ]
    },
    popup: {
      title: "Un projet ?",
      subtitle: "Recevez un accompagnement personnalisé. Expliquez-nous votre besoin : formulation, fabrication, conditionnement ou développement d’une gamme cosmétique.",
      cta: "Envoyer",
      success: "Merci ! Notre équipe reviendra vers vous rapidement."
    }
  },
  en: {
    nav: {
      brands: "Our Brands",
      expertise: "Expertise",
      lab: "Laboratory",
      quote: "Get a Quote"
    },
    hero: {
      title: "The laboratory to give life to your beauty vision.",
      paragraph: "Since 1965, we have been supporting the greatest brands in the design and manufacture of high-performance cosmetic treatments and depilatory waxes.",
      cta: "Start a project",
      secondaryCta: "ABOUT",
      features: ["Premium logistics", "Depilatory wax", "Face & body care", "French manufacturing", "Custom R&D"]
    },
    expertise: {
      title: "LCM, creator of beauty",
      subtitle: "Innovative, natural or organic beauty products.",
      items: [
        { 
          title: "MADE IN FRANCE", 
          desc: "LCM is a family business with over 60 years of experience. We ensure the development, manufacturing, and packaging of cosmetic products, hair removal waxes, and natural and organic waxes." 
        },
        { 
          title: "INNOVATION", 
          desc: "Our laboratory located in Haute-Vienne benefits from a natural environment to put its experience and technology at the service of beauty professionals. High-quality technical products, performance remains our priority." 
        },
        { 
          title: "BRAND PRODUCTS", 
          desc: "Our clients are big names in the cosmetic industry present worldwide. This is why LCM offers personalized support to companies wishing to offer quality cosmetics in compliance with regulations." 
        },
        { 
          title: "OUR VALUES", 
          desc: "Our ability to integrate technical innovation while respecting a quality level in line with customer demand allows us to create formulas that meet all evolutions related to environmental and health respect." 
        }
      ]
    },
    brands: {
      eyebrow: "Our Universes",
      title: "Our Brands",
      discover: "Discover the Brand",
      brand1: { atmosphere: "Efficacy & Balance" },
      brand2: { atmosphere: "Wax Expertise" },
      brand3: { atmosphere: "Purity & Hydration" }
    },
    lab: {
      title: "R&D Laboratory",
      features: {
        rd: { title: "Research & Development", desc: "Constant innovation to create the products of tomorrow." },
        prod: { title: "High Performance Production", desc: "Modern production tools for consistent quality." },
        reg: { title: "Regulatory Compliance", desc: "Complete support for international market placement." }
      }
    },
    process: {
      title: "Our Process",
      cards: {
        brief: "Creative Brief",
        sample: "Sampling",
        validation: "Validation",
        production: "Production"
      }
    },
    quality: {
      title: "Quality at the Heart of our Commitments",
      stats: {
        founded: "Founded",
        origin: "Origin",
        rdFocus: "R&D Focus",
        market: "Market"
      }
    },
    partners: {
      title: "Our Partners",
      trust: "They trust us"
    },
    packaging: {
      title: "multiple packaging options:",
      items: [
        { 
          title: "Pots", 
          desc: "adapted to professional wax heaters. strip-less wax in 800g pots." 
        },
        { 
          title: "Microwaveable", 
          desc: "custom formulas for microwaveable hair removal waxes. microwave wax manufacturer." 
        },
        { 
          title: "Pills", 
          desc: "hair removal wax in pellets, packaged in boxes or sachets." 
        },
        { 
          title: "Cartridges", 
          desc: "specially designed for roll-on wax heaters." 
        }
      ]
    },
    contact: {
      title: "A project?",
      subtitle: "Receive personalized support. Explain your needs: formulation, manufacturing, packaging, or developing a cosmetic range.",
      address: "Limoges, France",
      name: "Full name",
      email: "Email address",
      message: "Your message",
      send: "Send",
      success: "Thank you! Your message has been sent. We will contact you shortly."
    },
    expertiseOffers: {
      propose: { 
        title: "We offer", 
        desc: "A range of professional products for wholesalers and distributors." 
      },
      create: { 
        title: "We create", 
        desc: "Customized and personalizable products in minimum quantities." 
      }
    },
    skincare: {
      title: "Cosmetic Care",
      items: [
        { title: "Face & Body", desc: "Several ranges of beauty products for the face and body." },
        { title: "Pre & Post Epilation", desc: "A complete range of products: lotion, oil..." },
        { title: "Cabin Care", desc: "Scrub, massage oil and mask." },
        { title: "Maintenance Products", desc: "Wax solvent and cleaning solution for equipment." }
      ]
    },
    expertiseHero: {
      eyebrow: "SINCE 1965",
      title: "LCM, Manufacturer of cosmetics and hair removal wax",
      desc: "The Laboratoire de Cosmétologie Moderne (L.C.M.) is a family business created in 1965 in Limoges, France. The company, which employs around 40 people, specializes in the manufacture of hair removal waxes, depilatories and cosmetic products (face and body care).",
      metrics: [
        { value: "18 Tons", label: "DAILY CAPACITY" },
        { value: "Innovation", label: "R&D EXPERTISE" },
        { value: "Serigraphy", label: "IN-HOUSE WORKSHOP" }
      ]
    },
    popup: {
      title: "A project?",
      subtitle: "Receive personalized support. Explain your needs: formulation, manufacturing, packaging, or developing a cosmetic range.",
      cta: "Send",
      success: "Thank you! Our team will get back to you quickly."
    }
  }
};
