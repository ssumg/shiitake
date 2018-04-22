PImage [][] dog = new PImage[2][5];
var dir, num, xPos;

function setup() {

  createCanvas(800, 800);

  for(var num = 0; num < 5; num++){
    dog[0][num] = loadImage("L"+num+".png");
  }
  for(var num = 0; num<5; num++){
    dog[1][num] = loadImage("R"+num+".png");
  }
 
  dir = 0;
  num = 0;
}

function draw() {
  background(255);
  fill(0);
  ellipse(100, 100, 50, 50);
  image(dog[dir][num], xPos, 400);

  num++;
  if(num == 5){
    num = 0;
  }
  
}
function keyPressed(){
  if(key==CODED){
    if(keyCode == LEFT){
      dir = 0;
      xPos -= 10;
      num++;
      num %= 4;
    }
    if(keyCode == RIGHT){
      dir = 1;
      xPos += 10;
      num++;
      num %= 4;
    }
  }
}
