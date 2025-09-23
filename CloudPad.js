function log(message) {
  const output = document.getElementById('output');
  const timestamp = new Date().toLocaleTimeString();
  output.innerHTML += `[${timestamp}] ${message}<br>`;
  output.scrollTop = output.scrollHeight; // Auto-scroll
}

function clearOutput() {
  const output = document.getElementById('output');
  output.innerHTML = '';
}

// ==========================
// Clipboard Assistant Module
// ==========================
function clipboardAssistant() {
  log("Clipboard Assistant running!");
  // Add your clipboard logic here
}

// ==========================
// Cloud Launcher Module
// ==========================
function cloudLauncher() {
  log("Cloud Launcher running!");
  // Add your cloud launcher logic here
}

// ==========================
// Share Sheet Utility Module
// ==========================
function shareSheetUtility() {
  log("Share Sheet Utility running!");
  // Add your share sheet code here
}

// ==========================
// Timed Snapshot Tool Module
// ==========================
function timedSnapshotTool() {
  log("Timed Snapshot Tool running!");
  // Add your timed snapshot logic here
}
