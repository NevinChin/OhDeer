let bump;
let sphere;
let stage;

function setup() {
  // put setup code here
  createCanvas(1425,700);
  bump = new floor(150,100,75,50,2.5);
  sphere = new ball(100,450,5);
  stage = new Background(1800,100,10);
}

function draw() {
  // put drawing code here
  background(0,0,255);
  strokeWeight(5);
  noFill();
  line(0,495,width,495);
  stage.drawboulder();
  fill(255);
  sphere.drawball();
  for(let i=0; i<7; i++){
  bump.drawfloor();
  translate(225,0);
}
bump.movingRight();
bump.movingLeft();
bump.switchdirection();
bump.switchback();
sphere.bounce();
sphere.boing();
sphere.boop();
stage.moveforward();
}

class floor{

constructor (w,h,a,b,move){
this.w = w;
this.h = h;
this.a = a;
this.b = b;
this.move = move;
}

drawfloor(){
  arc(25,530,this.w,this.h,0,PI,OPEN);
  arc(138,530,this.a,this.b,0,PI,OPEN);
}



movingRight(){
  if (keyIsDown(RIGHT_ARROW)){
    if (this.b<=75){
      this.h=this.h-this.move;
      this.b=this.b+this.move;
      this.w=this.w-3*this.move;
      this.a=this.a+3*this.move;
    }
  }
}

movingLeft(){
  if (keyIsDown(LEFT_ARROW)){
    if (this.b<=75){
      this.h=this.h+this.move;
      this.b=this.b-this.move;
      this.w=this.w+3*this.move;
      this.a=this.a-3*this.move;
    }
  }
}

switchdirection(){
  if (this.h<=75){
    this.move=-this.move;
    print(this.move);
  }
}

switchback(){
  if (this.h>100){
    this.move=-this.move;
    print(this.move);
  }
}

}

class ball{

  constructor (x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  drawball(){
    ellipse(this.x,this.y, 50,50);
  }

  bounce(){
    if (keyIsDown(RIGHT_ARROW)){
      this.y = this.y+this.speed;
    }
  }

  boing(){
    if (this.y>=470){
      this.speed=-this.speed;
      print(this.speed);
    }
  }

  boop(){
    if (this.y<420){
      this.speed=-this.speed;
      print(this.speed);
    }
  }

}

class Background{

  constructor (x,y,speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  drawboulder(){
    arc(this.x,495,300,500,PI,0,OPEN);
    arc(this.x+225,495,150,750,PI,0,OPEN);
  }

  moveforward(){
    if (keyIsDown(RIGHT_ARROW)){
      this.x = this.x-this.speed;
    }
  }
}
