class Menu {
    constructor(obj) {
        this.width = 300;
        this.height = 150;
        this.posX = screenWidth / 2 - this.width / 2;
        this.posY = screenHeight / 2 - this.height / 2;
        this.buttonWidth = 200;
        this.buttonHeight = 50;
        
    }

    render() {
        
        fill(255);
        rect(this.posX, this.posY, this.width, this.height);

        // Display "Play Again" button
        fill(0, 150, 0); 
        rect(this.posX + (this.width - this.buttonWidth) / 2, this.posY + this.height / 2 - 25, this.buttonWidth, this.buttonHeight);

        // Text on the button
        fill(255);
    
        textSize(24);
        textAlign(CENTER, CENTER);
        text("Play Again", this.posX + this.width / 2, this.posY + this.height / 2);
    }

    // Check if the play again button is clicked
    isClicked(mx, my) {
        return mx >= this.posX + (this.width - this.buttonWidth) / 2 &&
               mx <= this.posX + (this.width + this.buttonWidth) / 2 &&
               my >= this.posY + this.height / 2 - 25 &&
               my <= this.posY + this.height / 2 + 25;
    }
}