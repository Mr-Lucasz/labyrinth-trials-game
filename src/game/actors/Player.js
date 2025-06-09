import { EventBus } from '../EventBus';

// Classe do jogador para o Labirinto dos Desafios
export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.model = { x, y };
        this.sprite = scene.add.sprite(x, y, 'player');
        this.controller = {
            moveTo: (nx, ny) => {
                this.model.x = nx;
                this.model.y = ny;
                this.sprite.setPosition(nx, ny);
                EventBus.emit('player-moved', this.model);
            }
        };
    }
    manipulateObject(obj) {
        EventBus.emit('player-manipulate', { player: this, object: obj });
    }
    // ...outros métodos...
}
