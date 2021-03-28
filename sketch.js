
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var surivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
    
  createCanvas(600,400);
  
  
    monkey=createSprite(80,315,20,20);
    monkey.addAnimation("moving",monkey_running);
    monkey.scale=0.1;
  
   ground=createSprite(400,350,900,10);
   ground.velocityX=-4;
   ground.x=ground.width/2;
   console.log(ground.x);
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
   
}


function draw() {
  
  background("green");
  
   if(ground.x < 200){
     
     ground.x=ground.width/2
   }
  
  if(keyDown("space")&& monkey.y >=300){
    
    monkey.velocityY=-20
      
  }
  monkey.velocityY = monkey.velocityY +0.8
  
  monkey.collide(ground);
  
  if(FoodGroup.isTouching(monkey)){
    
    FoodGroup.destroyEach();
    score=score+1
  }
  
 
    
  
  

  
  spfruits();
  spRock();

  drawSprites();
  
 
  text(20);
  fill("white");
  text("score: " + score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black")
  surivalTime=Math.ceil(frameCount/frameRate());
  text("surivalTime:" + surivalTime,150,50);
}


function spfruits(){
  
  if(frameCount%80===0){
    var fruit=createSprite(650,250,20,20);
    fruit.velocityX=-4;
    fruit.scale=0.1;
    fruit.y=Math.round(random(50,250));
    
    var f=Math.round(random(1));
      switch(f){ 
        case 1: fruit.addImage(bananaImage);
           break;     
      }
       
    FoodGroup.add(fruit);
    
    fruit.lifetime=160
    
    fruit.depth=monkey.depth;
    monkey.depth=monkey.depth+1
  }
}

 function spRock(){
   if(frameCount%100===0){
   var obstacle=createSprite(650,310,20,20)
   obstacle.velocityX=-6;
   obstacle.scale=0.2
     
     var r=Math.round(random(1))
     switch(r){
         
       case 1:obstacle.addImage(obstaceImage);
              break;
     }
     
     
     obstacleGroup.add(obstacle)
     
   }
 }




