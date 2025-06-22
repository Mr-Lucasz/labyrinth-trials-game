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

    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
