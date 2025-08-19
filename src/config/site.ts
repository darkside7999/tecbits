// Configuración del sitio - Personaliza esta información según tus necesidades
export const siteConfig = {
  name: "TecBits",
  description: "Noticias de inteligencia artificial, machine learning y tecnología emergente. Tu fuente confiable de análisis técnico sobre IA y innovación digital.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tecbits-qma2q1dcg-darkside7999s-projects.vercel.app",
  seo: {
    titleTemplate: "%s | TecBits",
    defaultTitle: "TecBits - Noticias de IA y Tecnología",
    defaultDescription: "Descubre las últimas noticias sobre inteligencia artificial, machine learning, deep learning y tecnología emergente. Análisis profundo de las tendencias que transforman el mundo digital.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://tecbits-qma2q1dcg-darkside7999s-projects.vercel.app",
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://tecbits-qma2q1dcg-darkside7999s-projects.vercel.app",
      title: "TecBits - Noticias de IA y Tecnología",
      description: "Descubre las últimas noticias sobre inteligencia artificial, machine learning y tecnología emergente.",
      siteName: "TecBits",
    },
    twitter: {
      handle: "@tecbits",
      site: "@tecbits",
      cardType: "summary_large_image",
    },
  },
  contact: {
    email: "contacto@tecbits.com",
  },
  navigation: {
    mainNav: [
      {
        title: "Noticias de IA",
        href: "/",
      },
      {
        title: "Noticias",
        href: "/noticias",
      },
    ],
  },
};

