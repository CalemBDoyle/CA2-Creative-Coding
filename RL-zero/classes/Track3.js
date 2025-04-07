class Track3 extends Track{
    constructor(obj) {
    super(obj)
    this.angle = obj.angle || 0
    }

    generateTrack() {
        push();
        translate(this.posX, this.posY);
        rotate(this.angle)
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
        // Check if the entity moves past the top boundary of the current track
        if (entity.pos.y - entity.height / 2 < this.posY) {
            let index = tracks.indexOf(this);
    
            // Ensure the track is in the array and is not already at index 1
            if (index !== -1 && index !== 1) {
                let newTrack = tracks[1]; // Reference to the second track
    
                // Store the entity's current velocity before switching
                let speedX = entity.vel.x;
                let speedY = entity.vel.y;
    
                // Reset the entity's position to the **bottom** of the next track
                entity.pos.x = newTrack.posX + entity.width / 2; // Center in the new track
                entity.pos.y = newTrack.posY + newTrack.height - entity.height / 2; // Start at bottom of new track
    
                // Restore the entity's velocity so it keeps moving
                entity.vel.x = speedX;
                entity.vel.y = speedY;
    
                // Swap tracks in the array to reflect the change
                [tracks[index], tracks[1]] = [tracks[1], tracks[index]];
            }
        }
    
        // Prevent entity from moving out of track boundaries (left/right)
        if (entity.pos.x - entity.width / 2 <= 0 || entity.pos.x + entity.width / 2 >= this.width) {
            entity.pos.x = constrain(entity.pos.x, entity.width / 2,  this.width - entity.width / 2);
        }
    

    }
}