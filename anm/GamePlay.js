
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"img/fondo1.jpg");
		me.load.spritesheet("crow","img/crow1.png",195,75);
		me.load.spritesheet("man","img/man3.png",163,170);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
		
		me.crow= me.game.add.sprite(150,100,"crow");
		me.crow.animations.add("right",[0,1,2,3,4,5,6,7],8,true);
		me.crow.animations.play("right");
		
		me.man=me.game.add.sprite(100,390,"man");
		me.man.animations.add("right",[0,1,2,3,4,5,6,7,10,11,12,13,14,15,16,17,18,19,20,21,22,23],6,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");
    },
    update: function() {
		var me=this;
		me.crow.x+=2;
		me.man.x+=1;
		if(me.crow.x>=me.game.world.width){
			me.crow.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
		
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");