/* ==========================
   1. SELECT ELEMENTS (DOM)
   ========================== */
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

// Mode Buttons
const workBtn = document.getElementById('work-btn');
const shortBreakBtn = document.getElementById('short-break-btn');
const longBreakBtn = document.getElementById('long-break-btn');

// NEW: Session & Audio Elements
const sessionCountDisplay = document.getElementById('session-count');
const alarmSound = document.getElementById('alarm-sound');

/* ==========================
   2. APP STATE (Variables)
   ========================== */
let timerInterval;
let currentMode = 'work'; // 'work', 'short', or 'long'
let sessionsCompleted = 0; // NEW: Track how many pomodoros finished

const modes = {
    work: 25 * 60,  // 25 minutes
    short: 5 * 60,  // 5 minutes
    long: 15 * 60   // 15 minutes
};

let timeLeft = modes[currentMode];

/* ==========================
   3. EVENT LISTENERS
   ========================== */
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

workBtn.addEventListener('click', () => switchMode('work'));
shortBreakBtn.addEventListener('click', () => switchMode('short'));
longBreakBtn.addEventListener('click', () => switchMode('long'));

/* ==========================
   4. FUNCTIONS (The Logic)
   ========================== */

function startTimer() {
    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');

    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft === 0) {
            finishSession(); // NEW: Handle the end of timer
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    pauseBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');
}

function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = modes[currentMode];
    updateDisplay();
    pauseBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');
}

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    minutesDisplay.innerText = minutes.toString().padStart(2, '0');
    secondsDisplay.innerText = seconds.toString().padStart(2, '0');
    document.title = `${minutes}:${seconds.toString().padStart(2, '0')} - Pomodoro`;
}

function switchMode(mode) {
    currentMode = mode;
    timeLeft = modes[mode];

    // Remove active class from all
    document.querySelectorAll('.mode-buttons button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked button
    if (mode === 'work') workBtn.classList.add('active');
    if (mode === 'short') shortBreakBtn.classList.add('active');
    if (mode === 'long') longBreakBtn.classList.add('active');

    resetTimer();
}

// NEW FUNCTION: What happens when time hits 0?
function finishSession() {
    clearInterval(timerInterval); // Stop timer
    alarmSound.play(); // 🔊 PLAY SOUND

    // If we just finished a 'work' session, count it!
    if (currentMode === 'work') {
        sessionsCompleted++;
        sessionCountDisplay.innerText = sessionsCompleted;
    }

    // Ask user what to do next
    // setTimeout lets the sound play for a split second before the alert shows
    setTimeout(() => {
        if (currentMode === 'work') {
            alert("Great job! Take a break.");
            switchMode('short'); // Auto-switch to break
        } else {
            alert("Break is over! Back to work.");
            switchMode('work'); // Auto-switch to work
        }
    }, 100);
}