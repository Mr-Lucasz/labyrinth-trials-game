```javascript
class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // ...código existente...
    }

    create() {
        this.cameras.main.setBackgroundColor(0x222244);
        this.add.image(512, 384, 'background').setAlpha(0.7);
        this.nickname = this.nickname || 'Explorador';
        this.phase = this.phase || 1;
        this.puzzle = this.puzzle || 1;
        this.score = this.score || 0;
        this.startTime = this.startTime || this.time.now;
        this.hintTimer = this.time.addEvent({ delay: 20000, callback: () => this.showHint(), callbackScope: this, loop: true });
        this.cronometerText = this.add.text(900, 40, '00:00', { fontSize: 24, color: '#ffe066' }).setDepth(200);
        this.nicknameText = this.add.text(40, 40, this.nickname, { fontSize: 24, color: '#ffe066' }).setDepth(200);
        this.time.addEvent({ delay: 1000, callback: () => this.updateCronometer(), callbackScope: this, loop: true });
        this.updateCronometer();
        // ...HUD contextual, lógica de puzzles, portais e checkpoints...
    }

    update() {
        // ...código existente...
    }

    updateCronometer() {
        const elapsed = Math.floor((this.time.now - this.startTime) / 1000);
        const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
        const sec = String(elapsed % 60).padStart(2, '0');
        if (this.cronometerText) {
            this.cronometerText.setText(min + ':' + sec);
        }
    }

    showHint() {
        // Exibe dica do Guardião se o jogador estiver inativo
        this.add.text(512, 700, 'Sussurro do Guardião: Observe atentamente os detalhes...', { fontSize: 22, color: '#fff', backgroundColor: '#222', padding: { x: 12, y: 6 } }).setOrigin(0.5).setDepth(300).setAlpha(0.9);
    }

    checkpoint() {
        // Salva progresso ao final do 2º puzzle de cada fase
        if (this.puzzle === 2) {
            const state = { nickname: this.nickname, phase: this.phase, puzzle: this.puzzle, score: this.score, startTime: this.startTime };
            window.localStorage.setItem('labyrinth_save', JSON.stringify(state));
        }
    }

    nextPuzzle() {
        // Avança para o próximo puzzle ou fase
        if (this.puzzle < 3) {
            this.puzzle++;
        } else if (this.phase < 3) {
            this.phase++;
            this.puzzle = 1;
        } else {
            this.scene.start('GameOver');
            return;
        }
        this.scene.restart({ nickname: this.nickname, phase: this.phase, puzzle: this.puzzle, score: this.score, startTime: this.startTime });
    }
}
```