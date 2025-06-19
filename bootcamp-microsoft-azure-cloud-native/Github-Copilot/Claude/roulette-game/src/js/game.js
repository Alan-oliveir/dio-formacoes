const canvas = document.getElementById('rouletteCanvas');
const ctx = canvas.getContext('2d');

const roulette = new Roulette(ctx);
const ball = new Ball(ctx);
const physics = new Physics();

let isSpinning = false;
let spinSpeed = 0;
let spinAngle = 0;

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (isSpinning) {
        spinAngle += spinSpeed;
        spinSpeed *= 0.99; // Simulate friction
        if (spinSpeed < 0.1) {
            isSpinning = false;
            spinSpeed = 0;
        }
    }

    roulette.draw(spinAngle);
    ball.update();
    ball.draw();

    requestAnimationFrame(gameLoop);
}

function startSpin() {
    if (!isSpinning) {
        spinSpeed = Math.random() * 10 + 5; // Random initial speed
        isSpinning = true;
    }
}

canvas.addEventListener('click', startSpin);

gameLoop();