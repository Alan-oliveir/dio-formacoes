class Pipes {
    constructor() {
        this.pipes = [];
        this.pipeWidth = 50;
        this.gap = 150;
        this.speed = 2;
        this.canvasHeight = 400; // Adjust based on your canvas height
    }

    createPipe() {
        const pipeHeight = Math.floor(Math.random() * (this.canvasHeight - this.gap - 20)) + 20;
        const pipe = {
            top: {
                x: canvas.width,
                y: 0,
                width: this.pipeWidth,
                height: pipeHeight
            },
            bottom: {
                x: canvas.width,
                y: pipeHeight + this.gap,
                width: this.pipeWidth,
                height: this.canvasHeight - pipeHeight - this.gap
            }
        };
        this.pipes.push(pipe);
    }

    update() {
        for (let i = this.pipes.length - 1; i >= 0; i--) {
            const pipe = this.pipes[i];
            pipe.top.x -= this.speed;
            pipe.bottom.x -= this.speed;

            if (pipe.top.x + this.pipeWidth < 0) {
                this.pipes.splice(i, 1);
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'green';
        for (const pipe of this.pipes) {
            ctx.fillRect(pipe.top.x, pipe.top.y, pipe.width, pipe.height);
            ctx.fillRect(pipe.bottom.x, pipe.bottom.y, pipe.width, pipe.height);
        }
    }
}

export default Pipes;