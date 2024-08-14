const barContainer = document.getElementById('bars');
const barCountInput = document.getElementById('barCount');
const speedInput = document.getElementById('speed');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// Modified color palette
const colors = ['#FF0000', '#FFFFFF', '#009933', '#000000', '#808080'];

function createBars(count) {
    barContainer.innerHTML = ''; // Clear any existing bars
    for (let i = 0; i < count; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.animationDelay = `${Math.random() * 0.5}s`; // Random delay
        bar.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        barContainer.appendChild(bar);
    }
}

function updateAnimation() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.animationDuration = `${0.5 + Math.random() * (2 - 0.5)}s`; // Randomized speed
    });
}

function startAnimation() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.animationPlayState = 'running';
    });
}

function stopAnimation() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.animationPlayState = 'paused';
    });
}

barCountInput.addEventListener('input', () => {
    createBars(barCountInput.value);
    updateAnimation();
});

speedInput.addEventListener('input', updateAnimation);
startButton.addEventListener('click', startAnimation);
stopButton.addEventListener('click', stopAnimation);

// Initial setup
createBars(barCountInput.value);
updateAnimation();
startAnimation(); // Start the animation automatically
