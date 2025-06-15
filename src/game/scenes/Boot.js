import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        // Carrega o fundo correto para o Preloader
        this.load.image('background', 'assets/images/ui/background_wall.jpg');
        // Carrega a tocha como spritesheet animado
        this.load.spritesheet('torch', 'assets/images/environment/torch.png', {
            frameWidth: 64,
            frameHeight: 64
        });
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
