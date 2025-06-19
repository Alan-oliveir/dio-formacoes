const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

const wheelRadius = 200;
const ballRadius = 10;
let angle = 0;
let speed = 0;
let ball;
let isSpinning = false;

class Ball {
    constructor() {
        this.position = { x: canvas.width / 2, y: canvas.height / 2 };
        this.velocity = 0;
    }

    updatePosition() {
        this.position.y += this.velocity;
        this.velocity += 0.1; // Simulate gravity
        if (this.position.y + ballRadius >= canvas.height) {
            this.position.y = canvas.height - ballRadius;
            this.velocity *= -0.5; // Bounce effect
        }
    }

    checkCollision() {
        // Collision detection logic with the wheel can be implemented here
    }
}

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(0, 0, wheelRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function drawBall() {
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, ballRadius, 0, Math.PI * 2);
    ctx.fill();
}

function update() {
    if (isSpinning) {
        angle += speed;
        speed *= 0.99; // Deceleration
        ball.updatePosition();
        ball.checkCollision();
        if (speed < 0.01) {
            isSpinning = false; // Stop spinning when speed is low
        }
    }
    drawWheel();
    drawBall();
    requestAnimationFrame(update);
}

function startGame() {
    ball = new Ball();
    speed = Math.random() * 0.1 + 0.1; // Random initial speed
    isSpinning = true;
    update();
}

document.addEventListener('DOMContentLoaded', () => {
    canvas.width = 400;
    canvas.height = 400;
    document.getElementById('startButton').addEventListener('click', startGame);
});