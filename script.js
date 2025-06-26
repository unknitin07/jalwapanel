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

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const prefix = "10001"; // Based on your pattern

  const midnight = new Date(d);
  midnight.setHours(0, 0, 0, 0);
  const minutesSinceMidnight = Math.floor((d - midnight) / (1000 * 60));

  const base = 1109;
  const suffix = base + minutesSinceMidnight;

  const period = `${yyyy}${mm}${dd}${prefix}${suffix}`;
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
  addFakeLog(`[ADMIN] Injected prediction image ${currentImageIndex}.png`);
}

window.onload = () => {
  updatePanel();
  for (let i = 0; i < 5; i++) addFakeLog();
  setInterval(updatePanel, 60000);
};
