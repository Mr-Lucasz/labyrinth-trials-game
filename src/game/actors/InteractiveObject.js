// Classe base para objetos interativos
export default class InteractiveObject {
    constructor(scene, x, y, texture) {
        this.scene = scene;
        this.sprite = scene.add.sprite(x, y, texture).setInteractive();
        this.sprite.on('pointerdown', this.onClick.bind(this));
    }
    onClick() {
        // lógica padrão de clique
    }
    onDrag() {
        // lógica padrão de arrastar
    }
    activate() {
        // lógica de ativação
    }
}
