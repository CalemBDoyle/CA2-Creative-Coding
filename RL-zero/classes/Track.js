class Track {
    constructor(obj) {
        this.width = obj.width ?? 1000;
        this.height = obj.height ?? 500;
        this.posX = obj.posX ?? 0;
        this.posY = obj.posY ?? 1000;
        this.corner = obj.corner ?? 75;
        this.numEntities = obj.numEntities ?? 1;
        this.entities = [];
        this.storedSpeed = { x: 0, y: 0 };
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
        // Check if the entity moves past the right boundary of the current track
        if (entity.pos.x - entity.width / 2 > this.posX + this.width) {
            let index = tracks.indexOf(this);
    
            // Ensure the track is in the array and is not already at index 1
            if (index !== -1 && index !== 1) {
                let newTrack = tracks[1]; // Reference to the second track
    
                // Store the entity's current velocity before switching
                let speedX = entity.vel.x;
                let speedY = entity.vel.y;
    
                // Reset the entity's position to the **start** of the second track
                entity.pos.x = newTrack.posX + entity.width / 2; // Start of track 2
                entity.pos.y = newTrack.posY + entity.height / 2; // Adjust to track 2's height
    
                // Restore the entity's velocity so it keeps moving
                entity.vel.x = speedX;
                entity.vel.y = speedY;
    
                // Swap tracks in the array to reflect the change
                [tracks[index], tracks[1]] = [tracks[1], tracks[index]];
            }
        }
        
        // Prevent entity from moving out of track boundaries (top/bottom)
        if (entity.pos.y - entity.height / 2 <= 0 || entity.pos.y + entity.height / 2 >= this.height) {
            entity.pos.y = constrain(entity.pos.y, entity.height / 2, this.height - entity.height / 2);
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
                xPos: this.width/2,
                yPos: this.height/2,
                speed: 0,
                track: this  // Pass the track reference
            }));
        }
    }
}
