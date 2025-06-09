// Classe base abstrata para puzzles
export default class BasePuzzle {
    constructor(scene) {
        this.scene = scene;
    }
    init() {}
    solve() {}
    reset() {}
    displayRules() {}
    provideHint() {}

    // Métodos padrão para todos puzzles
    onClick(obj) {}
    onDrag(obj, pointer) {}
    onRotate(obj, angle) {}
    onSequenceActivate(sequence) {}
    onNavigate(point) {}
    giveFeedback(success) {
        if (this.scene) {
            if (success) {
                this.scene.events.emit('puzzle-solved');
            } else {
                this.scene.events.emit('puzzle-error');
            }
        }
    }
    setGuardian(guardian) {
        this.guardian = guardian;
    }
}
