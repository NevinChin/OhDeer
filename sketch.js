let bump;
let sphere;
let stage = [];
let flakes = [];

function setup() {
  // put setup code here
  createCanvas(1450,756);
  bump = new floor(150,100,75,50,2.5);
  sphere = new ball(100,450,5);
}

function draw() {
  // put drawing code here
  background(189,251,255);
  console.log(frameCount);
  noStroke();
  stroke(0);
  strokeWeight(5);
  noFill();
  push();

  if (keyIsDown(RIGHT_ARROW)){
    if (frameCount % 250 == 0) {
      let b = new Background(1600,100,10,0.75,1);
      stage.push(b);
      console.log(stage);
      }
    }
    for (let i = 0; i < stage.length; i++) {
          stage[i].drawboulder();
          stage[i].drawtree();
          stage[i].moveforward();
    }
  pop();
  fill(255);
  sphere.drawball();
  push();
  if (frameCount % 8 == 0) {
      let s = new Snow(random(0,width),0,3);
      flakes.push(s);
      console.log(flakes);
    }
    for (let i = 0; i < flakes.length; i++) {
  	 	      flakes[i].drawFlake();
         	  flakes[i].moveFlake();
  	  }
  pop();
  fill(130,120,90);
  rect(0,495,width,height);
  fill(255);
  rect(0,495,width,45);
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
    if (keyIsDown(LEFT_ARROW)){
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

  constructor (x,y,speed,scale,shift){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.scale = scale;
    this.shift = shift;
  }

  drawboulder(){
    push();
    fill(180,205,255);
    arc(this.x+600,493,300,500,PI,0,OPEN);
    fill(255);
    for(let i=0; i<=5; i++){
    arc(this.x+500,300,40,35,0,PI,OPEN);
    translate(40,0);
  }
    arc(this.x+360,300,240,115,PI,0,OPEN);
    pop();
  }

  drawtree(){
    fill(200,150,230);
    ellipse(this.x+145,325,75,60);
    ellipse(this.x+185,305,75,60);
    noStroke();
    fill(205,185,144);
    quad(this.x+52,493,this.x+70,493,this.x+100,350,this.x+95,350);
    quad(this.x+148,493,this.x+130,493,this.x+100,350,this.x+105,350);
    triangle(this.x+60,493,this.x+100,350,this.x+140,493); //bottom trunk fill
    quad(this.x-100,345,this.x-100,325,this.x,380,this.x,403);
    quad(this.x,380,this.x,403,this.x+60,382,this.x+40,379); //left branch fill
    quad(this.x,350,this.x+25,340,this.x+60,370,this.x+20,370);
    quad(this.x+60,382,this.x+20,379,this.x+50,353,this.x+70,360); //second left branch fill
    quad(this.x+60,382,this.x+80,395,this.x+90,350,this.x+70,360);
    triangle(this.x+70,420,this.x+100,410,this.x+85,320);
    quad(this.x+75,325,this.x+95,328,this.x+120,380,this.x+130,455); //top trunk fill
    quad(this.x+100,345,this.x+105,330,this.x+115,345,this.x+116,370); //second right branch fill
    quad(this.x+110,355,this.x+115,380,this.x+190,390,this.x+210,374);
    quad(this.x+210,374,this.x+182,372,this.x+231,280,this.x+265,265); //right branch fill
    stroke(0);
    noFill();
    beginShape();
    curveVertex(this.x,495);
    curveVertex(this.x+40,495);
    curveVertex(this.x+60,475);
    curveVertex(this.x+75,400);
    curveVertex(this.x+80,380);
    endShape();
    beginShape();
    curveVertex(this.x+200,495);
    curveVertex(this.x+160,495);
    curveVertex(this.x+140,475);
    curveVertex(this.x+120,380);
    curveVertex(this.x+115,340);
    endShape(); //Base of trunk
    beginShape();
    curveVertex(this.x+85,380);
    curveVertex(this.x+75,400);
    curveVertex(this.x+60,380);
    curveVertex(this.x,400);
    curveVertex(this.x-100,345);
    curveVertex(this.x-120,325);
    endShape();
    beginShape();
    curveVertex(this.x+85,360);
    curveVertex(this.x+40,370);
    curveVertex(this.x,380);
    curveVertex(this.x-100,325);
    curveVertex(this.x-120,305);
    endShape(); //Far left branch
    beginShape();
    curveVertex(this.x+42,380);
    curveVertex(this.x+40,370);
    curveVertex(this.x+15,365);
    curveVertex(this.x,350);
    curveVertex(this.x+5,355);
    endShape();
    beginShape();
    curveVertex(this.x+77,365);
    curveVertex(this.x+80,358);
    curveVertex(this.x+68,360);
    curveVertex(this.x+55,356);
    curveVertex(this.x+35,353);
    curveVertex(this.x+25,340);
    curveVertex(this.x+25,345);
    endShape(); //Second from left branch
    beginShape();
    curveVertex(this.x+80,360);
    curveVertex(this.x+80,358);
    curveVertex(this.x+82,345);
    curveVertex(this.x+75,325);
    curveVertex(this.x+90,320);
    endShape();
    beginShape();
    curveVertex(this.x+90,318);
    curveVertex(this.x+95,328);
    curveVertex(this.x+100,343);
    curveVertex(this.x+106,332);
    curveVertex(this.x+110,330);
    endShape()
    beginShape();
    curveVertex(this.x+115,360);
    curveVertex(this.x+115,355);
    curveVertex(this.x+116,345);
    curveVertex(this.x+105,320);
    endShape(); //Top part of trunk
    beginShape();
    curveVertex(this.x+115,390);
    curveVertex(this.x+120,380);
    curveVertex(this.x+200,385);
    curveVertex(this.x+245,300);
    curveVertex(this.x+275,270);
    curveVertex(this.x+300,245);
    endShape();
    beginShape();
    curveVertex(this.x+115,360);
    curveVertex(this.x+115,355);
    curveVertex(this.x+130,360);
    curveVertex(this.x+185,365);
    curveVertex(this.x+220,295);
    curveVertex(this.x+220,330);
    endShape(); //Right branch
    fill(221,151,229);
    ellipse(this.x+15,310,100,85); //Bottom left poof
    fill(235,160,240);
    ellipse(this.x+300,150,175,150); //Far right poof
    fill(235,190,240);
    ellipse(this.x+100,175,400,300); //Main poof
    fill(230,195,250);
    ellipse(this.x+250,225,125,115); //Second from right poof
    fill(235,200,240);
    ellipse(this.x-75,250,250,200); //Far left poof
    ellipse(this.x-10,170,145,125); //Second from left poof
  }

  moveforward(){
    if (keyIsDown(RIGHT_ARROW)){
      this.x = this.x-this.speed;
      this.shift=this.shift/10;
    }
  if (keyIsDown(LEFT_ARROW)){
    this.x = this.x+this.speed;
  }
}
}

  class Snow {

  	constructor(x,y,speed){
  		this.x = x;
      		this.y = y;
          	this.speed = speed;
  	}

  	drawFlake(){
    noStroke();
    fill(255);
  	ellipse(this.x,this.y,15,15);
  	}

  	moveFlake(){
  		this.x = this.x+.5;
  		this.y = this.y+this.speed;
  	}
  }
