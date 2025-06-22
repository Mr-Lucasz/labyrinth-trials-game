import { EventBus } from '../EventBus';
import { Scene } from 'phaser';
import SaveLoadManager from '../utils/SaveLoadManager';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        // Fundo do menu
        this.add.image(512, 384, 'background').setDepth(0);

        // Logo centralizado (ajuste o nome do asset se necessário)
        this.add.image(512, 180, 'logo').setScale(0.7).setDepth(1);

        // Tochas animadas ao lado do logo
        if (!this.anims.exists('torch_burning')) {
            this.anims.create({
                key: 'torch_burning',
                frames: this.anims.generateFrameNumbers('torch', { start: 0, end: 3 }),
                frameRate: 8,
                repeat: -1
            });
        }
        this.add.sprite(312, 180, 'torch').play('torch_burning').setScale(1.2).setDepth(1);
        this.add.sprite(712, 180, 'torch').play('torch_burning').setScale(1.2).setDepth(1);

        // Título do jogo
        this.add.text(512, 80, 'Labirinto dos Desafios', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffe066',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setDepth(2).setOrigin(0.5);

        // Botões principais
        this.createButton(512, 320, 'Novo Jogo', () => this.startNewGame());
        this.createButton(512, 390, 'Carregar Jogo', () => this.loadGame(), !SaveLoadManager.hasSave());
        this.createButton(512, 460, 'Ranking', () => this.showRanking());
        this.createButton(512, 530, 'Sobre', () => this.showCredits());
        this.isChallengeMode = false;
        this.createButton(512, 600, 'Modo Desafio: OFF', () => this.toggleChallengeMode());

        EventBus.emit('current-scene-ready', this);
    }

    createButton(x, y, text, callback, disabled = false) {
        // Botão com imagem de fundo e texto centralizado
        const btn = this.add.image(x, y, 'button_background').setInteractive({ useHandCursor: !disabled }).setScale(1.3).setDepth(1);
        if (!disabled) {
            btn.on('pointerover', () => btn.setTint(0xaaaaaa));
            btn.on('pointerout', () => btn.clearTint());
            btn.on('pointerdown', callback);
        } else {
            btn.setTint(0x444444);
        }
        this.add.text(x, y, text, {
            fontFamily: 'Arial', fontSize: 32, color: disabled ? '#888' : '#fff', stroke: '#000', strokeThickness: 4
        }).setOrigin(0.5).setDepth(2);
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
