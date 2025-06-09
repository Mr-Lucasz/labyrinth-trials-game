// Classe do Guardião (NPC)
export default class Guardian {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.add.sprite(x, y, 'guardian');
    }
    speak(message) {
        // Exibe fala do guardião na tela
        if (this.scene && message) {
            this.scene.add.text(900, 650, message, { fontSize: 20, color: '#ffe066', backgroundColor: '#222', padding: { x: 10, y: 6 } })
                .setOrigin(0.5).setDepth(400).setAlpha(0.95);
        }
    }
    provideHint() {
        // Exemplo de dica
        this.speak('Observe atentamente os detalhes do desafio...');
    }
    commentOnPuzzleSolved() {
        this.speak('Muito bem, explorador. Mas o labirinto ainda guarda segredos.');
    }
    commentOnPhaseEnd() {
        this.speak('Você avançou, mas o próximo desafio será ainda maior.');
    }
}
