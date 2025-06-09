// Classe do jogador para o Labirinto dos Desafios
export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = scene.add.sprite(x, y, 'player');
        // ...outras propriedades específicas do jogador...
    }
    manipulateObject(obj) {
        // lógica de manipulação de objetos
    }
    // ...outros métodos...
}
