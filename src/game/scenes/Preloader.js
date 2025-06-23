import { Scene } from "phaser";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    init() {
        this.add.image(512, 384, "background");
        // Não tente criar animação ou sprites aqui!
    }

    preload() {
        this.load.setPath("assets");

        // Ajuste: spritesheet do actor agora é 1 coluna, 4 linhas, 512x314
        this.load.setPath("assets/images/characters");
        this.load.spritesheet("actor", "actor_position_spritesheets.png", {
            frameWidth: 512, // largura exata de cada frame
            frameHeight: 314, // altura exata de cada frame
            endFrame: 3, // 4 frames, 0 a 3
        });

        this.load.setPath("assets/images/environment");
        this.load.spritesheet("torch", "torch.png", {
            frameWidth: 64,
            frameHeight: 64,
        });

        this.load.image("background", "background.png");

        this.load.setPath("assets/images/puzzles");

        this.load.setPath("assets/images/ui");
        this.load.spritesheet("button_spritesheet", "button1.png", {
            frameWidth: 512,
            frameHeight: 113,
            endFrame: 2,
        });

        this.load.setPath("assets/audio/sfx");

        this.load.on("filecomplete", (key, type, data) => {
            console.log(
                `[PRELOADER] Arquivo carregado com sucesso: ${key} (${type})`
            );
        });
        this.load.on("loaderror", (file) => {
            console.error(
                `[PRELOADER] ERRO ao carregar arquivo: ${file.key}, URL: ${file.url}`
            );
        });
    }

    create() {
        // Cria animação da tocha após o preload
        // Tocha animada
        this.anims.create({
            key: "fire",
            //1 linha com 4 frames
            frames: this.anims.generateFrameNumbers("torch", {
                start: 0,
                end: 3,
            }),
            frameRate: 8,
            repeat: -1,
        });
        let tocha = this.add.sprite(600, 200, "torch").play("fire");

        // Tochas animadas nas laterais
        this.add.sprite(200, 384, "torch").play("fire").setScale(1.5);
        this.add.sprite(824, 384, "torch").play("fire").setScale(1.5);

        // Animação do ator (1 coluna, 4 linhas)
        this.anims.create({
            key: "walk",
            frames: this.anims.generateFrameNumbers("actor", { start: 0, end: 3 }),
            frameRate: 8,
            repeat: -1,
        });

        // Destroi barra e outline ao sair do Preloader
        this.children.getByName("progressBar")?.destroy();
        this.children.getByName("progressOutline")?.destroy();

        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start("MainMenu");
    }
}
