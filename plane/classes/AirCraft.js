class Craft{
    constructor(obj) {
        this.pos = createVector(obj.xPos || random(0,screenWidth), obj.yPos ||random(0,screenHeight))
        // this.pos.x = obj.pos.x || random(0,screenWidth);
        // this.pos.y = obj.pos.y || random(0,screenHeight);
        
        this.width = obj.width || 10;
        this.height =  obj.height || 20;
        
        
        this.speed=random(1,5);
        this.angle=random(0,360)
        this.vel = createVector(
        this.speed*cos(this.angle),
        this.speed*sin(this.angle)
        )
    }

    render(id) {
        push()
        translate(this.pos.x,this.pos.y)
        strokeWeight(1)
        text(id,10,-10)
        rotate(this.angle)
        ellipse(0,0,10,10)
        
        if(this.alert){
        noFill()
        stroke(0,0,0)
        strokeWeight(2)
        ellipse(this.height*0.4,0,this.height*1.4)
        }
        pop()
    }
    
    move() {
      
        
        this.pos.x = this.pos.x + this.vel.x
        this.pos.y = this.pos.y + this.vel.y
    }
    updateVel() {
        this.vel.x = this.speed * cos(this.angle);
        this.vel.y = this.speed * sin(this.angle);
    }
    increaseSpeed() {
        this.speed += 0.3;
        this.updateVel();
    }
 
    decreaseSpeed() {
        this.speed -= 0.3;
        if (this.speed < 0) {
            this.speed = 0.1
        }
        this.updateVel();
    }
 
    turnLeft() {
        this.angle -= 2;
        this.updateVel();
    }
 
    turnRight() {
        this.angle += 2;
        this.updateVel();
    }
}