class Entity{
    constructor(obj){
    this.width = 20
    this.height = 20
    this.pos = createVector(obj.screenWidth/2, obj.screenHeight/2)
    this.speed=0;
    this.angle=random(0,360)
    this.vel = createVector(
    this.speed*cos(this.angle),
    this.speed*sin(this.angle)
    )
    }
    
    render(){
        push()
        translate(this.pos.x,this.pos.y)
        rotate(this.angle)
        fill(155,0,255)
        ellipse (0,0,this.width,this.height)
        pop()
        text("this is the speed " + this.speed, 50,50);
        text("this is the velocity changing: " + this.vel.x + ", " + this.vel.y,50,75);
    }
    updateVel() {
        this.vel.x = this.speed * cos(this.angle);
        this.vel.y = this.speed * sin(this.angle);
    }
    move(){
        
        if (this.pos.x>0 && this.speed < 50 && frameCount % 10 === 0) {
            this.speed += 1;
        
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
  checkColl(){
    if (this.pos.x <= 0 || this.pos.x >= width) {
      this.vel.x = -this.vel.x;  // Reverse the horizontal velocity when hitting left or right wall
    }
    if (this.pos.y <= 0 || this.pos.y >= height) {
      this.vel.y = -this.vel.y;  // Reverse the vertical velocity when hitting top or bottom wall
    }
  }
}