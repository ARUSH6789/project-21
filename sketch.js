var cat, mouse;
var catImg, mouseImg;
var gardenImg;

function preload() {
    //load the images here
    catImg = loadAnimation("images/tomOne.png");
    catWalking = loadAnimation("images/tomTwo.png","images/tomThree.png");
    catStanding = loadAnimation("images/tomFour.png");
    mouseImg = loadAnimation("images/jerryOne.png","images/jerryTwo.png","images/jerryThree.png");
    gardenImg = loadAnimation("images/garden.png");
    jerryImg = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here

    garden = createSprite(300,300,600,600);
    garden.addAnimation("gn",gardenImg);
   
  
    cat = createSprite(500,500,20,20);
    cat.addAnimation("sitting",catImg);
    cat.scale = 0.09;

    mouse = createSprite(40,500,20,20);
    mouse.addAnimation("rat",mouseImg);
    mouse.scale = 0.10;

    text(mouseX + ',' + mouseY,10,45);

 

 
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
       cat.velocityX = 0;
       cat.addAnimation("catLastImage",catStanding);
       cat.changeAnimation("catLastImage");

    }

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        mouse.addAnimation("jry",jerryImg);
        mouse.changeAnimation("jry");


    }   

    
    
    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catWalking);
    cat.changeAnimation("catRunning");
}
  
  
  
  
  

  
  
  
  
  


}

 