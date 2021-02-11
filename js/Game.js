class Game {
	constructor(){
  
	}
	loading(){
		
		 playButton = createSprite(450,210,50,50)
		 playButton.addImage(loadingPng)
		 drawSprites();
		 text("loading page",400,200)

		if (mousePressedOver(playButton)) {
	        gameState="instruction";
	        playButton.visible=false;
		}
		else{
			playButton.visible=false
		}
	}
	instruction(){
		text("welcome to earn to live",400,200)
	//	playButton.visible=false;
		playButton2=createSprite(400,300,100,100)
		drawSprites();
		if (mousePressedOver(playButton2)) {
	        gameState="play";
	        playButton2.visible=false;
		}
		else{
			playButton2.visible=false
		}
	}
	
play(){
    boy = createSprite(100,250,10,10)
    boy.addImage(standingboypng)
    ground = createSprite(0,370,800,40)
    ground.addImage(groundPng)
    ground.velocityX=-4
    drawSprites();
   if (keyDown ("space")){
   	boy.velocityY=-12
   }
    console.log(boy.velocityY)
     boy.velocityY = boy.velocityY +0.8
boy.collide(ground)
	}

}