let character;
let x = 0;

function setup() {
  createCanvas(640, 360);
  character = new Character();
}

function keyPressed() {
  if (key == ' ') {
    let jump = createVector(0, -10);
    character.applyForce(jump);
  }
}

function draw() {
  //creates character on screen
  background(51);

//-character.pos.x makes the background move and the character stay in the same position
  translate(-character.pos.x+50, 0); //changes the origin point of the screen (helpful for moving games)
  /*
  using a keyPressed function, you can implement different ways for the character to move
  let force = createVector(-0.01, 0);
  character.applyForce(force);
  */

  let gravity = createVector(0, 0.5);
  character.applyForce(gravity);

  character.update();
  character.edges();
  character.display();

//create obstacle for character to jump over
  fill(255, 0, 100);
  rect(400, height-50, 50, 50);
}
