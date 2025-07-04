import Constants from '../utils/Constants';
import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
        this.gameState = Constants.GAME_STATES.JOGANDO;
        this.model = {};
        this.controller = {};
    }

    init(data) {
        this.nickname = data?.nickname || null;
        this.newGame = data?.newGame ?? true;
        this.challengeMode = data?.challengeMode ?? false;
        // Carregar progresso se não for novo jogo
        // this.progress = ...
    }

    setGameState(newState) {
        this.gameState = newState;
        EventBus.emit('game-state-changed', newState);
    }

    create() {
        // Fundo de tijolos para depuração
        this.add.tileSprite(0, 0, this.sys.game.config.width, this.sys.game.config.height, 'tile').setOrigin(0, 0);
        this.cameras.main.setBackgroundColor(0x222244);
        this.add.image(512, 384, 'background').setAlpha(0.7);
        // Texto de depuração
        this.add.text(512, 384, 'CENA GAME', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ff0000', stroke: '#000', strokeThickness: 8, align: 'center'
        }).setOrigin(0.5);
        // Aqui será implementada a lógica de fases, puzzles e checkpoints
        this.add.text(512, 100, `Bem-vindo${this.nickname ? ', ' + this.nickname : ''}!`, {
            fontFamily: 'Arial Black', fontSize: 32, color: '#ffe066', stroke: '#000', strokeThickness: 6, align: 'center'
        }).setOrigin(0.5);
        // ...HUD e lógica de puzzles...
        EventBus.emit('current-scene-ready', this);

        if (this.challengeMode) {
            this.cronometerText.setVisible(true);
        } else {
            this.cronometerText.setVisible(false);
        }
        // Placeholder para feedback visual/sonoro
        this.events.on('puzzle-solved', () => {
            this.sound.play('success');
            // Feedback visual
        });
        this.events.on('puzzle-error', () => {
            this.sound.play('error');
            // Feedback visual
        });
        // Placeholder para integração do Guardião
        this.guardian = this.add.sprite(900, 700, 'guardian').setScale(0.7);

        this.setGameState(Constants.GAME_STATES.JOGANDO);
        // Exemplo de uso de Strategy Pattern para puzzles:
        // this.currentPuzzle = new ShapePuzzle(this);
        // this.currentPuzzle.setStrategy(new ShapePuzzleStrategy());
        // this.currentPuzzle.setState(Constants.PUZZLE_STATES.ATIVO);
    }

    changeScene() {
        this.scene.start('GameOver');
    }
}
