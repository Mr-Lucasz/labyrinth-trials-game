import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        // Carrega apenas o fundo para o Preloader
        this.load.image('background', 'assets/images/ui/background_wall.jpg');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
