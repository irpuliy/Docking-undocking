var iss;
var iss1;
var spacebg;
var spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var hasDocked = false;
var spacecraft;
var Dock;

function preload(){
  iss = loadImage("iss.jpg");
  spacebg = loadImage("spacebg.jpg");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  Dock = createSprite(360,210,50,50)
  Dock.visible = false;
  iss1 = createSprite(400, 200, 50, 50);
  iss1.addImage(iss);
  iss1.scale = 0.7;

  spacecraft = createSprite(200, 100,10,10);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale = 0.3;
  

  


}

function draw() {
  background(spacebg);  
  if(!hasDocked){
    if(keyDown(LEFT_ARROW)){
      spacecraft.x = spacecraft.x - 2;
      spacecraft.addImage(spacecraft3);
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y + 2;
      spacecraft.addImage(spacecraft2);
    }
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y - 2;
      spacecraft.addImage(spacecraft2);
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.x = spacecraft.x + 2;
      spacecraft.addImage(spacecraft4);
    }

  }
  if(spacecraft.isTouching(Dock)){
    hasDocked = true;
    textSize(30);
    text("Docking Succesful",500,200);
  }
  drawSprites();
}