// Cena de Créditos (Sobre)
import Phaser from 'phaser';
export default class CreditsScene extends Phaser.Scene {
    constructor() {
        super('CreditsScene');
    }
    create() {
        this.add.rectangle(512, 384, 1024, 768, 0x222222, 0.8);
        this.add.text(512, 200, 'Sobre', { fontSize: 48, color: '#ffe066' }).setOrigin(0.5);
        this.add.text(512, 300, 'Desenvolvedores:\nSeu Nome <seu@email.com>\nInclua todos os membros do grupo aqui.', { fontSize: 28, color: '#fff', align: 'center' }).setOrigin(0.5);
        this.add.text(512, 420, 'Voltar', { fontSize: 28, color: '#ffe066', backgroundColor: '#333', padding: { x: 20, y: 10 } })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.scene.start('MainMenu'));
    }
}
