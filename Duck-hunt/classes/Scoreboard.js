class Scoreboard{
    constructor(){
    this.width = 200
    this.height = 50
    this.posX = 1000 - this.width
    this.posY = 1000 - this.height
    this.score = 0
    }
    render(){
        push();
        translate(this.posX, this.posY);
        
        // Draw the rectangle for the scoreboard
        fill(255);  // White background for the scoreboard
        rect(0, 0, this.width, this.height);

        // Display the score inside the box
        fill(0);  // Black text color
        textSize(20);
        textAlign(CENTER, CENTER);
        text(this.score, this.width / 2, this.height / 2);  // Display the score in the center of the box

        pop();
    }
    increaseScore(amount) {
        this.score += amount;
    }
}