import fs from 'fs';

const fileContent = fs.readFileSync('src/components/ui/ServiceIcons.tsx', 'utf-8');

// Поиск всех функций с SVG
const regex = /export function (Icon[a-zA-Z0-9]+)[\s\S]*?return\s*\(\s*(<svg[\s\S]*?<\/svg>)/g;

let match;
if (!fs.existsSync('exported_icons')) {
  fs.mkdirSync('exported_icons');
}

let count = 0;
while ((match = regex.exec(fileContent)) !== null) {
  const iconName = match[1];
  let svgContent = match[2];

  // Убираем JSX className и заменяем на стандартные атрибуты ширины и высоты (для ВКонтакте/Дикиди)
  svgContent = svgContent.replace(/className=\{[^\}]+\}/, 'width="800" height="800"');
  // Заменяем React props на SVG атрибуты
  svgContent = svgContent.replace(/fillOpacity=/g, 'fill-opacity=');
  svgContent = svgContent.replace(/strokeWidth=/g, 'stroke-width=');
  svgContent = svgContent.replace(/strokeLinecap=/g, 'stroke-linecap=');
  svgContent = svgContent.replace(/strokeLinejoin=/g, 'stroke-linejoin=');
  svgContent = svgContent.replace(/strokeDasharray=/g, 'stroke-dasharray=');

  fs.writeFileSync(`exported_icons/${iconName}.svg`, svgContent);
  count++;
}

console.log(`Успешно экспортировано ${count} иконок в папку exported_icons!`);
