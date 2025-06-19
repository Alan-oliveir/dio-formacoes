class Ball {
    constructor(radius, canvasHeight) {
        this.radius = radius;
        this.canvasHeight = canvasHeight;
        this.x = canvasHeight / 2; // Start in the center
        this.y = canvasHeight / 2;
        this.speed = 0; // Initial speed
        this.gravity = 0.5; // Gravity effect
        this.bounceFactor = 0.7; // Energy loss on bounce
        this.isBouncing = false; // State of the ball
    }

    update() {
        if (this.isBouncing) {
            this.speed += this.gravity; // Apply gravity
            this.y += this.speed; // Update position

            // Check for bounce
            if (this.y + this.radius >= this.canvasHeight) {
                this.y = this.canvasHeight - this.radius; // Reset position to the edge
                this.speed = -this.speed * this.bounceFactor; // Reverse speed with bounce factor
            }
        }
    }

    startBouncing() {
        this.isBouncing = true; // Start the bouncing effect
    }

    stopBouncing() {
        this.isBouncing = false; // Stop the bouncing effect
        this.speed = 0; // Reset speed
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = 'white'; // Ball color
        context.fill();
        context.closePath();
    }
}