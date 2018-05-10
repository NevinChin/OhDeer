let character;
let dog;
let x = 0;
let ground;

function preload() {
  dog = loadImage('corgi-test.jpg')
}

function setup() {
  createCanvas(640, 360);
      ground = 280;
  fill(0);
  character = new Corgi(0, height-70, 10);
}

function keyPressed() {
  if (key == ' ') {
    let jump = createVector(0, -7);
    character.applyForce(jump);
  }
}

function draw() {
  //creates character on screen
  background(255);

//-character.pos.x makes the background move and the character stay in the same position
  translate(-character.pos.x+50, 0); //changes the origin point of the screen (helpful for moving games)
//  using a keyPressed function, you can implement different ways for the character to move

//create obstacle for character to jump over
obstacles(150, 20);

  let gravity = createVector(0, 0.3);
  character.applyForce(gravity);

  character.update();
  character.edges();
  character.display();
}

// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Corgi(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    fill(255, 150);
    stroke(0);
    image(dog, this.pos.x, this.pos.y, 100, 80);
  }

  this.edges = function() {
    if (this.pos.y > ground) {
      this.vel.y *= 0;
      this.pos.y = ground;
    }
     if (this.pos.x >= 500 && this.pos.x <= 660) {
      ground = 180;
    }
   if (this.pos.x >= 680 && this.pos.x <= 840) {
     ground = 70;
   }
   if (this.pos.x >= 860 && this.pos.x <= 1020) {
    ground = 220;
  }
  else if (this.pos.x > 1020) {
    ground = 280;
  }
  }
   }



function obstacles(obstacleWidth, obstacleHeight) {
  //https://www.youtube.com/watch?v=cXgA1d_E-jY
  fill(80);
  rect(540, 260, obstacleWidth, obstacleHeight);
  rect(720, 150, obstacleWidth, obstacleHeight);
  rect(900, 300, obstacleWidth, obstacleHeight);
}
