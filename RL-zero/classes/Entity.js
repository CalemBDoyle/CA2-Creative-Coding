class Entity{
    constructor(obj){
    this.width = 15
    this.height = 30
    this.pos = createVector(obj.xPos, obj.yPos)
    this.speed=obj.speed || 0;
    this.angle=0
    this.vel = createVector(
    this.speed*cos(this.angle),
    this.speed*sin(this.angle),
    this.deceleration = 0.25,
    this.tail = 4,
    this.track = obj.track
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
        
        if (this.pos.x>=0 && this.speed < 25 && frameCount % 10 === 0) {
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
}}