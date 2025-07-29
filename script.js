let level = 1;

function startCaptcha() {
  document.getElementById("disclaimer").style.display = "none";
  document.getElementById("game").style.display = "block";
}

document.getElementById("captcha-checkbox")?.addEventListener("change", () => {
  const text = document.getElementById("captcha-text");
  if (level === 1) {
    text.textContent = "Verifying...";
    setTimeout(() => {
      text.textContent = "✅ Verified";
      document.getElementById("bot").style.display = "block";
    }, 1000);
  }
});

function handleAnswer(answer) {
  const dialog = document.getElementById("bot-dialog");
  const container = document.getElementById("puzzle-container");

  if (answer === "uhh") {
    dialog.textContent = "Don't worry, it's just a short game :)";
  } else if (answer === "okay") {
    dialog.textContent = "Yay! Starting Level 2...";
    container.innerHTML = `<p>Solve this: What has keys but can't open locks?</p><input type="text" id="puzzle-input"><button onclick="checkPuzzle()">Submit</button>`;
  } else if (answer === "nah") {
    document.body.innerHTML = `<h1>Too bad 😈</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe>`;
  }
}

function checkPuzzle() {
  const input = document.getElementById("puzzle-input").value.toLowerCase();
  if (input.includes("piano")) {
    alert("Correct! Level 3 coming soon...");
    // TODO: Load level 3
  } else {
    alert("Try again.");
  }
}
