// ====== Helpers ======
function log(message) {
  const output = document.getElementById("output");
  const timestamp = new Date().toLocaleTimeString();
  output.innerHTML += `[${timestamp}] ${message}<br>`;
  output.scrollTop = output.scrollHeight; // auto-scroll
}

function clearOutput() {
  document.getElementById("output").innerHTML = "";
}

// ====== Your Modules ======
function clipboardAssistant() {
  log("Clipboard Assistant module executed.");
  // Add your real logic here
}

function cloudLauncher() {
  log("Cloud Launcher module executed.");
  // Add your real logic here
}

function shareSheetUtility() {
  log("Share Sheet Utility module executed.");
  // Add your real logic here
}

function timedSnapshotTool() {
  log("Timed Snapshot Tool module executed.");
  // Add your real logic here
}

// ====== Run Sequence ======
function runSequence() {
  const modules = [
    clipboardAssistant,
    cloudLauncher,
    shareSheetUtility,
    timedSnapshotTool
  ];

  let delay = 0;
  const interval = 1000; // 1 second between modules

  modules.forEach((moduleFunc) => {
    setTimeout(() => {
      moduleFunc();
    }, delay);
    delay += interval;
  });
}

// ====== Auto-run Timer (improved) ======
let autoRunIntervalId = null;

function autoRunModules(intervalSeconds = 30) {
  // Run immediately once
  runSequence();

  // Clear any previous interval
  if (autoRunIntervalId) clearInterval(autoRunIntervalId);

  // Start new interval
  autoRunIntervalId = setInterval(runSequence, intervalSeconds * 1000);
}

function startAutoRun() {
  const intervalSeconds = 30;
  log(`Auto-run timer started: running modules every ${intervalSeconds} seconds.`);
  autoRunModules(intervalSeconds);
}
