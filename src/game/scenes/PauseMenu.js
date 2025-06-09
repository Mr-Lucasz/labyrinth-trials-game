// Cena de Pausa
import Phaser from 'phaser';
export default class PauseMenu extends Phaser.Scene {
    constructor() {
        super('PauseMenu');
    }
    create() {
        // Overlay translúcido
        this.add.rectangle(512, 384, 1024, 768, 0x000000, 0.5);
        this.add.text(512, 300, 'Pausado', { fontSize: 48, color: '#fff' }).setOrigin(0.5);
        this.add.text(512, 400, 'Continuar', { fontSize: 32, color: '#ffe066', backgroundColor: '#333', padding: { x: 20, y: 10 } })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.scene.stop() && this.scene.resume('Game'));
        this.add.text(512, 470, 'Sair', { fontSize: 32, color: '#fff', backgroundColor: '#900', padding: { x: 20, y: 10 } })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.scene.stop('Game');
                this.scene.start('MainMenu');
            });
    }
}
