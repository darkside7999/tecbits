#!/bin/bash

# Script de limpieza para TecBits Blog
# Este script limpia el caché de Next.js y otros archivos temporales

echo "🧹 Iniciando limpieza de TecBits Blog..."

# Limpiar caché de Next.js
echo "📁 Limpiando caché de Next.js..."
rm -rf .next

# Limpiar node_modules (opcional)
if [[ "$1" == "--full" ]]; then
    echo "📦 Limpiando node_modules..."
    rm -rf node_modules
    echo "📥 Reinstalando dependencias..."
    npm install
fi

# Limpiar archivos temporales
echo "🗑️ Limpiando archivos temporales..."
rm -rf .turbo
rm -rf .vercel

echo "✅ Limpieza completada!"
echo ""
echo "🚀 Para iniciar el servidor:"
echo "npm run dev"
echo ""
echo "🔧 Para build de producción:"
echo "npm run build"
