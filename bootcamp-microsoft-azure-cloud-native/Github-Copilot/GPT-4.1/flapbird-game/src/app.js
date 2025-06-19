const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const bird = {
    x: 50,
    y: 150,
    width: 20,
    height: 20,
    gravity: 0.6,
    lift: -15,
    velocity: 0,
    show: function() {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    update: function() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y + this.height >= canvas.height) {
            this.y = canvas.height - this.height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    },
    flap: function() {
        this.velocity += this.lift;
    }
};

const pipes = [];
const pipeWidth = 50;
const pipeGap = 100;
let frameCount = 0;

function setup() {
    canvas.width = 400;
    canvas.height = 600;
    document.addEventListener('keydown', () => bird.flap());
    requestAnimationFrame(loop);
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bird.update();
    bird.show();

    if (frameCount % 75 === 0) {
        const pipeHeight = Math.random() * (canvas.height - pipeGap - 20) + 20;
        pipes.push({ x: canvas.width, y: 0, height: pipeHeight });
        pipes.push({ x: canvas.width, y: pipeHeight + pipeGap, height: canvas.height - pipeHeight - pipeGap });
    }

    for (let i = pipes.length - 1; i >= 0; i--) {
        const pipe = pipes[i];
        pipe.x -= 2;

        ctx.fillStyle = 'green';
        ctx.fillRect(pipe.x, pipe.y, pipeWidth, pipe.height);

        if (pipe.x + pipeWidth < 0) {
            pipes.splice(i, 1);
        }

        if (bird.x + bird.width > pipe.x && bird.x < pipe.x + pipeWidth && bird.y < pipe.height) {
            alert('Game Over!');
            document.location.reload();
        }
    }

    frameCount++;
    requestAnimationFrame(loop);
}

setup();