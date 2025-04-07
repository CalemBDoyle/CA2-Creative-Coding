class Puck extends Duck{
    constructor(obj){
        super(obj)
        this.clicked = false;
        this.clickTimer = 0; 
        this.hitsNeeded = 2;
    }
     
  
    render() {
        push();
        translate(this.pos.x, this.pos.y);
        if (this.vel.x < 0) {
            scale(-1, 1); // Flip horizontally
        }
        imageMode(CENTER);
        if (this.clicked) {
            image(puckHitImage, 0, 0, this.width, this.height); // Different image when clicked
        } else {
            image(puckImage, 0, 0, this.width, this.height); // Normal flying duck
        }
        pop();
        
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