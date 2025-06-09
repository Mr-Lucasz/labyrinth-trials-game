import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    init(data) {
        this.nickname = data?.nickname || null;
        this.newGame = data?.newGame ?? true;
        this.challengeMode = data?.challengeMode ?? false;
        // Carregar progresso se não for novo jogo
        // this.progress = ...
    }

    create() {
        this.cameras.main.setBackgroundColor(0x222244);
        this.add.image(512, 384, 'background').setAlpha(0.7);
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
    }

    changeScene() {
        this.scene.start('GameOver');
    }
}
