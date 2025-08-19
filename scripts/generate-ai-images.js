const fs = require('fs');
const path = require('path');

// Crear directorio de imágenes si no existe
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Lista de nombres de imágenes para las noticias de IA
const imageNames = [
  'ai-workplace.svg',
  'ai-agents.svg', 
  'mexico-ai.svg',
  'photoshop-ai.svg',
  'superintelligence.svg'
];

// Crear archivos de imagen de placeholder (SVG simple)
imageNames.forEach((imageName, index) => {
  const imagePath = path.join(imagesDir, imageName);
  
  // Crear un SVG simple como placeholder
  const svgContent = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#1f2937"/>
  <rect x="50" y="50" width="700" height="500" fill="#374151" stroke="#4b5563" stroke-width="2"/>
  <text x="400" y="300" font-family="Arial, sans-serif" font-size="24" fill="#9ca3af" text-anchor="middle">
    IA ${index + 1}
  </text>
  <text x="400" y="330" font-family="Arial, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle">
    ${imageName.replace('.svg', '')}
  </text>
</svg>`;

  fs.writeFileSync(imagePath, svgContent);
  console.log(`✅ Creada imagen: ${imageName}`);
});

console.log('\n🎉 Todas las imágenes de IA han sido generadas en public/images/');
console.log('💡 Reemplaza estos archivos SVG con imágenes reales JPG/PNG cuando estés listo para producción.');

