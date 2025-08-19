# TecBits - Blog de Noticias con Next.js

Un blog de noticias moderno y minimalista construido con Next.js 14, TypeScript y Tailwind CSS. Especializado en noticias de inteligencia artificial, machine learning y tecnología emergente. Diseñado para ofrecer una experiencia de lectura excepcional con optimizaciones de rendimiento y SEO.

## 🚀 Características

### ✨ Diseño y UX
- **Diseño minimalista y moderno** con Tailwind CSS
- **Responsive design** optimizado para todos los dispositivos
- **Interfaz limpia y fácil de navegar**
- **Animaciones suaves** y transiciones elegantes
- **Logo personalizado** integrado en toda la aplicación

### 📰 Funcionalidades de Noticias
- **Página principal** con noticias más recientes
- **Listado completo** de todas las noticias
- **Páginas individuales** para cada noticia con URLs amigables
- **Buscador inteligente** que filtra por título y contenido
- **Categorización** de noticias por temas

### 🖼️ Optimización de Imágenes
- **Lazy loading** automático de imágenes
- **Optimización automática** con Next.js Image
- **Formatos modernos** (WebP, AVIF) para mejor rendimiento
- **Responsive images** con tamaños optimizados

### ⚡ Rendimiento
- **Generación estática** (SSG) para máxima velocidad
- **Incremental Static Regeneration** (ISR) para contenido actualizado
- **Code splitting** automático
- **Optimización de bundles** y imports

### 🔍 SEO Optimizado
- **Metadatos dinámicos** para cada página
- **Open Graph** y Twitter Cards
- **URLs amigables** basadas en títulos
- **Estructura semántica** HTML5
- **Sitemap automático** (configurable)
- **Títulos y descripciones optimizados** para motores de búsqueda

### 🛠️ Tecnologías
- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos
- **ESLint** para calidad de código

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── noticias/          # Página de todas las noticias
│   └── noticia/[id]/[slug]/ # Páginas individuales
├── components/            # Componentes React
│   ├── Layout.tsx         # Layout principal
│   ├── NewsCard.tsx       # Tarjeta de noticia
│   ├── NewsList.tsx       # Lista de noticias
│   ├── SearchBar.tsx      # Barra de búsqueda
│   ├── ShareButtons.tsx   # Botones de compartir
│   └── ThemeProvider.tsx  # Proveedor de tema
├── config/                # Configuración
│   └── site.ts           # Configuración del sitio
├── data/                  # Datos
│   └── news.json         # Datos de noticias
├── types/                 # Tipos TypeScript
│   └── news.ts           # Tipos de noticias
└── utils/                 # Utilidades
    └── news.ts           # Funciones de noticias
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación Local

1. **Clona el repositorio**
```bash
git clone https://github.com/tuusuario/tecbits-blog.git
cd tecbits-blog
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting del código
```

## 📦 Despliegue en GitHub y Vercel

### Paso 1: Crear Repositorio en GitHub

1. **Ve a GitHub.com** y crea una nueva cuenta o inicia sesión
2. **Crea un nuevo repositorio**:
   - Haz clic en "New repository"
   - Nombre: `tecbits-blog` (o el nombre que prefieras)
   - Descripción: "Blog de noticias de IA y tecnología con Next.js"
   - Marca como **Público** (recomendado para Vercel)
   - **NO** inicialices con README (ya tienes uno)

3. **Sube tu código a GitHub**:
```bash
# Inicializa git en tu proyecto (si no lo has hecho)
git init

# Añade todos los archivos
git add .

# Haz tu primer commit
git commit -m "Initial commit: TecBits blog with Next.js"

# Añade el repositorio remoto (reemplaza TU_USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU_USUARIO/tecbits-blog.git

# Sube el código
git branch -M main
git push -u origin main
```

### Paso 2: Desplegar en Vercel

1. **Ve a Vercel.com** y crea una cuenta (puedes usar tu cuenta de GitHub)

2. **Importa tu proyecto**:
   - Haz clic en "New Project"
   - Selecciona tu repositorio `tecbits-blog`
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configuración del proyecto**:
   - **Framework Preset**: Next.js (seleccionado automáticamente)
   - **Root Directory**: `./` (dejar por defecto)
   - **Build Command**: `npm run build` (por defecto)
   - **Output Directory**: `.next` (por defecto)
   - **Install Command**: `npm install` (por defecto)

4. **Variables de entorno** (si las necesitas):
   - Por ahora no necesitas configurar variables de entorno

5. **Haz clic en "Deploy"**

### Paso 3: Configuración Adicional

1. **Dominio personalizado** (opcional):
   - En tu proyecto de Vercel, ve a "Settings" → "Domains"
   - Añade tu dominio personalizado si lo tienes

2. **Configuración de SEO**:
   - El proyecto ya está optimizado para SEO
   - Vercel generará automáticamente el sitemap y robots.txt

## 🔧 Configuración del Sitio

### Personalizar Información

Edita `src/config/site.ts` para personalizar:

```typescript
export const siteConfig = {
  name: "TecBits",                    // Nombre de tu sitio
  description: "Tu descripción...",   // Descripción SEO
  url: "https://tudominio.com",       // URL de tu sitio
  contact: {
    email: "tu@email.com",            // Tu email
  },
  author: {
    name: "Tu Nombre",                // Tu nombre
  },
  // ... más configuraciones
};
```

### Añadir Noticias

Edita `src/data/news.json` para añadir nuevas noticias:

```json
{
  "id": 3,
  "title": "Título de la noticia",
  "excerpt": "Resumen de la noticia...",
  "content": "Contenido completo...",
  "imageUrl": "/images/tu-imagen.jpg",
  "category": "IA",
  "publishedAt": "2024-01-15"
}
```

## 🎨 Personalización

### Colores y Tema

Los colores principales están en `tailwind.config.ts`:
- **Primario**: Emerald (verde)
- **Fondo**: Gray (gris oscuro)
- **Texto**: White/Gray (blanco/gris claro)

### Logo

Reemplaza `public/logo.svg` con tu propio logo manteniendo el mismo nombre.

## 📈 Optimización SEO

El proyecto incluye:
- ✅ Metadatos dinámicos
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ URLs amigables
- ✅ Sitemap automático
- ✅ Robots.txt
- ✅ Estructura semántica HTML5

## 🚀 Características Avanzadas

- **ISR (Incremental Static Regeneration)**: Las páginas se regeneran automáticamente
- **Optimización de imágenes**: WebP y AVIF automáticos
- **Code splitting**: Carga optimizada de JavaScript
- **PWA ready**: Preparado para Progressive Web App

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: maxhorvat30@gmail.com
- **Sitio Web**: https://tecbits.com

---

**¡Disfruta creando contenido increíble con TecBits! 🚀**
# tecbits
# tecbits
# tecbits
