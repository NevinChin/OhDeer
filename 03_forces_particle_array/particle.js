function Character() {
  //create aspects of the specific character
  this.pos = createVector(50, height);
  this.vel = createVector(1, 0); //makes character move across screen
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
    stroke(255);
    rect(this.pos.x, this.pos.y-50, 20, 50);
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= 0;
      this.pos.y = height;
    }
}

}
