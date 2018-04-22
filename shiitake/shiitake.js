PImage [][] dog = new PImage[2][5];
int dir, num, xPos;

void setup(){
  frameRate(6);
  size(800, 800);

  for(int num = 0; num < 5; num++){
    dog[0][num] = loadImage("L"+num+".png");
  }
  for(int num = 0; num<5; num++){
    dog[1][num] = loadImage("R"+num+".png");
  }
 
  dir = 0;
  num = 0;
}

void draw(){
  background(255);
 
  image(dog[dir][num], xPos, 400);

  num++;
  if(num == 5){
    num = 0;
  }
}

void keyPressed(){
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