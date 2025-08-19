# 🚀 Guía de Despliegue - TecBits Blog

Esta guía te ayudará a desplegar tu blog TecBits en GitHub y Vercel paso a paso.

## 📋 Prerrequisitos

- ✅ Cuenta de GitHub
- ✅ Cuenta de Vercel (gratuita)
- ✅ Node.js 18+ instalado
- ✅ Git instalado

## 🔧 Paso 1: Preparar el Proyecto

### 1.1 Verificar la estructura del proyecto
Asegúrate de que tu proyecto tenga esta estructura:
```
MyBlog/
├── src/
├── public/
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── README.md
└── .gitignore
```

### 1.2 Verificar que el proyecto funcione localmente
```bash
npm install
npm run build
npm run dev
```

## 📦 Paso 2: Crear Repositorio en GitHub

### 2.1 Crear nuevo repositorio
1. Ve a [GitHub.com](https://github.com)
2. Haz clic en "New repository"
3. Configuración:
   - **Repository name**: `tecbits-blog` (o el nombre que prefieras)
   - **Description**: "Blog de noticias de IA y tecnología con Next.js"
   - **Visibility**: Public (recomendado)
   - **NO** marques "Add a README file" (ya tienes uno)
   - **NO** marques "Add .gitignore" (ya tienes uno)

### 2.2 Subir código a GitHub
```bash
# En tu directorio del proyecto
git init
git add .
git commit -m "Initial commit: TecBits blog with Next.js"

# Añadir repositorio remoto (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/tecbits-blog.git
git branch -M main
git push -u origin main
```

## 🌐 Paso 3: Desplegar en Vercel

### 3.1 Crear cuenta en Vercel
1. Ve a [Vercel.com](https://vercel.com)
2. Haz clic en "Sign Up"
3. Selecciona "Continue with GitHub"
4. Autoriza a Vercel para acceder a tu cuenta de GitHub

### 3.2 Importar proyecto
1. En el dashboard de Vercel, haz clic en "New Project"
2. Selecciona tu repositorio `tecbits-blog`
3. Vercel detectará automáticamente que es un proyecto Next.js

### 3.3 Configuración del proyecto
- **Framework Preset**: Next.js (automático)
- **Root Directory**: `./` (dejar por defecto)
- **Build Command**: `npm run build` (por defecto)
- **Output Directory**: `.next` (por defecto)
- **Install Command**: `npm install` (por defecto)

### 3.4 Variables de entorno (opcional)
Por ahora no necesitas configurar variables de entorno.

### 3.5 Desplegar
Haz clic en "Deploy" y espera unos minutos.

## ✅ Paso 4: Verificar el Despliegue

### 4.1 Verificar que todo funcione
- Tu sitio estará disponible en: `https://tu-proyecto.vercel.app`
- Verifica que todas las páginas carguen correctamente
- Prueba la navegación entre páginas
- Verifica que las imágenes se muestren

### 4.2 Configuración adicional
1. **Dominio personalizado** (opcional):
   - En tu proyecto de Vercel → Settings → Domains
   - Añade tu dominio personalizado

2. **Configuración de SEO**:
   - El proyecto ya está optimizado
   - Vercel generará automáticamente sitemap y robots.txt

## 🔄 Paso 5: Actualizaciones Futuras

### 5.1 Usando el script de despliegue
```bash
# Ejecutar el script de despliegue
./scripts/deploy.sh
```

### 5.2 Manualmente
```bash
git add .
git commit -m "Tu mensaje de commit"
git push origin main
```

Vercel detectará automáticamente los cambios y desplegará la nueva versión.

## 🛠️ Solución de Problemas

### Error: Build failed
- Verifica que `npm run build` funcione localmente
- Revisa los logs de Vercel para más detalles
- Asegúrate de que todas las dependencias estén en `package.json`

### Error: Images not loading
- Verifica que las imágenes estén en `public/images/`
- Asegúrate de que las rutas en `news.json` sean correctas

### Error: 404 on pages
- Verifica que las rutas en `next.config.ts` estén correctas
- Asegúrate de que los archivos de páginas existan

## 📊 Monitoreo

### Vercel Analytics
- Ve a tu proyecto en Vercel
- Analytics te mostrará métricas de rendimiento
- Puedes ver errores y logs en tiempo real

### GitHub Insights
- Ve a tu repositorio en GitHub
- Insights te mostrará estadísticas del código
- Puedes ver contribuciones y actividad

## 🔗 Enlaces Útiles

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de GitHub](https://docs.github.com)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🎉 ¡Listo!

Tu blog TecBits está ahora desplegado y disponible en internet. Cada vez que hagas cambios y los subas a GitHub, Vercel los desplegará automáticamente.

---

**¿Necesitas ayuda?** Revisa la documentación o crea un issue en el repositorio.
