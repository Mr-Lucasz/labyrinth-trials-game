import Phaser from 'phaser';

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu' });
    }

    preload() {
        // Carregar os assets necessários
    }

    create() {
        this.add.text(100, 100, 'Main Menu', { fontSize: '32px', fill: '#fff' });
        this.startNewGame();
    }

    startNewGame() {
        // Solicita apelido via overlay React
        this.input.enabled = false;
        this.scene.pause();
        this.events.once('nickname-submitted', ({ nickname }) => {
            this.input.enabled = true;
            this.scene.resume();
            this.scene.start('Game', { nickname, newGame: true });
        });
        this.game.events.emit('request-nickname', 'MainMenu');
    }
}