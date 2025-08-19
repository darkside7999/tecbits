const fs = require('fs');
const path = require('path');

// Crear directorio de imágenes si no existe
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Lista de nombres de imágenes para las noticias
const imageNames = [
  'tech-revolution.jpg',
  'brain-research.jpg', 
  'green-economy.jpg',
  'ai-education.jpg',
  'solar-panels.jpg'
];

// Crear archivos de imagen de placeholder (SVG simple)
imageNames.forEach((imageName, index) => {
  const imagePath = path.join(imagesDir, imageName);
  
  // Crear un SVG simple como placeholder
  const svgContent = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f3f4f6"/>
  <rect x="50" y="50" width="700" height="500" fill="#e5e7eb" stroke="#d1d5db" stroke-width="2"/>
  <text x="400" y="300" font-family="Arial, sans-serif" font-size="24" fill="#6b7280" text-anchor="middle">
    Imagen ${index + 1}
  </text>
  <text x="400" y="330" font-family="Arial, sans-serif" font-size="16" fill="#9ca3af" text-anchor="middle">
    ${imageName.replace('.jpg', '')}
  </text>
</svg>`;

  fs.writeFileSync(imagePath.replace('.jpg', '.svg'), svgContent);
  console.log(`✅ Creada imagen: ${imageName.replace('.jpg', '.svg')}`);
});

console.log('\n🎉 Todas las imágenes de placeholder han sido generadas en public/images/');
console.log('💡 Reemplaza estos archivos SVG con imágenes reales JPG/PNG cuando estés listo para producción.');
