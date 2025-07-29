const checkbox = document.getElementById('captcha-checkbox');
const text = document.getElementById('captcha-text');
const modal = document.getElementById('captcha-modal');
let attempts = 0;

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    attempts++;

    if (attempts < 3) {
      text.textContent = 'Try again.';
      checkbox.checked = false;
    } else {
      text.textContent = 'Verifying...';
      text.style.color = '#333';

      setTimeout(() => {
        document.body.classList.add('dark-mode');
        text.textContent = 'YOU WILL NEVER ESCAPE THE CAPTCHA.';
        modal.style.display = 'flex';
      }, 1500);
    }
  }
});
