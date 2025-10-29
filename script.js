const startBtn = document.getElementById("startBtn");
const empIdInput = document.getElementById("empId");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const timerText = document.getElementById("timer");

startBtn.addEventListener("click", () => {
  const empId = empIdInput.value.trim();
  if (!empId) {
    alert("請先輸入工號！");
    return;
  }

  startBtn.disabled = true;
  countdown.classList.remove("hidden");

  let timeLeft = 5;
  timerText.textContent = timeLeft;

  const interval = setInterval(() => {
    timeLeft--;
    timerText.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      countdown.classList.add("hidden");
      result.classList.remove("hidden");
      startBtn.disabled = false;
    }
  }, 1000);
});
