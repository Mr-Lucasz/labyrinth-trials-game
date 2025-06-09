// Cena de Ranking
import Phaser from 'phaser';
import ScoreManager from '../utils/ScoreManager';

export default class RankingScene extends Phaser.Scene {
    constructor() {
        super('RankingScene');
    }
    create() {
        this.add.rectangle(512, 384, 1024, 768, 0x222222, 0.8);
        this.add.text(512, 200, 'Ranking', { fontSize: 48, color: '#ffe066' }).setOrigin(0.5);
        const ranking = ScoreManager.getRanking();
        ranking.forEach((player, i) => {
            this.add.text(512, 270 + i * 40, `${i + 1}. ${player.nickname} - ${player.score} pts`, { fontSize: 28, color: '#fff' }).setOrigin(0.5);
        });
        if (ranking.length === 0) {
            this.add.text(512, 320, 'Nenhum registro ainda.', { fontSize: 24, color: '#aaa' }).setOrigin(0.5);
        }
        this.add.text(512, 500, 'Voltar', { fontSize: 28, color: '#ffe066', backgroundColor: '#333', padding: { x: 20, y: 10 } })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.scene.start('MainMenu'));
    }
}
