const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let bird;
let pipes = [];
let score = 0;
let gameOver = false;

function init() {
    bird = new Bird();
    pipes = [];
    score = 0;
    gameOver = false;
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    if (gameOver) {
        return;
    }
    
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

function update() {
    bird.update();

    if (frames % 100 === 0) {
        pipes.push(new Pipes());
    }

    pipes.forEach((pipe, index) => {
        pipe.update();
        if (pipe.offscreen()) {
            pipes.splice(index, 1);
            score++;
        }
        if (pipe.hits(bird)) {
            gameOver = true;
        }
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.draw(ctx);
    pipes.forEach(pipe => pipe.draw(ctx));
    
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);
    
    if (gameOver) {
        ctx.fillText('Game Over', canvas.width / 2 - 50, canvas.height / 2);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !gameOver) {
        bird.flap();
    } else if (event.code === 'Enter' && gameOver) {
        init();
    }
});

let frames = 0;
setInterval(() => {
    frames++;
}, 1000 / 60);

init();