const checkbox = document.getElementById('captcha-checkbox');
const text = document.getElementById('captcha-text');
let attempts = 0;

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    attempts++;

    if (attempts < 3) {
      // Fail the first 2 attempts
      text.textContent = 'Try again.';
      text.style.color = '#d00';
      checkbox.checked = false;

    } else {
      // Third time = trap
      text.textContent = 'Verifying...';
      text.style.color = '#333';

      setTimeout(() => {
        document.body.classList.add('dark-mode');
        text.textContent = 'YOU WILL NEVER ESCAPE THE CAPTCHA.';
        text.style.color = 'red';
        text.style.fontWeight = 'bold';
      }, 1500); // "Verifying..." delay
    }
  }
});
