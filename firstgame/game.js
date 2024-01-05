
class  mainScene {
    //method call order preload -> create ->update ->update
    preload() {
        //called once at beginning
        //loads assets
        this.load.image('player', 'assets/player.png');
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.load.image('coin', 'assets/coin.png');
        this.coin = this.physics.add.sprite(300, 300, 'coin')
    }
    create() {
        //called once, after preload
    }
    update() {
        //This is called 60 times per second, handles logic
    }
}
new Phaser.game({
    width: 700,
    height: 400,
    backgroundColor: '#3498db',
    scene: mainScene,
    physics: {default: 'arcade'},
    parent: 'game',
});

