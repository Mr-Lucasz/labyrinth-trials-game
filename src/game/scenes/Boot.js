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
        this.load.setPath('assets/images/environment');
        this.load.image('main_menu_bg', 'background.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
