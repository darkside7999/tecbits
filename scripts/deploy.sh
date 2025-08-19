#!/bin/bash

# Script de despliegue para TecBits Blog
# Este script automatiza el proceso de subir cambios a GitHub

echo "🚀 Iniciando despliegue de TecBits Blog..."

# Verificar si hay cambios sin commitear
if [[ -n $(git status --porcelain) ]]; then
    echo "📝 Hay cambios sin commitear. Añadiendo archivos..."
    git add .
    
    echo "💬 Ingresa el mensaje del commit:"
    read commit_message
    
    if [[ -z "$commit_message" ]]; then
        commit_message="Update: Mejoras y optimizaciones"
    fi
    
    git commit -m "$commit_message"
    echo "✅ Commit realizado: $commit_message"
else
    echo "✅ No hay cambios pendientes"
fi

# Subir a GitHub
echo "📤 Subiendo cambios a GitHub..."
git push origin main

if [[ $? -eq 0 ]]; then
    echo "✅ Cambios subidos exitosamente a GitHub"
    echo ""
    echo "🌐 Para desplegar en Vercel:"
    echo "1. Ve a https://vercel.com"
    echo "2. Conecta tu repositorio de GitHub"
    echo "3. Vercel detectará automáticamente que es un proyecto Next.js"
    echo "4. Haz clic en 'Deploy'"
    echo ""
    echo "🔗 Tu sitio estará disponible en: https://tu-proyecto.vercel.app"
else
    echo "❌ Error al subir cambios a GitHub"
    exit 1
fi

echo "🎉 ¡Despliegue completado!"
