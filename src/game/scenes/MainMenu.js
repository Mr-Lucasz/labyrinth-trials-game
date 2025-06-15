import { EventBus } from '../EventBus';
import { Scene } from 'phaser';
import SaveLoadManager from '../utils/SaveLoadManager';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.image(512, 384, 'background');
        // Cria animação da tocha apenas se ainda não existir
        if (!this.anims.exists('torch_burning')) {
            this.anims.create({
                key: 'torch_burning',
                frames: this.anims.generateFrameNumbers('torch', { start: 0, end: 3 }),
                frameRate: 8,
                repeat: -1
            });
        }
        // Tochas animadas nas laterais
        this.add.sprite(200, 384, 'torch').play('torch_burning').setScale(1.5);
        this.add.sprite(824, 384, 'torch').play('torch_burning').setScale(1.5);

        this.add.image(512, 220, 'logo').setDepth(100);
        this.add.text(512, 120, 'Labirinto dos Desafios', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffe066',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setDepth(100).setOrigin(0.5);

        this.createMenuButton(512, 320, 'Novo Jogo', () => this.startNewGame());
        this.createMenuButton(512, 380, 'Carregar Jogo', () => this.loadGame(), !SaveLoadManager.hasSave());
        this.createMenuButton(512, 440, 'Ranking', () => this.showRanking());
        this.createMenuButton(512, 500, 'Sobre', () => this.showCredits());
        this.isChallengeMode = false;
        this.createMenuButton(512, 560, 'Modo Desafio: OFF', () => this.toggleChallengeMode());

        EventBus.emit('current-scene-ready', this);
    }

    createMenuButton(x, y, label, callback, disabled = false) {
        const btn = this.add.text(x, y, label, {
            fontFamily: 'Arial', fontSize: 32, color: disabled ? '#888' : '#fff', backgroundColor: '#222', padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setInteractive({ useHandCursor: !disabled });
        if (!disabled) btn.on('pointerdown', callback);
    }

    toggleChallengeMode() {
        this.isChallengeMode = !this.isChallengeMode;
        // Atualiza texto do botão
        this.children.getAll().forEach(child => {
            if (child.text && child.text.startsWith('Modo Desafio')) {
                child.setText('Modo Desafio: ' + (this.isChallengeMode ? 'ON' : 'OFF'));
            }
        });
    }

    startNewGame() {
        // Solicita apelido (pode ser aprimorado com input real via overlay React)
        const nickname = prompt('Digite seu apelido:');
        if (nickname) {
            this.scene.start('Game', { nickname, newGame: true, challengeMode: this.isChallengeMode });
        }
    }

    loadGame() {
        if (SaveLoadManager.hasSave()) {
            const save = SaveLoadManager.loadGame();
            this.scene.start('Game', { ...save, newGame: false });
        }
    }

    showRanking() {
        this.scene.start('RankingScene');
    }

    showCredits() {
        this.scene.start('CreditsScene');
    }
}
