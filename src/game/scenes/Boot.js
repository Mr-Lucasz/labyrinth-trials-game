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
        this.load.image('main_menu_bg', 'images/ui/background.png');

    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
