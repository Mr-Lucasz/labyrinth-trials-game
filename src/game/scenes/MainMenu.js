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

        // Título do jogo
        this.add.text(512, 80, 'Labirinto dos Desafios', {
            fontFamily: 'Arial Black', fontSize: 48, color: '#ffe066',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setDepth(2).setOrigin(0.5);

        // Adiciona o personagem actor com novo spritesheet (1 coluna, 4 linhas, 512x314)
        const actor = this.add.sprite(150, 680, 'actor')
            .setOrigin(0.5, 1)
            .setDepth(20)
            .setScale(1.2)
            .play('walk');

        // Alinhar tochas ao lado do botão "Novo Jogo"
        const buttonY = 320; // Y do botão "Novo Jogo"
        const buttonXs = 512;
        const torchLeftX = 155;
        const torchRightX = 860;
        // Tocha esquerda
        this.add.sprite(torchLeftX, buttonY, 'torch').play('fire').setScale(2.5).setDepth(20);
        // Tocha direita
        this.add.sprite(torchRightX, buttonY, 'torch').play('fire').setScale(2.5).setDepth(20);

        // Botões principais (alinhados verticalmente, centralizados entre as tochas)
        this.createButton(buttonXs, 320, 'Novo Jogo', () => this.startNewGame());
        this.createButton(buttonXs, 430, 'Carregar Jogo', () => this.loadGame(), !SaveLoadManager.hasSave());
        this.createButton(buttonXs, 540, 'Ranking', () => this.showRanking());
        this.createButton(buttonXs, 650, 'Sobre', () => this.showCredits());

        EventBus.emit('current-scene-ready', this);
    }

    createButton(x, y, text, callback, disabled = false) {
        const scale = 1; // ajuste aqui

        // Sprite visual do botão
        const btn = this.add.sprite(x, y, 'button_spritesheet', 0)
            .setScale(scale)
            .setDepth(20)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        if (!disabled) {
            let isPointerDown = false;
            let isPointerOver = false;

            btn.on('pointerover', () => {
                isPointerOver = true;
                if (!isPointerDown) btn.setFrame(1);
            });
            btn.on('pointerout', () => {
                isPointerOver = false;
                isPointerDown = false;
                btn.setFrame(0);
            });
            btn.on('pointerdown', () => {
                isPointerDown = true;
                btn.setFrame(2);
            });
            btn.on('pointerup', () => {
                if (isPointerOver) {
                    btn.setFrame(1);
                    callback();
                } else {
                    btn.setFrame(0);
                }
                isPointerDown = false;
            });
        } else {
            btn.setTint(0x444444);
        }

        // Texto do botão
        this.add.text(x, y, text, {
            fontFamily: 'Arial',
            fontSize: 32,
            color: disabled ? '#888' : '#fff',
            stroke: '#000',
            strokeThickness: 4
        }).setOrigin(0.5).setDepth(22);
    }

    startNewGame() {
        // Solicita apelido (pode ser aprimorado com input real via overlay React)
        const nickname = prompt('Digite seu apelido:');
        if (nickname) {
            this.scene.start('Game', { nickname, newGame: true });
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
