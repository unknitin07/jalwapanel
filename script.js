let currentImageIndex = 1;

function generatePrediction() {
  const img = document.getElementById("prediction-img");
  img.src = `images/${currentImageIndex}.png`;
}

function updatePeriod() {
  const now = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: false
  });
  const d = new Date(now);

  const pad = (n, len = 2) => String(n).padStart(len, '0');
  const period =
    d.getFullYear() +
    pad(d.getMonth() + 1) +
    pad(d.getDate()) +
    pad(d.getHours()) +
    pad(d.getMinutes()) +
    pad(d.getSeconds()) +
    pad(d.getMilliseconds(), 3);

  document.getElementById("period-id").textContent = `Period: #${period}`;
}

function addFakeLog(text = null) {
  const logsContainer = document.getElementById("logs-console");
  const log = text || fakeLogs[Math.floor(Math.random() * fakeLogs.length)];
  const div = document.createElement("div");
  div.className = "log-entry";
  div.textContent = `[${new Date().toLocaleTimeString()}] ${log}`;
  logsContainer.appendChild(div);
  logsContainer.scrollTop = logsContainer.scrollHeight;
}

function updatePanel() {
  updatePeriod();
  generatePrediction();
  addFakeLog();
}

function injectPrediction() {
  currentImageIndex++;
  if (currentImageIndex > 9) currentImageIndex = 1;
  generatePrediction();
  addFakeLog(`[ADMIN] Prediction image updated to ${currentImageIndex}.png`);
}

window.onload = () => {
  updatePanel();
  setInterval(updatePanel, 60000); // every minute
};
