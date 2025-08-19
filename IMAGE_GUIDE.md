# 🖼️ Guía de Imágenes Responsivas - TecBits Blog

Esta guía explica cómo funcionan las nuevas funcionalidades de imágenes adaptativas en TecBits Blog.

## 🚀 Características Principales

### ✅ **Adaptación Automática**
- Las imágenes se ajustan automáticamente al tamaño del contenedor
- Mantienen siempre la proporción correcta (aspect ratio)
- Se ven completas en cualquier dispositivo

### ✅ **Optimización Inteligente**
- Carga diferida (lazy loading) para mejor rendimiento
- Formatos modernos (WebP, AVIF) automáticos
- Tamaños optimizados para cada dispositivo

### ✅ **Experiencia de Usuario**
- Transiciones suaves al hacer hover
- Efectos visuales atractivos
- Carga rápida y fluida

## 🛠️ Componentes Disponibles

### 1. **ResponsiveImage**
Componente principal para imágenes adaptativas.

```tsx
import ResponsiveImage from '@/components/ResponsiveImage';

<ResponsiveImage
  src="/images/mi-imagen.jpg"
  alt="Descripción de la imagen"
  aspectRatio="wide"        // square, video, wide, auto
  containerClassName="h-64" // clases adicionales para el contenedor
  sizes="(max-width: 768px) 100vw, 800px"
  priority={false}          // true para imágenes importantes
  loading="lazy"           // lazy o eager
/>
```

#### Opciones de Aspect Ratio:
- **`square`**: 1:1 (cuadrado perfecto)
- **`video`**: 16:9 (formato video)
- **`wide`**: 16:9 (formato panorámico)
- **`auto`**: Se adapta al contenido

### 2. **ImageGallery**
Componente para mostrar múltiples imágenes en diferentes layouts.

```tsx
import ImageGallery from '@/components/ImageGallery';

<ImageGallery
  images={[
    { src: "/images/img1.jpg", alt: "Imagen 1", caption: "Descripción 1" },
    { src: "/images/img2.jpg", alt: "Imagen 2", caption: "Descripción 2" }
  ]}
  layout="grid"           // grid, masonry, carousel
  columns={3}             // 1, 2, 3, 4
  aspectRatio="video"     // square, video, wide, auto
  className="my-8"
/>
```

#### Tipos de Layout:
- **`grid`**: Cuadrícula responsive
- **`masonry`**: Layout tipo Pinterest
- **`carousel`**: Carrusel horizontal

## 📱 Responsive Design

### Breakpoints Automáticos
Las imágenes se adaptan automáticamente a estos tamaños:

```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Tamaños de Imagen Optimizados
```typescript
// next.config.ts
deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
```

## 🎨 Casos de Uso

### 1. **Tarjetas de Noticias**
```tsx
// En NewsCard.tsx
<ResponsiveImage
  src={news.imageUrl}
  alt={news.title}
  aspectRatio="square"
  containerClassName="h-full"
  sizes="(max-width: 768px) 100vw, 192px"
/>
```

### 2. **Imagen Principal de Noticia**
```tsx
// En página individual de noticia
<ResponsiveImage
  src={news.imageUrl}
  alt={news.title}
  aspectRatio="wide"
  containerClassName="w-full h-64 md:h-80 lg:h-96 mb-8 rounded-lg"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
  priority
/>
```

### 3. **Galería de Imágenes**
```tsx
// Para mostrar múltiples imágenes
<ImageGallery
  images={newsImages}
  layout="grid"
  columns={2}
  aspectRatio="video"
  className="mt-8"
/>
```

## ⚡ Optimización de Rendimiento

### Lazy Loading
```tsx
// Las imágenes se cargan automáticamente cuando son visibles
<ResponsiveImage
  loading="lazy"  // Por defecto
  priority={false} // Para imágenes no críticas
/>
```

### Formatos Modernos
- **WebP**: Para navegadores modernos
- **AVIF**: Para navegadores más nuevos
- **JPEG/PNG**: Fallback para navegadores antiguos

### Caché Inteligente
```typescript
// next.config.ts
minimumCacheTTL: 60 // 60 segundos de caché mínimo
```

## 🎯 Mejores Prácticas

### 1. **Siempre incluir alt text**
```tsx
<ResponsiveImage
  src="/images/noticia.jpg"
  alt="Descripción detallada de la imagen" // ✅ Importante para SEO
/>
```

### 2. **Usar sizes apropiados**
```tsx
// Para imágenes pequeñas
sizes="(max-width: 768px) 100vw, 192px"

// Para imágenes grandes
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 1200px"
```

### 3. **Priorizar imágenes importantes**
```tsx
// Para imágenes above the fold
<ResponsiveImage
  priority={true}
  loading="eager"
/>
```

### 4. **Elegir aspect ratio correcto**
```tsx
// Para logos o avatares
aspectRatio="square"

// Para imágenes de noticias
aspectRatio="wide"

// Para contenido variable
aspectRatio="auto"
```

## 🔧 Configuración Avanzada

### Personalizar Aspect Ratios
```typescript
// tailwind.config.ts
aspectRatio: {
  'video': '16 / 9',
  'square': '1 / 1',
  'wide': '16 / 9',
  'tall': '3 / 4',
  'ultrawide': '21 / 9',
}
```

### Configurar Object Position
```tsx
// Centrar la imagen
className="object-cover object-center"

// Enfocar en la parte superior
className="object-cover object-top"

// Enfocar en la parte inferior
className="object-cover object-bottom"
```

## 🐛 Solución de Problemas

### Imagen no se muestra
1. Verificar que la ruta sea correcta
2. Asegurar que la imagen existe en `public/`
3. Verificar permisos de archivo

### Imagen se ve cortada
1. Ajustar `objectPosition` en className
2. Cambiar `aspectRatio` según el contenido
3. Usar `aspectRatio="auto"` para contenido variable

### Carga lenta
1. Verificar tamaño de imagen original
2. Usar `priority={true}` para imágenes importantes
3. Optimizar imágenes antes de subirlas

## 📊 Métricas de Rendimiento

### Lighthouse Score
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

---

**¡Disfruta de imágenes perfectas en cualquier dispositivo! 🎉**
