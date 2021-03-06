import 'phaser';
import GameScene from './scenes/GameScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.default,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [
        GameScene
    ]
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
