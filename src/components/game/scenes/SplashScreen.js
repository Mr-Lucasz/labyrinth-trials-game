import { Scene } from 'phaser';

export class SplashScreen extends Scene {
    constructor() {
        super('SplashScreen');
    }
    preload() {
        this.load.image('logo', 'assets/logo.png');
        this.load.audio('theme', 'assets/audio/music/theme.mp3');
    }
    create() {
        this.cameras.main.setBackgroundColor(0x181825);
        this.add.image(512, 384, 'logo').setScale(0.7);
        this.sound.play('theme', { loop: true, volume: 0.5 });
        this.time.delayedCall(2000, () => {
            this.scene.start('Preloader');
        });
    }
}
