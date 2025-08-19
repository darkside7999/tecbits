// Configuración del sitio - Personaliza esta información según tus necesidades
export const siteConfig = {
  // Información básica del sitio
  name: "TecBits",
  description: "Noticias de inteligencia artificial, machine learning y tecnología emergente. Tu fuente confiable de análisis técnico sobre IA y innovación digital.",
  url: "https://tecbits.com",
  
  // Información de contacto
  contact: {
    email: "maxhorvat30@gmail.com", // Cambia por tu email real
    phone: undefined, // Cambia por tu teléfono si quieres mostrarlo
  },
  
  // Información del autor/empresa
  author: {
    name: "Maximilian Horvat", // Cambia por tu nombre
    // company: "Tu Empresa", // Descomenta y cambia si quieres mostrar empresa
  },
  
  // Redes sociales (opcional)
  social: {
    // twitter: "https://twitter.com/tuusuario",
    // linkedin: "https://linkedin.com/in/tuusuario",
    // github: "https://github.com/tuusuario",
  },
  
  // Configuración SEO
  seo: {
    titleTemplate: "%s | TecBits",
    defaultTitle: "TecBits - Noticias de IA y Tecnología",
    defaultDescription: "Descubre las últimas noticias sobre inteligencia artificial, machine learning, deep learning y tecnología emergente. Análisis profundo de las tendencias que transforman el mundo digital.",
    siteUrl: "https://tecbits.com",
    openGraph: {
      type: "website" as const,
      locale: "es_ES",
      url: "https://tecbits.com",
      siteName: "TecBits",
    },
    twitter: {
      handle: "@tecbits",
      site: "@tecbits",
      cardType: "summary_large_image" as const,
    },
  },
  
  // Configuración de navegación
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
