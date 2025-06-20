// Este arquivo não deve mais ser usado. Use src/game/main.js para rodar o jogo principal.
// Arquivo mantido apenas para referência histórica.

// Para rodar o jogo, edite e utilize src/game/main.js.

import { SplashScreen } from './scenes/SplashScreen';
import Boot from './scenes/Boot';
import Preloader from './scenes/Preloader';
import MainMenu from './scenes/MainMenu';
import Game from './scenes/Game';
import GameOver from './scenes/GameOver';
import PauseMenu from './scenes/PauseMenu';
import CreditsScene from './scenes/CreditsScene';
import RankingScene from './scenes/RankingScene';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [
        SplashScreen,
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver,
        PauseMenu,
        CreditsScene,
        RankingScene
    ],
    // ...existing config options...
};

const game = new Phaser.Game(config);