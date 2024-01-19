const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numberOfDrops = 500;
const rainDrops = [];

class RainDrop {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 15;
        this.opacity = Math.random();
        this.speed = Math.random() * 5 + 3;
    }

    fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0 - this.length;
            this.x = Math.random() * canvas.width;
            this.speed = Math.random() * 5 + 3;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = `rgba(128, 0, 128, ${this.opacity})`; // purple color
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

function init() {
    for (let i = 0; i < numberOfDrops; i++) {
        rainDrops[i] = new RainDrop();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rainDrops.forEach(drop => {
        drop.fall();
        drop.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
