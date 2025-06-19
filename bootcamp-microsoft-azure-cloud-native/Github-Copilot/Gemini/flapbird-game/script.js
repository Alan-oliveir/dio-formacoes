const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let bird = {
    x: 50,
    y: 150,
    width: 20,
    height: 20,
    gravity: 0.6,
    lift: -15,
    velocity: 0
};

let pipes = [];
let frame = 0;
let score = 0;
let gameOver = false;

function setup() {
    canvas.width = 400;
    canvas.height = 600;
    document.addEventListener('keydown', flap);
    setInterval(update, 1000 / 60);
}

function flap() {
    if (!gameOver) {
        bird.velocity += bird.lift;
    }
}

function update() {
    if (!gameOver) {
        bird.velocity += bird.gravity;
        bird.y += bird.velocity;

        if (bird.y > canvas.height) {
            gameOver = true;
        }

        if (frame % 75 === 0) {
            pipes.push({
                x: canvas.width,
                y: Math.random() * (canvas.height - 200) + 50,
                width: 50,
                height: 200
            });
        }

        for (let i = pipes.length - 1; i >= 0; i--) {
            pipes[i].x -= 2;

            if (pipes[i].x + pipes[i].width < 0) {
                pipes.splice(i, 1);
                score++;
            }

            if (bird.x < pipes[i].x + pipes[i].width &&
                bird.x + bird.width > pipes[i].x &&
                bird.y < pipes[i].y &&
                bird.y + bird.height > pipes[i].y - pipes[i].height) {
                gameOver = true;
            }
        }

        frame++;
        render();
    } else {
        ctx.fillStyle = 'red';
        ctx.font = '30px Arial';
        ctx.fillText('Game Over', canvas.width / 2 - 70, canvas.height / 2);
        ctx.fillText('Score: ' + score, canvas.width / 2 - 50, canvas.height / 2 + 40);
    }
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'yellow';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

    ctx.fillStyle = 'green';
    for (let pipe of pipes) {
        ctx.fillRect(pipe.x, pipe.y - pipe.height, pipe.width, pipe.height);
        ctx.fillRect(pipe.x, pipe.y + 100, pipe.width, canvas.height - pipe.y - 100);
    }

    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 20);
}

setup();