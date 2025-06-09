import Constants from '../utils/Constants';

// Classe base abstrata para puzzles
export default class BasePuzzle {
    constructor(scene) {
        this.scene = scene;
        this.state = Constants.PUZZLE_STATES.OCIOSO;
        this.model = {};
        this.view = null;
        this.controller = null;
        this.guardian = null;
        this.strategy = null; // Para Strategy Pattern
    }
    setState(newState) {
        this.state = newState;
        this.onStateChange && this.onStateChange(newState);
    }
    onStateChange(newState) {
        // Pode ser sobrescrito para lógica customizada
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    update() {
        if (this.strategy && typeof this.strategy.update === 'function') {
            this.strategy.update();
        }
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
