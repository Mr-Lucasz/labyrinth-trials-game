// check-assets.js (ESM)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const requiredFiles = [
  'public/assets/images/environment/torch.png',
];

let allExist = true;

for (const file of requiredFiles) {
  if (!fs.existsSync(path.resolve(__dirname, '..', file))) {
    console.log('❌ Faltando:', file);
    allExist = false;
  } else {
    console.log('✔️ OK:', file);
  }
}

if (allExist) {
  console.log('\nTodos os assets necessários estão presentes!');
} else {
  console.log('\nAlguns assets estão faltando. Adicione os arquivos indicados acima.');
}