
export interface SiteData {
  company: {
    name: string;
    site: string;
    address: string;
    location: string;
    whatsapp: string;
    whatsappUrl: string;
    instagram: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaWhatsapp: string;
    ctaBudget: string;
  };
  about: {
    title: string;
    description: string;
    highlights: string[];
  };
  weddings: {
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      couple: string;
      event: string;
      text: string;
      rating: number;
    }[];
  };
  events: {
    title: string;
    description: string;
    types: { name: string; desc: string }[];
  };
  structure: {
    title: string;
    items: string[];
  };
  gallery: {
    categories: string[];
  };
}
