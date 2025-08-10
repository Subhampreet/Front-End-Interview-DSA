let count = 0;

const countDiv = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  countDiv.textContent = count;
}

incrementBtn.addEventListener("click", function () {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener("click", function () {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
