

class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });

    }

    preload() {
        this.load.image('ship', 'assets/images/ship.png');
        this.load.image('laser', 'assets/images/laser.png')
        this.load.image('background', 'assets/images/background.jpg');
    }

    create() {
        
        this.add.image(window.innerWidth/2, window.innerHeight/2,'background')
        this.ship = this.physics.add.sprite(window.innerWidth/2, window.innerHeight/2, 'ship');

        this.laser = this.add.image(this.ship.x,this.ship.y,'laser')
        this.ship.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.cameras.main.startFollow(this.ship, true, 0.08, 0.08);

        this.cameras.main.setZoom(2);

    }

    update() {
        if (this.cursors.left.isDown)
        {
            this.ship.setAngularVelocity(-160);
        }

        else if (this.cursors.right.isDown)
        {
            this.ship.setAngularVelocity(160);
        }

        else{
            this.ship.setAngularVelocity(0);
        }
        

        if (this.cursors.up.isDown )
        {
            
            this.physics.velocityFromRotation(this.ship.rotation - 1.5, 160, this.ship.body.velocity);
        }
        else{
            this.physics.velocityFromRotation(this.ship.rotation , 0, this.ship.body.velocity);
        }

        if(this.cursors.space.isDown){
            this.laser.destroy()
            this.laser = this.add.image(this.ship.x ,this.ship.y ,'laser').setOrigin(0,0)
            this.laser.angle = this.ship.angle + 180;
        }else{
            this.laser.destroy()
        }

    }
}

export default GameScene;
