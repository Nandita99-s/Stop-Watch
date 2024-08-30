let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const laps = document.getElementById('laps');

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
    } else {
        timer = setInterval(() => {
            elapsedTime += 10;
            updateDisplay();
        }, 10);
        startStopBtn.textContent = 'Pause';
    }
    isRunning = !isRunning;
});

lapBtn.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('div');
        lapTime.classList.add('lap');
        lapTime.textContent = display.textContent;
        laps.appendChild(lapTime);
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    startStopBtn.textContent = 'Start';
    updateDisplay();
    laps.innerHTML = '';
});

function updateDisplay() {
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
}
