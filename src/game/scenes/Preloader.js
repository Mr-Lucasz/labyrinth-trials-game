import { Scene } from "phaser";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    init() {
        this.add.image(512, 384, 'background');
        // Não tente criar animação ou sprites aqui!
    }

    preload() {
        this.load.setPath('assets');

        this.load.setPath('assets/images/characters');

        this.load.setPath('assets/images/environment');
        this.load.spritesheet('torch', 'torch.png', {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.setPath('assets/images/puzzles');


        this.load.setPath('assets/images/ui');


        this.load.setPath('assets/audio/sfx');
    }

    create() {
        // Cria animação da tocha após o preload
        if (!this.anims.exists('torch_burning')) {
            this.anims.create({
                key: 'torch_burning',
                frames: this.anims.generateFrameNumbers('torch', { start: 0, end: 3 }),
                frameRate: 8,
                repeat: -1
            });
        }
        // Tochas animadas nas laterais
        this.add.sprite(200, 384, 'torch').play('torch_burning').setScale(1.5);
        this.add.sprite(824, 384, 'torch').play('torch_burning').setScale(1.5);

        // Destroi barra e outline ao sair do Preloader
        if (this.bar) this.bar.destroy();
        if (this.outline) this.outline.destroy();

        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start("MainMenu");
    }
}
