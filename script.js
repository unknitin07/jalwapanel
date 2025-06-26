let currentPeriod = 0;

function generatePrediction() {
  const pred = predictions[Math.floor(Math.random() * predictions.length)];
  document.getElementById("prediction-value").textContent = pred;
}

function updatePeriod() {
  currentPeriod++;
  const id = String(currentPeriod).padStart(4, '0');
  document.getElementById("period-id").textContent = `Period: #${id}`;
}

function addFakeLog() {
  const logsContainer = document.getElementById("logs-console");
  const log = fakeLogs[Math.floor(Math.random() * fakeLogs.length)];
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

// Initialize on load
window.onload = () => {
  updatePanel();
  setInterval(updatePanel, 60000); // every minute
};
