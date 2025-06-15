// check-assets.js (ESM)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const requiredFiles = [
  'public/assets/images/characters/player.png',
  'public/assets/images/characters/guardian.png',
  'public/assets/images/environment/tile.png',
  'public/assets/images/environment/torch.png',
  'public/assets/images/puzzles/shape1.png',
  'public/assets/images/puzzles/shape2.png',
  'public/assets/images/ui/button.png',
  'public/assets/images/ui/background_wall.jpg',
  'public/assets/logo.png',
  'public/assets/star.png',
  'public/assets/bg.png',
  'public/assets/audio/sfx/click.wav',
  'public/assets/audio/sfx/success.wav',
  'public/assets/audio/sfx/error.wav',
  'public/assets/audio/music/theme.mp3',
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