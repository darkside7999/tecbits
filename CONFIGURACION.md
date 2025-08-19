# 📝 Guía de Configuración - TecBits

## 🎯 Personalización Rápida

Para personalizar tu blog de noticias sobre IA y tecnología, edita el archivo `src/config/site.ts`:

### 📧 Configurar Email de Contacto

```typescript
// En src/config/site.ts
contact: {
  email: "tu-email@ejemplo.com", // ← Cambia por tu email real
  phone: undefined, // ← Cambia por tu teléfono si quieres mostrarlo
},
```

### 👤 Configurar Información Personal

```typescript
// En src/config/site.ts
author: {
  name: "Tu Nombre", // ← Cambia por tu nombre
  // company: "Tu Empresa", // ← Descomenta y cambia si quieres mostrar empresa
},
```

### 🌐 Configurar Dominio

```typescript
// En src/config/site.ts
url: "https://tudominio.com", // ← Cambia por tu dominio
seo: {
  siteUrl: "https://tudominio.com", // ← Cambia por tu dominio
  openGraph: {
    url: "https://tudominio.com", // ← Cambia por tu dominio
  },
},
```

### 📱 Configurar Redes Sociales (Opcional)

```typescript
// En src/config/site.ts
social: {
  twitter: "https://twitter.com/tuusuario", // ← Descomenta y cambia
  linkedin: "https://linkedin.com/in/tuusuario", // ← Descomenta y cambia
  github: "https://github.com/tuusuario", // ← Descomenta y cambia
},
```

## 🔧 Configuraciones Avanzadas

### Cambiar Nombre del Sitio

```typescript
name: "Mi Blog de Noticias", // ← Cambia el nombre del sitio
```

### Cambiar Descripción

```typescript
description: "Mi descripción personalizada del blog", // ← Cambia la descripción
```

### Configurar SEO

```typescript
seo: {
  titleTemplate: "%s | Mi Blog", // ← Cambia el template de títulos
  defaultTitle: "Mi Blog - Título Personalizado", // ← Cambia el título por defecto
  defaultDescription: "Mi descripción SEO personalizada", // ← Cambia la descripción SEO
},
```

## 📋 Lista de Verificación

- [ ] ✅ Cambiar email de contacto
- [ ] ✅ Cambiar nombre del autor
- [ ] ✅ Cambiar nombre del sitio (opcional)
- [ ] ✅ Cambiar dominio (si tienes uno)
- [ ] ✅ Agregar redes sociales (opcional)
- [ ] ✅ Personalizar descripción (opcional)

## 🚀 Después de la Configuración

1. **Guardar cambios** en `src/config/site.ts`
2. **Reiniciar el servidor** de desarrollo:
   ```bash
   npm run dev
   ```
3. **Verificar** que los cambios aparecen en el sitio
4. **Construir** para producción:
   ```bash
   npm run build
   ```

## 📝 Ejemplo Completo

```typescript
export const siteConfig = {
  name: "Mi Blog de IA",
  description: "Mi blog personal sobre inteligencia artificial y tecnología",
  url: "https://miblog.com",
  
  contact: {
    email: "mi-email@gmail.com",
    phone: undefined, // o "+34 123 456 789"
  },
  
  author: {
    name: "Juan Pérez",
    // company: "Mi Empresa",
  },
  
  social: {
    twitter: "https://twitter.com/juanperez",
    linkedin: "https://linkedin.com/in/juanperez",
    github: "https://github.com/juanperez",
  },
  
  // ... resto de configuración
};
```

## ❓ ¿Necesitas Ayuda?

Si tienes problemas con la configuración:

1. Verifica que el archivo `src/config/site.ts` existe
2. Asegúrate de que la sintaxis TypeScript es correcta
3. Revisa la consola del navegador para errores
4. Reinicia el servidor de desarrollo

¡Tu blog estará listo para usar con tu información personalizada! 🎉
