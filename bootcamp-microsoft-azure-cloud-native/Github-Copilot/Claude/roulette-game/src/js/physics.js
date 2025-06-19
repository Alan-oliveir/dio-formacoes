const GRAVITY = 9.81; // Acceleration due to gravity in m/s²
const FRICTION = 0.05; // Friction coefficient for the ball's movement

function applyGravity(ball) {
    ball.velocity.y += GRAVITY * ball.deltaTime; // Update vertical velocity
}

function applyFriction(ball) {
    ball.velocity.x *= (1 - FRICTION); // Apply friction to horizontal movement
    ball.velocity.y *= (1 - FRICTION); // Apply friction to vertical movement
}

function checkCollision(ball, canvasWidth, canvasHeight) {
    if (ball.position.x + ball.radius > canvasWidth || ball.position.x - ball.radius < 0) {
        ball.velocity.x *= -1; // Reverse horizontal direction on collision with walls
    }
    if (ball.position.y + ball.radius > canvasHeight || ball.position.y - ball.radius < 0) {
        ball.velocity.y *= -1; // Reverse vertical direction on collision with top/bottom
    }
}

function updatePhysics(ball, deltaTime) {
    ball.deltaTime = deltaTime; // Store deltaTime for calculations
    applyGravity(ball);
    applyFriction(ball);
    ball.position.x += ball.velocity.x * deltaTime; // Update position based on velocity
    ball.position.y += ball.velocity.y * deltaTime; // Update position based on velocity
    checkCollision(ball, ball.canvasWidth, ball.canvasHeight); // Check for collisions
}

export { updatePhysics };