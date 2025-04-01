class Track {
    constructor(obj) {
        this.width = obj.width ?? 1000;
        this.height = obj.height ?? 500;
        this.posX = obj.posX ?? 0;
        this.posY = obj.posY ?? 1000;
        this.corner = obj.corner ?? 75;
        this.numEntities = obj.numEntities ?? 1;
        this.entities = [];
        this.generateEntities();
    }

    generateTrack() {
        push();
        translate(this.posX, this.posY);
        fill(200, 255, 255);
        rect(0, 0, this.width, this.height);
        fill(0, 0, 255);
        
        this.entities.forEach((entity) => {
            this.handleColl(entity);  // Track handles collision
            entity.render();
            entity.decelerate();
        });

        pop();
    }
    handleColl(entity) {
        //  Check if the entity collides with the left or right walls
        if (entity.pos.x - entity.width / 2 > this.posX + this.width) {
            entity.pos.x = this.posX; // Reset to left side of track
        }
    
        // Check if the entity collides with the top or bottom walls
        if (entity.pos.y - entity.height / 2 <= this.posY || entity.pos.y + entity.height / 2 >= this.posY + this.height) {
            entity.pos.y = constrain(entity.pos.y, this.posY + entity.height / 2, this.posY + this.height - entity.height / 2);
        }
    }
    

   

    movement() {
        if (keyIsDown(87)) {
            this.entities[0].move();
        }
        if (keyIsDown(65)) {
            this.entities[0].turnLeft();
        }
        if (keyIsDown(68)) {
            this.entities[0].turnRight();
        }
    }

    generateEntities() {
        for (let i = 0; i < this.numEntities; i++) {
            this.entities.push(new Entity({
                screenWidth: this.width,
                screenHeight: this.height,
                track: this  // Pass the track reference
            }));
        }
    }
}
