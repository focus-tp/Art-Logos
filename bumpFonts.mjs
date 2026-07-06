import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const componentsDir = path.join(__dirname, 'src', 'components');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let modifiedFiles = 0;

walkDir(componentsDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // RegExp to find text-[Xpx] where X is a number (integer or float)
    const regex = /text-\[(\d+(?:\.\d+)?)px\]/g;
    let newContent = content.replace(regex, (match, num) => {
      let n = parseFloat(num);
      return `text-[${Math.round((n + 1) * 10) / 10}px]`;
    });

    // We can also bump text-sm, text-base, text-lg? 
    // They usually stick to text-[Xpx].
    
    // Also bump text-[clamp(Xpx,...)] ? Let's just bump all absolute pixels in text-[]
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modifiedFiles++;
    }
  }
});

console.log(`Bumped font sizes in ${modifiedFiles} files.`);
