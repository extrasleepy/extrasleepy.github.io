function createEyes() {
    const container = document.getElementById('eyesContainer');
    const gridSize = 8; // Number of eyes per row and column
    const eyeSize = 60; // Size of each eye
    const spacing = 900 / gridSize; // Spacing based on container size and grid size

    for (let i = 0; i < 56; i++) {
        let eye = document.createElement('div');
        eye.className = 'eye';

        // Calculate grid position
        let row = Math.floor(i / gridSize);
        let col = i % gridSize;
        let xOffset = (spacing - eyeSize) / 2; // Centering eye in grid space
        let yOffset = (spacing - eyeSize) / 2;

        // Random small adjustment to position
        let randomX = Math.random() * 20 - 5; // Random adjustment between -10px and +10px
        let randomY = Math.random() * 20 - 5;

        eye.style.left = `${col * spacing + xOffset + randomX}px`;
        eye.style.top = `${row * spacing + yOffset + randomY}px`;

        let pupil = document.createElement('div');
        pupil.className = 'pupil';
        eye.appendChild(pupil);

        container.appendChild(eye);
    }
}

function triggerBlink(eye) {
    const pupil = eye.querySelector('.pupil');
    eye.classList.add('blink');
    setTimeout(() => {
        eye.classList.remove('blink');
        movePupil(pupil);
    }, 200); // Duration of the blink
}

function movePupil(pupil) {
    const newPosition = Math.random() > 0.5 ? 5 : 25; // Move left or right
    pupil.style.left = `${newPosition}px`;
}

function startRandomBlinking() {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        setInterval(() => {
            triggerBlink(eye);
        }, Math.random() * 5000 + 1000); // Random interval between blinks
    });
}

window.onload = function () {
    createEyes();
    startRandomBlinking();
};
