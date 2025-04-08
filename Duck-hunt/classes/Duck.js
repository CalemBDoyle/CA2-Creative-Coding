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
    this.clicked = false;
        this.clickTimer = 0; 
        this.hitsNeeded = 1;
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
    move() {
        if (!this.clicked) {
            this.pos.x += this.vel.x;
            this.pos.y += this.vel.y;
        } else {
            this.clickTimer -= deltaTime;
            if (this.clickTimer <= 0) {
                this.clicked = false; // Resume moving after 1 sec
            }
        }
    }
    isClicked(mx, my) {
        let dx = mx - this.pos.x;
        let dy = my - this.pos.y;
        
        if (dx >= -this.width / 2 && dx <= this.width / 2 &&
            dy >= -this.height / 2 && dy <= this.height / 2) {
            
            
            this.clicked = true;
            this.clickTimer = 1000; // 1000 ms = 1 second
            return true;
        }
        return false;
    }
    registerHit() {
        this.hitsNeeded--;
    }

    dead() {
        return this.hitsNeeded <= 0;
    }

}