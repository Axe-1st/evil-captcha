let attempts = 0;

function startGame() {
  document.getElementById('warning').style.display = 'none';
  document.getElementById('captcha-container').style.display = 'block';
}

const checkbox = document.getElementById('captcha-checkbox');
const text = document.getElementById('captcha-text');

checkbox.addEventListener('change', () => {
  attempts++;

  if (attempts === 1) {
    text.textContent = 'Try again.';
    checkbox.checked = false;
  } else if (attempts === 2) {
    text.textContent = 'Select all images with traffic lights.';
    // fake image grid and selection coming in level 2
  } else {
    text.textContent = 'Verifying...';
    setTimeout(() => {
      showRecaptchaBotIntro();
    }, 2000);
  }
});

function showRecaptchaBotIntro() {
  document.body.innerHTML = `
    <div class="bot-dialog">
      <div class="bot-face">👁️👄👁️</div>
      <p>Hi! I'm ReCaptcha, the new beta bot my owners created.</p>
      <p>Do you mind if we do some puzzles?</p>
      <button onclick="respond('uhh')">Uhh</button>
      <button onclick="respond('okay')">Okay...</button>
      <button onclick="respond('nah')">Nah</button>
    </div>
  `;
}

function respond(answer) {
  if (answer === 'uhh') {
    alert("Don't worry, it's just a short game. This is a one-of-a-kind invitation :)");
    // load level 2
  } else if (answer === 'okay') {
    alert("Yay! Let's begin.");
    // load level 2 with cheerful music
  } else if (answer === 'nah') {
    document.body.innerHTML = '<h1>Wait... what did you just say?</h1>';
    setTimeout(() => {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 2000);
  }
}
