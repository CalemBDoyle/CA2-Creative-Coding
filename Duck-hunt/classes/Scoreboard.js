class Scoreboard {
  constructor(obj) {
    this.width = 200;
    this.height = 50;
    this.posX = 1000 - this.width;
    this.posY = 1000 - this.height;
    this.score = 0;

    this.airFields = obj.airFields;
    this.passedAirfields = 0;  // Tracks how many airfields the player has passed
  }

  render() {
    push();
    translate(this.posX, this.posY);

    // Draw the rectangle for the scoreboard
    fill(255); 
    rect(0, 0, this.width, this.height);

    // Display the score inside the box
    fill(0);  
    textSize(20);
    textAlign(CENTER, BOTTOM);
    text(this.score, this.width / 2, this.height / 2); 
    
    // Draw small grey or red circles to represent airfields
    let circleDiameter = 10; // Diameter of each circle
    let circleSpacing = (this.width - (this.airFields.length * circleDiameter)) / (this.airFields.length + 1); // Calculate spacing between circles
    
    for (let i = 0; i < this.airFields.length; i++) {
      // Set color based on whether the player has passed this airfield
      if (i < this.passedAirfields) {
        fill(255, 0, 0);  // Red for passed airfields
      } else {
        fill(150);  // Grey for unpassed airfields
      }

      let xPos = circleSpacing * (i + 1) + circleDiameter * i; // Calculate position for each circle
      ellipse(xPos, this.height - 10, circleDiameter, circleDiameter); // Draw the circle
    }

    pop();
  }

  increaseScore(amount) {
    this.score += amount;
  }

  // Call this method whenever the player passes an airfield
  passAirfield() {
    if (this.passedAirfields < this.airFields.length) {
      this.passedAirfields++;  // Increment the number of passed airfields
    }
  }
}
