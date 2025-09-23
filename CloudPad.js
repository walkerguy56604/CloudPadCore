let autoRunInterval;
let countdown = 30; // 30 seconds

function startAutoRunTimer() {
  clearInterval(autoRunInterval);
  countdown = 30; // reset timer each time you start

  // Show initial countdown
  document.getElementById("output").innerHTML = 
    "Auto-Run will trigger in " + countdown + " seconds...";

  autoRunInterval = setInterval(() => {
    countdown--;

    // Update the display
    document.getElementById("output").innerHTML = 
      "Auto-Run will trigger in " + countdown + " seconds...";

    if (countdown <= 0) {
      clearInterval(autoRunInterval);
      runAllModules(); // trigger your modules
      document.getElementById("output").innerHTML += 
        "<br>✅ Auto-Run executed!";
    }
  }, 1000); // update every second
}
