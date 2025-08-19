# ⚡ Despliegue Rápido - TecBits Blog

## 🚀 Comandos Esenciales

### 1. Preparar el proyecto
```bash
# Verificar que todo funcione
npm install
npm run build
npm run dev
```

### 2. Crear repositorio en GitHub
```bash
# Inicializar git
git init

# Añadir archivos
git add .

# Primer commit
git commit -m "Initial commit: TecBits blog with Next.js"

# Añadir repositorio remoto (REEMPLAZA TU_USUARIO)
git remote add origin https://github.com/Darkside7999/tecbits-blog.git

# Subir código
git branch -M main
git push -u origin main
```

### 3. Desplegar en Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Selecciona tu repositorio `tecbits-blog`
4. Haz clic en "Deploy"

### 4. Actualizaciones futuras
```bash
# Opción 1: Script automático
./scripts/deploy.sh

# Opción 2: Manual
git add .
git commit -m "Tu mensaje"
git push origin main
```

## 📋 Checklist de Despliegue

- [ ] Proyecto funciona localmente (`npm run dev`)
- [ ] Build exitoso (`npm run build`)
- [ ] Repositorio creado en GitHub
- [ ] Código subido a GitHub
- [ ] Proyecto conectado en Vercel
- [ ] Despliegue exitoso
- [ ] Sitio accesible en la URL de Vercel
- [ ] Todas las páginas funcionan
- [ ] Imágenes se cargan correctamente

## 🔗 URLs Importantes

- **GitHub**: https://github.com/TU_USUARIO/tecbits-blog
- **Vercel**: https://tu-proyecto.vercel.app
- **Documentación completa**: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🆘 Problemas Comunes

### Build falla en Vercel
```bash
# Verificar localmente
npm run build
```

### Imágenes no cargan
- Verificar que estén en `public/images/`
- Verificar rutas en `src/data/news.json`

### Páginas 404
- Verificar que los archivos existan en `src/app/`
- Verificar configuración en `next.config.ts`

---

**¡Tu blog estará online en menos de 10 minutos! 🎉**
