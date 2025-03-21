class Entity{
    constructor(obj){
    this.width = 20
    this.height = 10
    this.pos = createVector(obj.screenWidth/2, obj.screenHeight/2)
    this.speed=random(1,5);
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
        fill(random(255),random(255),random(255))
        ellipse (0,0,this.width,this.height)
        pop()
    }
    move(){
        
        if (frameCount % 10 === 0) {
            this.speed += 1;
        
            // Update velocity based on the new speed (no scaling by 10)
            this.vel.x = this.speed * cos(this.angle);
            this.vel.y = this.speed * sin(this.angle);
            
            console.log(this.speed);
            console.log(this.vel.x, this.vel.y);
        }
        this.pos.x = this.pos.x + this.vel.x
        this.pos.y = this.pos.y + this.vel.y
    }
    
}