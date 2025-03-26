class Entity{
    constructor(obj){
    this.width = 15
    this.height = 30
    this.pos = createVector(obj.screenWidth/2, obj.screenHeight/2)
    this.speed=0;
    this.angle=random(0,360)
    this.vel = createVector(
    this.speed*cos(this.angle),
    this.speed*sin(this.angle),
    this.deceleration = 0.25,
    this.tail = 4
    )
    }
    
    render(){
        push()
        translate(this.pos.x,this.pos.y)
        rotate(this.angle)
        fill(155,0,255)
        beginShape()
            vertex(0,0)
            vertex(-this.tail, -this.width)
            vertex(this.height, 0)
            vertex(-this.tail, this.width)
        endShape()
        pop()
        text("this is the speed " + this.speed, 50,50);
        text("this is the velocity changing: " + this.vel.x + ", " + this.vel.y,50,75);
    }
    updateVel() {
        this.vel.x = this.speed * cos(this.angle);
        this.vel.y = this.speed * sin(this.angle);
    }
    move(){
        
        if (this.pos.x>=0 && this.speed < 50 && frameCount % 10 === 0) {
            this.speed += 5;
        
            // Update velocity based on the new speed (no scaling by 10)
            this.updateVel()
        }
            
           
        
        this.pos.x = this.pos.x + this.vel.x
        this.pos.y = this.pos.y + this.vel.y
    }
    turnLeft() {
      this.angle -= 2;
      this.updateVel();
  }

  turnRight() {
      this.angle += 2;
      this.updateVel();
  }
  
  decelerate() {
    if (this.speed > 0) {
        this.speed = max(0, this.speed - this.deceleration); // Slow down, but don't go below 0
        this.updateVel(); // Update velocity based on new speed
    }
}
checkColl() {
  let vertices = [
      createVector(this.x, this.y), // Center of the object
      createVector(this.x - this.tail, this.y - this.width),
      createVector(this.x + this.height, this.y),
      createVector(this.x - this.tail, this.y + this.width)
  ];

  // Get the leftmost and rightmost x-coordinates of the vertices
  let leftmost = Math.min(...vertices.map(v => v.x));  // Get the leftmost x-coordinate
  let rightmost = Math.max(...vertices.map(v => v.x)); // Get the rightmost x-coordinate

  // Check for collision with the left or right edges of the screen
  if (leftmost <= 0 || rightmost >= screenWidth) {
      this.vel.x = -this.vel.x;  // Reverse the horizontal velocity

      // Correct the position to prevent the entity from being stuck in the wall
      let width = rightmost - leftmost;
      this.x = constrain(this.x, width / 2, screenWidth - width / 2); // Adjust the center position

      // Optionally, update each vertex based on the new center
      vertices.forEach(v => {
          v.x = this.x + (v.x - this.x); // Update each vertex position relative to the new center
      });
  }
}}
 // Check if the entity collides with the left or right walls
  //   if (this.pos.x - this.width / 2 <= 0 || this.pos.x + this.width / 2 >= screenWidth) {
  //     this.vel.x = -this.vel.x;  // Reverse the horizontal velocity
  //     // Correct the position to prevent the entity from being stuck in the wall
  //     this.pos.x = constrain(this.pos.x, this.width / 2, screenWidth - this.width / 2);
  //   }

  //   // Check if the entity collides with the top or bottom walls
  //   if (this.pos.y - this.height / 2 <= 0 || this.pos.y + this.height / 2 >= screenHeight) {
  //     this.vel.y = -this.vel.y;  // Reverse the vertical velocity
  //     // Correct the position to prevent the entity from being stuck in the wall
  //     this.pos.y = constrain(this.pos.y, this.height / 2, screenHeight - this.height / 2);
  // }