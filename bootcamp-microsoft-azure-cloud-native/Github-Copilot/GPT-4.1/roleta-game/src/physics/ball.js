class Ball {
    constructor(radius, initialPosition) {
        this.radius = radius;
        this.position = initialPosition; // { x: number, y: number }
        this.velocity = { x: 0, y: 0 }; // { x: number, y: number }
        this.gravity = 9.81; // Gravity constant in m/s^2
        this.bouncingCoefficient = 0.7; // Energy loss on bounce
    }

    updatePosition(deltaTime) {
        // Update velocity based on gravity
        this.velocity.y += this.gravity * deltaTime;

        // Update position based on velocity
        this.position.x += this.velocity.x * deltaTime;
        this.position.y += this.velocity.y * deltaTime;

        // Check for ground collision (assuming ground is at y = 0)
        if (this.position.y + this.radius >= 0) {
            this.position.y = -this.radius; // Reset position to just above the ground
            this.velocity.y = -this.velocity.y * this.bouncingCoefficient; // Reverse velocity and apply bounce
        }
    }

    checkCollision(wheelRadius) {
        // Check if the ball is within the wheel's radius
        const distanceFromCenter = Math.sqrt(this.position.x ** 2 + this.position.y ** 2);
        return distanceFromCenter < wheelRadius;
    }
}

export default Ball;