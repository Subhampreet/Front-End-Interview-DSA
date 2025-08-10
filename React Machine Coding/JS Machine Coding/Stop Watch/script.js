let timer = null;
let elapsedSeconds = 0;

const display = document.getElementById("display");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const min = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(Math.floor(seconds % 60)).padStart(2, "0");

  return `${hrs} : ${min} : ${secs}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedSeconds);
}

start.addEventListener("click", function () {
  if (timer) return;
  timer = setInterval(function () {
    elapsedSeconds++;
    updateDisplay();
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
});

reset.addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
  elapsedSeconds = 0;
  updateDisplay();
});

updateDisplay;
