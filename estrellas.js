const canvas = document.getElementById('my-canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Star(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size; // Tamaño fijo para las estrellas
    this.color = color;
    this.velocity = {
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() * 4) + 1
    };
}

Star.prototype.draw = function() {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.shadowColor = '#E3EAEF';
    c.shadowBlur = 20;
    c.fill();
    c.closePath();
    c.restore();
};

Star.prototype.update = function() {
    this.draw();

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // Si la estrella está completamente fuera de la pantalla, vuelve a la parte superior
    if (this.y - this.size > canvas.height) {
        this.y = -this.size;
    }
};

const stars = [];

function createStar() {
    const x = Math.random() * canvas.width;
    const size = 4; // Tamaño fijo para las estrellas (ajusta este valor según tu preferencia)
    stars.push(new Star(x, -size, size, 'white'));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.1) {
        createStar();
    }

    stars.forEach(star => {
        star.update();
    });
}

animate();
