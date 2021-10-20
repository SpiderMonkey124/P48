var gameState = "start"

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{}
text("button")

function setup() {
	createCanvas(800, 700);

	player = createSprite(400, 250)

	playbutton = createSprite(400, 650)

	engine = Engine.create();
	world = engine.world;

	enemyGroup = new Group()

	
	

	Engine.run(engine);
  
}


function draw() {
  
  background("Black");


  if(playbutton.mousePressed()){
	gameState = "play"
}

if(gameState === "play"){
	enemy()
}


  
 
	Engine.update(engine)
	if(gameState === "start"){
		textSize(40)
		fill("red")
		text("Welcome to Island Survivor", 50, 50)
		fill("white")
		text("From this screen we need to move")
		
	
	
	}

	function keyPressed(){
		if(keyCode === "W"){
		 player.y = player.y +1
		}
		
		if(keyCode === "A"){
			player.x = player.x -1
		}

		if(keyCode === "S"){
			player.x = player.x +1
		}

		if(keyCode === "D"){
			player.y = player.y -1
		}

		

		

		

	}

	

  
  drawSprites();
  
  
 
}

function enemy(){
	if(frameCount%60 === 0){
		enemy1 = createSprite(Math.round(random(10, 790)), 5, 15, 70)
		enemy1.velocityY = 5;
		enemy1.liftime = 180
		enemyGroup.add(enemy1)

	}
}


