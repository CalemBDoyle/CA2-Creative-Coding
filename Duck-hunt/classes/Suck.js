class Suck extends Duck{
    constructor(obj){
        super(obj)
        this.hitsNeeded = 2;
        this.speed = 1
    }
     
  
    render() {
        push();
        translate(this.pos.x, this.pos.y);
        if (this.vel.x < 0) {
            scale(-1, 1); // Flip horizontally
        }
        imageMode(CENTER);
        if (this.clicked) {
            image(suckHitImage, 0, 0, this.width, this.height); // Different image when clicked
        } else {
            image(suckImage, 0, 0, this.width, this.height); // Normal flying duck
        }
        pop();
        
    }
    isClicked(mx, my) {
        let dx = mx - this.pos.x;
        let dy = my - this.pos.y;
        
        if (dx >= -this.width / 2 && dx <= this.width / 2 &&
            dy >= -this.height / 2 && dy <= this.height / 2) {
            
            if (!this.clicked) {
            this.clicked = true;
            this.clickTimer = 200;
            this.speed *=2;
            }
            return true;

            

        }
        return false;

    
}
update() {
    if (!this.clicked) {
        this.pos.x += this.vel.x * this.speed;
        this.pos.y += this.vel.y * this.speed;
} else {
    this.clickTimer -= deltaTime;
    if (this.clickTimer <= 0) {
        this.clicked = false; // Resume moving after 1 sec
    }
}
    
}
}