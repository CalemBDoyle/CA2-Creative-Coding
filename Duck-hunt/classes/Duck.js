class Duck{
    constructor(obj){
    this.width = 60
    this.height = 75
    this.pos = createVector(obj.xPos, (obj.yPos-this.height/2))
    this.speed=obj.speed || 2;
    this.direction=random(210,310)
    this.vel = createVector(
    this.speed*cos(this.direction),
    this.speed*sin(this.direction),
    )
    }
    
    render(){
        push()
        translate(this.pos.x,this.pos.y)
        if (this.vel.x < 0) {
            scale(-1, 1); // Flip horizontally
        }
       
        imageMode(CENTER); // Make sure the image is drawn centered around its position
        image(duckImage, 0, 0, this.width, this.height);
        pop()
    
    }
    move(){
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
    }
    isClicked(mx, my) {
        let dx = mx - this.pos.x;
        let dy = my - this.pos.y;
        
        return (dx >= -this.width / 2 && dx <= this.width / 2 &&
                dy >= -this.height / 2 && dy <= this.height / 2);
    }
    

}