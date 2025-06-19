class Roulette {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext('2d');
        this.radius = this.canvas.height / 2 - 10;
        this.rotationSpeed = 0;
        this.angle = 0;
        this.isSpinning = false;
        this.numbers = this.generateNumbers();
    }

    generateNumbers() {
        const numbers = [];
        for (let i = 0; i < 37; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.save();
        this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.context.rotate(this.angle);

        for (let i = 0; i < this.numbers.length; i++) {
            this.drawSegment(i);
        }

        this.context.restore();
    }

    drawSegment(index) {
        const angle = (Math.PI * 2) / this.numbers.length;
        this.context.beginPath();
        this.context.moveTo(0, 0);
        this.context.arc(0, 0, this.radius, index * angle, (index + 1) * angle);
        this.context.fillStyle = index % 2 === 0 ? '#ff0000' : '#000000';
        this.context.fill();
        this.context.stroke();
        this.context.fillStyle = '#ffffff';
        this.context.fillText(this.numbers[index], this.radius / 2 * Math.cos(angle * index + angle / 2), this.radius / 2 * Math.sin(angle * index + angle / 2));
    }

    spin() {
        this.isSpinning = true;
        this.rotationSpeed = 0.1; // Initial speed
        this.animate();
    }

    animate() {
        if (this.isSpinning) {
            this.angle += this.rotationSpeed;
            this.rotationSpeed *= 0.99; // Simulate friction
            if (this.rotationSpeed < 0.01) {
                this.isSpinning = false;
                this.rotationSpeed = 0;
            }
            this.draw();
            requestAnimationFrame(this.animate.bind(this));
        }
    }
}

export default Roulette;