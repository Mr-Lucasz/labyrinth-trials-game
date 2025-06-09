import { EventBus } from '../EventBus';

// Classe base para objetos interativos
export default class InteractiveObject {
    constructor(scene, x, y, texture) {
        this.scene = scene;
        this.sprite = scene.add.sprite(x, y, texture).setInteractive();
        this.state = 'IDLE';
        this.sprite.on('pointerdown', this.onClick.bind(this));
        this.sprite.on('pointerup', this.onRelease?.bind(this));
        this.sprite.on('pointerover', this.onHover?.bind(this));
        this.sprite.on('pointerout', this.onOut?.bind(this));
    }
    onClick() {
        this.state = 'ACTIVE';
        EventBus.emit('object-clicked', this);
    }
    onRelease() {
        this.state = 'IDLE';
        EventBus.emit('object-released', this);
    }
    onHover() {
        EventBus.emit('object-hover', this);
    }
    onOut() {
        EventBus.emit('object-out', this);
    }
    activate() {
        this.state = 'ACTIVE';
    }
}
