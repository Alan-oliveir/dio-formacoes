class Bird {
    constructor() {
        this.x = 50; // Initial horizontal position
        this.y = 200; // Initial vertical position
        this.width = 34; // Width of the bird
        this.height = 24; // Height of the bird
        this.gravity = 0.6; // Gravity effect
        this.lift = -15; // Lift effect when flapping
        this.velocity = 0; // Initial velocity
    }

    flap() {
        this.velocity += this.lift; // Apply lift to the velocity
    }

    update() {
        this.velocity += this.gravity; // Apply gravity to the velocity
        this.y += this.velocity; // Update the vertical position

        // Prevent the bird from falling below the ground
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
            this.velocity = 0; // Reset velocity
        }

        // Prevent the bird from flying above the canvas
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0; // Reset velocity
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'yellow'; // Color of the bird
        ctx.fillRect(this.x, this.y, this.width, this.height); // Draw the bird
    }
}

export default Bird;