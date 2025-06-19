const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 600;

let angle = 0;
let speed = 0.05;
let ballRadius = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedY = 0;
let gravity = 0.2;

function drawRouletteWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);

    // Draw the roulette wheel
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(0, 0, 250, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

function drawBall() {
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fill();
}

function updateBall() {
    ballSpeedY += gravity;
    ballY += ballSpeedY;

    // Bounce the ball off the bottom of the canvas
    if (ballY + ballRadius >= canvas.height) {
        ballY = canvas.height - ballRadius;
        ballSpeedY *= -0.7; // Bounce with some energy loss
    }
}

function update() {
    angle += speed;
    updateBall();
}

function animate() {
    drawRouletteWheel();
    drawBall();
    update();
    requestAnimationFrame(animate);
}

animate();